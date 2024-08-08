'use client'
import styles from "./page.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slideUp } from "./animate";
import { motion } from "framer-motion";

export default function Header() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const xPercentRef = useRef(0);
  const directionRef = useRef(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = () => {
      if (xPercentRef.current <= -100) {
        xPercentRef.current = 0;
      }
      if (xPercentRef.current > 0) {
        xPercentRef.current = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercentRef.current });
      gsap.set(secondText.current, { xPercent: xPercentRef.current });
      requestAnimationFrame(animation);
      xPercentRef.current += 0.1 * directionRef.current;
    };

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => directionRef.current = e.direction * -1,
      },
      x: "-500px",
    });

    requestAnimationFrame(animation);

    // Cleanup function to avoid memory leaks
    return () => {
      // Optional: Cancel GSAP animations if necessary
    };
  }, []);

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.main}>
      <Image 
        fill={true}
        src='/images/me.png'
        alt="img"
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Software Developer -</p>
          <p ref={secondText}>Software Developer -</p>
        </div>
      </div>

      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
        <p>Muhammad Suleman</p>
        <p>Software Developer</p>
      </div>
    </motion.main>
  );
}
