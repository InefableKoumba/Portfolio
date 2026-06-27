import { NextRequest, NextResponse } from 'next/server'
import { locales, hasLocale } from '@/app/[lang]/dictionaries'

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get('accept-language') ?? ''
  // Check if French is preferred
  const preferred = acceptLang
    .split(',')
    .map((s) => s.split(';')[0].trim().slice(0, 2).toLowerCase())
  for (const lang of preferred) {
    if (hasLocale(lang)) return lang
  }
  return 'en'
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Next.js internals and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Check if a supported locale is already in the path
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect to detected locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|api|assets|.*\\..*).*)'],
}
