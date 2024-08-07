import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#2C3E50", 
        src: "js.png"
    },
    {
        color: "#282C34", 
        src: "react.png"
    },
    {
        color: "#FFFFFF", 
        src: "next.png"
    },
    {
        color: "#0C0C0C", 
        src: "node.png"
    }
]

const slider2 = [
    {
        color: "#EFEFEF",
        src: "zustand.png"
    },
    {
        color: "#0C0C0C", 
        src: "rtk.png"
    },
    {
        color: "#303F9F",
        src: "firebase.png"
    },
    {
        color: "#F4F4F9", 
        src: "mysql.png"
    }
]

const slider3 = [
    {
        color: "#FFFFFF", 
        src: "openai.png"
    },
    {
        color: "#2C2F33",
        src: "mongo.png"
    },
    {
        color: "#FFFFFF", 
        src: "git.png"
    },
    {
        color: "#212121", 
        src: "postman.png"
    }
]

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    // const x1 = useTransform(scrollYProgress, [0, 1], [-150, 300])
    // const x2 = useTransform(scrollYProgress, [0, 1], [250, -350])
    // const x3 = useTransform(scrollYProgress, [0, 1], [-400, 400])
    const x1 = useTransform(scrollYProgress, [0, 1], [100, 1100])
    const x2 = useTransform(scrollYProgress, [0, 1], [800, -350])
    const x3 = useTransform(scrollYProgress, [0, 1], [-600, 600])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return ( 
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {
                    slider1.map((project, index) => {
                        return <div key={index} className={styles.project} style={{ backgroundColor: project.color }} >
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    objectFit='contain'
                                    alt={"image"}
                                    src={`/logos/${project.src}`} />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {
                    slider2.map((project, index) => {
                        return <div key={index} className={styles.project} style={{ backgroundColor: project.color }} >
                            <div key={index} className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    objectFit='contain'
                                    alt={"image"}
                                    src={`/logos/${project.src}`} />
                            </div>
                        </div>
                    })
                }
            </motion.div>

            <motion.div style={{ x: x3 }} className={styles.slider}>
                {
                    slider3.map((project, index) => {
                        return <div key={index} className={styles.project} style={{ backgroundColor: project.color }} >
                            <div key={index} className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    objectFit='contain'
                                    alt={"image"}
                                    src={`/logos/${project.src}`} />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}
