import { useEffect, useRef } from "react";

export const sectionReveal = (delay = 200, viewFactor = 0.25) => ({
  origin: "bottom",
  distance: "50px",
  duration: 700,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

export function withSectionReveal<P extends object>(Component: React.ComponentType<P>) {
  return function ComponentWithReveal(props: P) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (!sectionRef.current) return;

      async function animate() {
        if (sectionRef.current) {
          const sr = (await import("scrollreveal")).default();

          sr.reveal(sectionRef.current, sectionReveal());
        }
      }
      animate();
    }, []);

    return <Component {...props} ref={sectionRef} />;
  };
}
