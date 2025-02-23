import Logo from "./Logo";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"

function Footer () {
    const year = new Date().getFullYear();
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
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
    };

    return (
      <div
        className="relative h-[100px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 h-[100px] w-full">
          <div className="content h-full w-full bg-cwhite font-font1 text-2xl flex items-center justify-between px-6">
              <div className="logo">
                <Logo color="dark"/>
              </div>
              <motion.div
              variants={containerVariants}
              custom={0.2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2}}
              className="center text-md text-center text-sm lg:text-xl">
                <div className="overflow-hidden lg:py-2">
                    <motion.p
                    variants={itemVariants}
                    >Let&apos;s bring your ideas to life</motion.p>
                </div>
                <div className="overflow-hidden">
                    <motion.div
                    variants={itemVariants}
                    iv className="text-xs lg:text-sm">&copy; {year} By Walter</motion.div>
                </div>
              </motion.div>
              <div className="socials">
                    <a href="https://www.linkedin.com/in/walter-gagate-9459ab26a/"><FaLinkedin /></a>
              </div>
          </div>
        </div>
      </div>
    );
  };

  export default Footer;
