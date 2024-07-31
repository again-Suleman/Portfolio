'use client'
import React from 'react'
import { useState } from 'react'
import styles from "./page.module.css";

// Components
import Project from "./components/project/index"
import Modal from "./components/modal/index"

// Data
export const projectsData = [
  {
    title: "Aristo.ai",
    src: "aristo.png",
    color: "#000000"
  },
  {
    title: "Tracking.me",
    src: "tracking.png",
    color: "#00a1b3"
  },
  {
    title: "Gorex.ai",
    src: "gorex.png",
    color: "#EFE8D3"
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63"
  }
]


export default function Home() {

  const [modal, setModal] = useState({active: false, index:0})

  return (
    <main className={styles.mainContainer}>
      <div className={styles.child}>
        {
          projectsData.map((project, index)=>{
            return <Project key={index} index={index} title={project.title} setModal={setModal}/>
          })
        }
      </div>
      <Modal modal={modal} projectsData={projectsData} />
    </main>
  )
}

