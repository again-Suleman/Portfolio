'use client'
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import Project from "@/components/Projects";
import Landing from "@/components/Landing/page";
import Description from "@/components/Description/index"
import Preloader from "@/components/Preloader/index"
import Sliding from "@/components/SlidingImages/index"
import Contact from "@/components/Contact/index"

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Project />
      <h4 className='gradient-text'>Tools & Technology</h4>
      <Sliding />
      <Contact />
    </main>
  );
}
