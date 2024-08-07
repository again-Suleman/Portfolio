'use client';
import React, { useRef } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

// Components
import Rounded from '@/common/RoundedButton';
import Magnetic from '@/common/Magnetic/index';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/avatar.png`}
                            />
                        </div>
                        <h2>Let's connect</h2>
                    </span>
                    <h2>& work</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"white"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>


                <div className={styles.nav}>
                    <a href="mailto:contact.suleman46@gmail.com">
                        <Rounded>
                            <p>contact.suleman46@gmail.com</p>
                        </Rounded>
                    </a>

                    <a href="tel:+923101414342">
                        <Rounded>
                            <p>+92 310 1414342</p>
                        </Rounded>
                    </a>
                </div>



                <div className={styles.info}>
                    <h3>socials</h3>
                    <div>

                        <Magnetic>
                            <a href="https://www.linkedin.com/in/muh-suleman/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                                    <path d="M16 8a6 6 0 0 1 6 6v7H14v-7a2 2 0 1 0-4 0v7H2v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                <p>LinkedIn</p>
                            </a>
                        </Magnetic>

                        <Magnetic>
                            <a href="https://github.com/again-Suleman" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                                    <path d="M12 2a10 10 0 0 0-3.16 19.47c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.91 1.53 2.37 1.09 2.95.83.09-.66.36-1.09.65-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 7.14c.85.004 1.71.115 2.51.34 1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.41.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.37.32.7.95.7 1.92v2.85c0 .27.18.58.7.48A10 10 0 0 0 12 2z"></path>
                                </svg>
                                <p>Github</p>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://www.instagram.com/sulemanx.x/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 0 12.63 16 4 4 0 0 0 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                                </svg>
                                <p>Instagram</p>
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}
