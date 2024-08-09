import React, { useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { Link as ScrollLink } from 'react-scroll'; 


import { motion } from 'framer-motion';
import { menuSlide } from '../animation';

// Components
import Curve from './Curve/index';
import Footer from './Footer/index';

const navItems = [
  {
    title: "Home",
    href: "homeSection",  
  },
  {
    title: "Work",
    href: "projectSection",  
  },
  {
    title: "About",
    href: "descriptionSection",  
  },
  {
    title: "Contact",
    href: "contactSection",  
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname); }} className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {
            navItems.map((data, index) => (
              <ScrollLink
                key={index}
                to={data.href} 
                smooth={true}
                duration={900}
                offset={-50}
                className={styles.link}
                onSetActive={() => setSelectedIndicator(data.href)}
              >
                <div className={styles.el}>
                  <a>{data.title}</a>
                  <div className={styles.indicator}></div>
                </div>
              </ScrollLink>
            ))
          }
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
