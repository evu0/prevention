import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ham from '../public/ham2.svg'
import { useState, useEffect, useRef } from "react";
import styles from '../styles/Navbar.module.css'

const Navbar = ({children}) => {
    const [show, setShow] = useState(false);
    const variants = {
        show: {scale: 1.1},
        hide: {scale: 1},
    }
    const mynav = useRef();
    useEffect(()=>{
        let handler = (event)=>{
          if(mynav.current === undefined || mynav.current === null){
            return
          }else{
            if(!mynav.current.contains(event.target)){
              setShow(false)
            }
          }
        }
    
        document.addEventListener('mousedown', handler);
    
        return ()=>{
          document.removeEventListener('mousedown', handler)
        }
    })
    return ( 
        <>
        <nav className={styles.nav} ref={mynav}>

            <Link href='/'>
                <motion.a
                whileHover={{color: 'rgb(0, 173, 181)'}}
                transition={{duration: 0.5}}
                className={styles.logo}>
                    فحوصاتي
                </motion.a>
            </Link>

            <Link href='/'>
                <motion.a
                whileHover={{color: 'rgb(0, 173, 181)'}}
                transition={{duration: 0.5}}
                className={styles.navcomp}>
                    الصفحة الرئيسية
                </motion.a>
            </Link>

            <Link href={'/contact'}>
                <motion.a
                whileHover={{color: 'rgb(0, 173, 181)'}}
                transition={{duration: 0.5}}
                className={styles.navcomp}
                >
                    تواصل معنا
                </motion.a>
            </Link>
            
            <motion.a
            animate={show ? "show" : "hide"}
            variants={variants}
            className={styles.ham}
            onClick={()=>setShow(!show)}>
                <Image src={ham} width={40} height={40} layout={"intrinsic"}/>
            </motion.a>

            <Link href='/about'>
                <motion.a
                whileHover={{color: 'rgb(0, 173, 181)'}}
                transition={{duration: 0.5}}
                className={styles.navcomp}>
                    من نحن
                </motion.a>
            </Link>

        </nav>
        <AnimatePresence>
            {show && (
            <>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={styles.mobileNav}>

                <Link href='/'>
                    <div className={styles.mobileComp}>
                        الصفحة الرئيسية
                    </div>
                </Link>

                <Link href="/contact">
                    <div className={styles.mobileComp}>
                        تواصل معنا
                    </div>
                </Link>

                <Link href='/about'>
                    <div className={styles.mobileComp}>
                        من نحن
                    </div>
                </Link>
            </motion.div>
            </>
            )}
        </AnimatePresence>
        { children }
        </>        
     );
}
 
export default Navbar;