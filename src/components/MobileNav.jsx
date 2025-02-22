import { AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import Logo from './Logo'

const MobileNav = ({ isClicked, setIsClicked }) => {
    const year = new Date().getFullYear();

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

    const navVariant = {
        initial: {
            scaleY: 0,
            transformOrigin: "top"
        },
        animate: {
            scaleY: 1,
            transformOrigin: "top",
            transition: {
                duration: 0.3,
                ease: [0.12, 0, 0.39, 0],
            }
        },
        exit: {
            scaleY: -5,
            transition: {
                delay: 0.1,
                duration: 0.9,
                ease: [0.12, 0, 0.39, 0],
            }
        }
    }

    const containerVariants = {
            hidden: { opacity: 0 },
            show: (delay) => ({
            opacity: 1,
                transition: {
                staggerChildren: 0.2,
                delayChildren: delay,
                ease: "easeInOut",
            },
        }),
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const DURATION = 0.25;
    const DELAY = 0.025;
    const EASE = "easeInOut";

  return (
    <AnimatePresence mode='wait'>
        { isClicked && (
            <motion.div
            variants={navVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className='fixed inset-0 bg-cwhite z-50 text-cblack'>
            <div className="header p-6 flex justify-between items-center">
                <Logo color="dark"/>
                <div className="close uppercase cursor-pointer hover:underline ctransition" onClick={() => setIsClicked(false)}>CLOSE</div>
            </div>
                <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                custom={0.5}
                className="links h-[350px] mt-[6rem] flex justify-center flex-col items-center space-y-20 cursor-pointer">
                    {navLinks.map((link, i) => (
                            <motion.div
                            variants={itemVariants}
                            key={i}>
                                <motion.a
                                initial="initial"
                                whileHover="hovered"
                                onClick={() => setIsClicked(false)}
                                href={link.href} className='block uppercase relative overflow-hidden whitespace-nowrap'>
                                    <div>
                                        {link.name.split("").map((l, i) => (
                                            <motion.span
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
                                            key={i} className='inline-block text-4xl py-2' >{l}</motion.span>
                                        ))}
                                    </div>
                                    <div className='absolute inset-0'>
                                        {link.name.split("").map((l, i) => (
                                            <motion.span
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
                                            key={i} className='inline-block text-4xl py-2' >{l}</motion.span>
                                        ))}
                                    </div>
                                </motion.a>
                            </motion.div>
                    ))}
                </motion.div>
                <div className="fixed bottom-6 nav-footer w-full">
                    <div className='flex justify-center'>
                        <p>&copy; {year} by Walter💜</p>
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default MobileNav
