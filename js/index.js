gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline()
  .from("nav", {
    y: -100,
    duration: 1.1,
  })
  .from("#profession-1", {
    y: -50,
    opacity: 0,
    duration: 1.1,
  })
  .from(
    "#profession-2",
    {
      y: -35,
      opacity: 0,
      duration: 1,
      ease: "",
    },
    "-=.7"
  )
  .from(
    "#contact-button",
    {
      opacity: 0,
      duration: 1.7,
    },
    "-=.7"
  )
  .from(
    "#social-media-icons-desktop",
    {
      opacity: 0,
      duration: 1.7,
    },
    "-=1.7"
  );

gsap.to("#circle-1", {
  y: 50,
  duration: 5,
  x: 6,
  yoyo: true,
  repeat: -1,
});
gsap.to("#circle-2", {
  y: -50,
  duration: 7,
  x: -6,
  yoyo: true,
  repeat: -1,
});
gsap.to("#circle-3", {
  y: 70,
  duration: 4,
  x: -2,
  yoyo: true,
  repeat: -1,
});
gsap.to("#circle-4", {
  y: 40,
  duration: 10,
  x: 100,
  yoyo: true,
  repeat: -1,
  rotate: 360,
});
