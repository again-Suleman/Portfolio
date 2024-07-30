'use client'
import React from 'react'
import { useState } from 'react'
import styles from "./page.module.css";
import { projectsData } from './data'

// Components
import Project from "./components/project/index"
import Modal from "./components/modal/index"

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

