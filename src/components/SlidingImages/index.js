'use client'
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#2C3E50",
        src: "js.png",
        title: "JavaScript"
    },
    {
        color: "#282C34",
        src: "react.png",
        title: "React"
    },
    {
        color: "#FFFFFF",
        src: "next.png",
        title: "Next.js"
    },
    {
        color: "#0C0C0C",
        src: "node.png",
        title: "Node.js"
    },
    {
        color: "#fff",
        src: "express.png",
        title: "Express"
    }
]

const slider2 = [
    {
        color: "#FFFFFF",
        src: "sass.png",
        title: "SASS"
    },
    {
        color: "#0C0C0C",
        src: "rtk.png",
        title: "Redux Toolkit"
    },
    {
        color: "#EFEFEF",
        src: "zustand.png",
        title: "Zustand"
    },
    {
        color: "#303F9F",
        src: "firebase.png",
        title: "Firebase"
    },
    {
        color: "#F4F4F9",
        src: "mysql.png",
        title: "MySQL"
    }
]

const slider3 = [
    {
        color: "#FFFFFF",
        src: "openai.png",
        title: "OpenAI"
    },
    {
        color: "#EFEFEF",
        src: "mui.png",
        title: "MUI"
    },
    {
        color: "#2C2F33",
        src: "mongo.png",
        title: "MongoDB"
    },
    {
        color: "#FFFFFF",
        src: "git.png",
        title: "Git"
    },
    {
        color: "#212121",
        src: "postman.png",
        title: "Postman"
    }
]

export default function Sliding() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [-100, 700])
    const x2 = useTransform(scrollYProgress, [0, 1], [600, -300])
    const x3 = useTransform(scrollYProgress, [0, 1], [-600, 500])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {
                    slider1.map((project, index) => {
                        return (
                            <div key={index} className={styles.project} style={{}}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        fill={true}
                                        sizes="(max-width: 768px) 100vw, 
                                            (max-width: 1200px) 50vw, 
                                            33vw"
                                        objectFit='contain'
                                        alt={project.title}
                                        src={`/logos/${project.src}`}
                                    />
                                </div>
                                <div className={styles.title}>{project.title}</div>
                            </div>
                        );
                    })
                }
            </motion.div>

            <motion.div style={{ x: x2 }} className={styles.slider}>
                {
                    slider2.map((project, index) => {
                        return (
                            <div key={index} className={styles.project} style={{ }}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        fill={true}
                                        sizes="(max-width: 768px) 100vw, 
                                            (max-width: 1200px) 50vw, 
                                            33vw"
                                        objectFit='contain'
                                        alt={project.title}
                                        src={`/logos/${project.src}`}
                                    />
                                </div>
                                <div className={styles.title}>{project.title}</div>
                            </div>
                        );
                    })
                }
            </motion.div>

            <motion.div style={{ x: x3 }} className={styles.slider}>
                {
                    slider3.map((project, index) => {
                        return (
                            <div key={index} className={styles.project} style={{ }}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        fill={true}
                                        sizes="(max-width: 768px) 100vw, 
                                            (max-width: 1200px) 50vw, 
                                            33vw"
                                        objectFit='contain'
                                        alt={project.title}
                                        src={`/logos/${project.src}`}
                                    />
                                </div>
                                <div className={styles.title}>{project.title}</div>
                            </div>
                        );
                    })
                }
            </motion.div>

            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}
