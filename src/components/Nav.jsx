import React, { useState } from 'react'
import { motion } from "framer-motion";
import Logo from "./Logo";
import MobileNav from './MobileNav';


const Nav = () => {
    const [isClicked, setIsClicked] = useState(false);
    const navLinks = [
        {
            name: "about",
            href: "#about"
        },
        {
            name: "projects",
            href: "#projects"
        },
        {
            name: "contact",
            href: "#contact"
        },
    ];

    const navVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 1,
                ease: "easeInOut",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };



    const DURATION = 0.25;
    const DELAY = 0.025;
    const EASE = "easeInOut";

  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    animate="show"
    className='font-font1 flex justify-between items-center'>
        <MobileNav isClicked={isClicked} setIsClicked={setIsClicked}/>
        <motion.div
        variants={itemVariants}
        >
            <Logo color="light"/>
        </motion.div>
        {navLinks.map((link, index) => (
            <motion.div
            variants={itemVariants}
            key={index}
            >
                <motion.a
                href={link.href}
                initial="initial"
                whileHover="hovered"
                className='hidden md:block uppercase overflow-hidden relative  whitespace-nowrap'>
                    <div>{link.name.split("").map((l, i) => (
                        <motion.span key={i}
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            }
                        }}
                        transition={{
                            duration: DURATION,
                            delay: DELAY * i,
                            ease: EASE,
                        }}
                        className='inline-block'>{l}</motion.span>
                    ))}</div>
                    <div className='absolute inset-0'>{link.name.split("").map((l, i) => (
                        <motion.span key={i}
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            }
                        }}
                        transition={{
                            duration: DURATION,
                            delay: DELAY * i,
                            ease: EASE,
                        }}
                        className='inline-block'>{l}</motion.span>
                    ))}</div>
                </motion.a>
            </motion.div>
        ))}

        {/* <motion.div
        variants={itemVariants}
        className="menu uppercase md:hidden cursor-pointer hover:underline ctransition" onClick={() => setIsClicked(true)}>menu</motion.div> */}
    </motion.nav>
  )
}

export default Nav
