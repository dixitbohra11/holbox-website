import { useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: { children: React.ReactNode; delay?: 1 | 2 | 3 | 4 | 0; as?: any; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setVisible(true); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const d = delay ? `reveal-delay-${delay}` : "";
  return <Tag ref={ref} className={`reveal ${d} ${visible ? "in" : ""} ${className}`}>{children}</Tag>;
}
