'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, manageModal, link}) {
    const handleClick = (e) => {
        if (link) {
            window.open(link, '_blank'); 
        }
    }

    return (
        <div onClick={handleClick}  onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}
