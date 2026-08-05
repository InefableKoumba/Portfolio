export default function GrainyGradients() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden select-none"
    >
      {/* SVG Noise / Grain Filter Definition */}
      <svg className="hidden">
        <filter id="grainy-noise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0"
          />
        </filter>
      </svg>

      {/* Top Left Teal Arc/Glow */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[90px] opacity-40 mix-blend-screen animate-pulse"
        style={{
          background:
            'radial-gradient(circle, rgba(94, 234, 212, 0.45) 0%, rgba(14, 26, 43, 0) 70%)',
          animationDuration: '8s',
        }}
      />

      {/* Top Right Vibrant Orange/Copper Arc Glow */}
      <div
        className="absolute -top-[10%] -right-[15%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full blur-[100px] opacity-50 mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 178, 56, 0.5) 0%, rgba(220, 120, 20, 0.25) 45%, rgba(14, 26, 43, 0) 75%)',
        }}
      />

      {/* Center Floating Subtler Cyan/Teal Ambient Glow */}
      <div
        className="absolute top-[40%] -left-[15%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[120px] opacity-30 mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle, rgba(94, 234, 212, 0.35) 0%, rgba(14, 26, 43, 0) 70%)',
        }}
      />

      {/* Bottom Right Warm Amber/Copper Glow */}
      <div
        className="absolute top-[65%] -right-[10%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full blur-[110px] opacity-40 mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 178, 56, 0.4) 0%, rgba(200, 100, 30, 0.2) 50%, rgba(14, 26, 43, 0) 75%)',
        }}
      />

      {/* Fullscreen Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.45] mix-blend-overlay"
        style={{
          filter: 'url(#grainy-noise)',
        }}
      />
    </div>
  )
}
