import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { forSlide, forScale } from '../../';

export default function Index({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={styles.link} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={forSlide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={forScale} 
          animate={isActive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
}