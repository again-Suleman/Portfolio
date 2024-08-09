'use client';
import React from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';

// External
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Nav from './nav/index';



export default function Header({ scrollToProject, scrollToDescription, scrollToContact }) {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        })
    }, [])
    return (
        <>
            <div ref={header} className={styles.header}>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.eat}>I</p>
                        <p className={styles.sleep}>Code</p>
                        <p className={styles.code}>To Live :)</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el} onClick={scrollToDescription}>
                            <Link to="descriptionSection" smooth={true} duration={900} offset={-200}>
                                About
                            </Link>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el} onClick={scrollToProject}>
                            <Link to="projectSection" smooth={true} duration={900}>
                                Work
                            </Link>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el} onClick={scrollToContact}>
                            <Link to="contactSection" smooth={true} duration={900} offset={500}>
                                Contact
                            </Link>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>

            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>


            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>

        </>
    )
}
