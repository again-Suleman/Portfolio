import React from 'react'
import { useRef } from 'react';
import styles from './page.module.scss'
import { useInView, motion } from 'framer-motion';

// Componentssssss
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton/index';




export default function index() {
    const description = useRef(null);
    const phrase = "Bringing your complex visions to life, because I guess solving problems is more fun than a day off :) Ready to dive into some code—or chaos?"

    // Checking when the container comes in view lool
    const isInView = useInView(description)


    return (
        <div ref={description} className={styles.description}>
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
                    <Rounded className={styles.button} >
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
