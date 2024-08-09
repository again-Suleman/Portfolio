import React from 'react'
import { useRef } from 'react';
import styles from './page.module.scss'
import { useInView, motion } from 'framer-motion';

// Componentssssss
import { slideUp, opacity } from './animation';
import MagneticEffect from '@/common/Magnetic';


export default function Description() {
    const description = useRef(null);
    const phrase = "Hi! Good to see you, my name is Suleman and I love shaping my vision into reality using few lines of code ;)"

    // Checking when the container comes in view lool
    const isInView = useInView(description)

    return (
        <div id='descriptionSection' ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Began with a laptop and a cup of tea, now aiming for heights only I can see.</motion.p>
                <div data-scroll data-scroll-speed={0.1} >
                    <MagneticEffect>
                        <button className={styles.button} >
                            <p>
                                Fun Fact <br />
                                About me!
                            </p>
                        </button>
                    </MagneticEffect>
                </div>
            </div>
        </div>
    )
}
