'use client'
import { useEffect, useState } from "react";

// Components
import Project from "@/components/Projects";
import Landing from "@/components/Landing/page";
import Description from "@/components/Description/index"

export default function Home() {
  const [isloading, setIsLoading] = useState(true)
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          // setTimeout( () => {
          //   setIsLoading(false);
          //   document.body.style.cursor = 'default'
          //   window.scrollTo(0,0);
          // }, 2000)
      }
    )()
  }, [])

  return (
    <main>
      <Landing />
      <Description />
      <Project />
    </main>
  );
}
