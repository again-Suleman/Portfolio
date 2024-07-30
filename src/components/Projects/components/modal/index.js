import React, { useEffect, useRef } from 'react'
import styles from './style.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';



const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" }, // Initaial what state it should be
    start: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }, // start is just name, define what will happen if the animation trigger
    end: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}


export default function index({ modal, projectsData }) {

    const { active, index } = modal;
    const container = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);


    useEffect(() => {
        //Move Container
        let xMoveContainer = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" })
        let yMoveContainer = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" })


        //Move cursor
        let xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
        let yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })


        //Move cursor label
        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })

        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e // Getting the mouse values

            xMoveContainer(clientX)
            yMoveContainer(clientY)
            xMoveCursor(clientX)
            yMoveCursor(clientY)
            xMoveCursorLabel(clientX)
            yMoveCursorLabel(clientY)
        })

    }, [])


    return (
        <>
            <motion.div ref={container} variants={scaleAnimation} initial={"initial"}
                animate={active ? "start" : "end"} className={styles.modalContainer} >
                <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
                    {
                        projectsData.map((project, index) => {
                            const { src, color } = project
                            return <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                                <Image
                                    src={`/project/${src}`}
                                    width={320}
                                    height={0}
                                    alt="image"
                                />
                            </div>
                        })
                    }


                </div>
            </motion.div>


            <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "start" : "end"}></motion.div>
            <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "start" : "end"}>View</motion.div>

        </>
    )
}
