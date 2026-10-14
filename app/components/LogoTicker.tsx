"use client";

import { useEffect, useRef } from "react";

const FULL_SPEED = 2;
const ITEM_WIDTH = 65; // 35px image + 2 * 15px margin, as laid out by the template CSS

export default function LogoTicker({ images }: { images: string[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const fullW = images.length * ITEM_WIDTH;
    let speed = FULL_SPEED;
    const timer = setInterval(() => {
      let next = scroller.scrollLeft + speed;
      if (next > fullW * 2 - scroller.clientWidth) next -= fullW;
      scroller.scrollLeft = next;
    }, 20);
    const pause = () => (speed = 0);
    const resume = () => (speed = FULL_SPEED);
    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", resume);
    return () => {
      clearInterval(timer);
      scroller.removeEventListener("mouseenter", pause);
      scroller.removeEventListener("mouseleave", resume);
    };
  }, [images.length]);

  const loop = [...images, ...images];

  return (
    <div id="logo-ticker">
      <div className="footer-logo-slider" ref={scrollerRef}>
        <ul className="footer-logo">
          {loop.map((src, i) => (
            <li key={i} style={{ left: i * ITEM_WIDTH }}>
              <img src={src} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
