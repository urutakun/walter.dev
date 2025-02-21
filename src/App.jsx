import "./styles.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { projects } from "./projects";
import { RiArrowRightUpLine } from "react-icons/ri";

function App() {
    const year = new Date().getFullYear();

    useEffect(() => {
      const lenis = new Lenis({
        smooth: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }, []);

    const { scrollYProgress } = useScroll();

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

    const DURATION = 0.25;
    const DELAY = 0.025;
    const EASE = "easeInOut";

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
        <div className="lg:text-xl bg-cblack">
            <div className="wrapper w-full text-cwhite font-font1 p-8">
            <Nav />
            <div className="hero__container relative">
                <div className="hero w-[85vw] md:w-[65vw] lg:w-[50vw] h-[90vh] flex flex-col md:flex-row md:space-x-4 lg:space-x-16 items-center justify-center mx-auto">
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.9 }}}
                className="image__wrapper w-[200px] h-[280px] overflow-hidden">
                    <motion.img
                    src="../public/images/walter.png"
                    alt="walter"
                    className="w-full h-full object-cover"
                    style={{ y, scale: 0.9 }}
                    />
                </motion.div>
                <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                custom={0.6}
                className="hero__text space-y-3 mt-10">
                    <div className="overflow-hidden">
                        <motion.div
                        variants={itemVariants}
                        className="text__1 uppercase text-2xl md:text-3xl lg:text-5xl flex items-end space-x-3 pl-14">
                            <span className="text-2xl font-font2">&#40;01&#41;</span>
                            <span className="font-bold font-font3 flex-shrink-0">
                                web developer
                            </span>
                        </motion.div>
                    </div>
                    <div className="overflow-hidden">
                        <motion.div
                        variants={itemVariants}
                        className="text__2 uppercase text-2xl md:text-3xl lg:text-5xl flex items-end space-x-3">
                            <span className="text-2xl font-font2">&#40;02&#41;</span>
                            <span className="font-bold font-font3 flex-shrink-0">
                                web designer
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
                </div>
                <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                custom={1}
                className="absolute bottom-0 w-full flex justify-between items-end">
                    <motion.div
                    variants={itemVariants}
                    className="brief__desc w-[350px] hidden md:block">
                        <p>
                        I'm a Web Developer & Designer who loves building beautiful, and
                        functional websites
                        </p>
                    </motion.div>
                    <motion.div
                    variants={itemVariants}
                    className="chase md:hidden">
                        <p>Chase</p>
                    </motion.div>
                    <motion.div
                    variants={itemVariants}
                    className="excellence md:hidden">
                        <p>Excellence</p>
                    </motion.div>
                    <motion.div
                    variants={itemVariants}
                    className="brief__desc">
                        <p>&copy; {year} Philippines</p>
                    </motion.div>
                </motion.div>
            </div>
            {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once : true}}
            custom={1}
            className="quote__section relative text-[5rem] md:text-[5rem] lg:text-[10rem] text-center space-y-6 h-[54rem] lg:h-screen flex flex-col justify-center items-center uppercase mt-[5rem] cursor-pointer border">
                <Image
                src="astronaut.jpg"
                position={{
                    top: "clamp(50px, 10vw, 100px)",
                    left: "clamp(10px, 5vw, 100px)",
                }}
                />
                <Image
                src="runner.jpg"
                position={{
                    top: "clamp(20px, 15vw, 400px)",
                    right: "clamp(2%, 5vw, 10%)",
                }}
                />
                <div
                className="overflow-hidden py-2">
                    <motion.p
                    variants={itemVariants}
                    >Excellence is</motion.p>
                </div>
                <div
                className="overflow-hidden py-2">
                    <motion.p
                    variants={itemVariants}
                    >a mindset</motion.p>
                </div>
            </motion.div> */}
            <div id="about" className="about__section grid grid-cols-2 grid-rows-2 h-[50rem] lg:w-[70vw] text-center lg:text-left lg:mx-auto mt-[10rem]">
                <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                custom={0.8}
                viewport={{ once: true }}
                className="exp col-span-2 lg:col-span-1">
                    <div className="overflow-hidden py-2">
                        <motion.p
                        variants={itemVariants}
                        className="text-3xl uppercase">Freelance Web Developer</motion.p>
                    </div>
                    <div className="overflow-hidden py-2">
                        <motion.p
                        variants={itemVariants}
                        className="uppercase text-md text-gray-500">
                            &#40;4 years of experience&#41;
                        </motion.p>
                    </div>
                    <div className="overflow-hidden py-2">
                        <motion.p
                        variants={itemVariants}
                        className="font-font4 mt-4 text-xl leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                            I designed and built websites that are both aesthetically
                            beautiful and functional. It is not all about making things work,
                            it&apos;s about creating something that feels right. Making every
                            pixel, line of code, and interaction count.
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                custom={0.8}
                viewport={{ once: true }}
                className="about col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:justify-self-end">
                    <div className="overflow-hidden py-2">
                        <motion.p
                        variants={itemVariants}
                        className="text-3xl uppercase">About Me</motion.p>
                    </div>
                    <div className="overflow-hidden py-2">
                        <motion.p
                        variants={itemVariants}
                        className="uppercase text-md text-gray-500">
                            &#40;22 years of life experience&#41;
                        </motion.p>
                    </div>
                    <div className="overflow-hidden py-2">
                        <motion.p
                        variants={itemVariants}
                        className="font-font4 mt-4 text-xl leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                            Hey there! I&apos;m a web designer and developer turning ideas
                            into seamless, user-friendly digital experience. I love creating
                            websites that don&apos;t just look great but feel intuitive and
                            work effortlessly
                        </motion.p>
                    </div>
                    <div className="overflow-hidden py-2">
                        <motion.p
                        variants={itemVariants}
                        className="font-font4 mt-4 text-xl leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                            When I&apos;m not coding , you&apos;ll probably find me exploring new tech,
                            upskilling, or getting inspired by great designs. Let&apos;s create
                            something awesome together!
                        </motion.p>
                    </div>
                    <motion.div
                    variants={itemVariants}
                    className="call__to__action w-full mx-auto mt-4">
                        <button className="px-4 py-2 border border-cwhite rounded-full">
                        <motion.a
                            initial="initial"
                            whileHover="hovered"
                            className="relative capitalize overflow-hidden block"
                            href="#contact"
                        >
                            <div>
                            {"work with me".split("").map((l, i) => (
                                <motion.span
                                key={i}
                                variants={{
                                    initial: {
                                    y: 0,
                                    },
                                    hovered: {
                                    y: "-100%",
                                    },
                                }}
                                transition={{
                                    duration: DURATION,
                                    delay: DELAY * i,
                                    ease: EASE,
                                }}
                                className="inline-block"
                                >
                                {l === " " ? "\u00A0" : l}
                                </motion.span>
                            ))}
                            </div>
                            <div className="absolute inset-0">
                            {"work with me".split("").map((l, i) => (
                                <motion.span
                                key={i}
                                variants={{
                                    initial: {
                                    y: "100%",
                                    },
                                    hovered: {
                                    y: 0,
                                    },
                                }}
                                transition={{
                                    duration: DURATION,
                                    delay: DELAY * i,
                                    ease: EASE,
                                }}
                                className="inline-block"
                                >
                                {l === " " ? "\u00A0" : l}
                                </motion.span>
                            ))}
                            </div>
                        </motion.a>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
            <div id="projects" className="projects__section mt-[15rem] lg:mt-[20rem]">
                <div className="header text-4xl lg:text-6xl text-center lg:text-left overflow-hidden py-2">
                    <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay:0.3, duration: 0.9 }}}
                    viewport={{ once: true }}
                    >Projects & Creations</motion.p>
                </div>
                <Projects />
            </div>
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            custom={1}
            viewport={{ once: true}}
            id="contact"
            className="contact__section h-[50rem] flex justify-center flex-col items-center">
                <div className="contact text-[4rem] lg:text-[8rem] overflow-hidden py-2">
                    <motion.div
                    variants={itemVariants}
                    className="cta flex items-center space-x-4 font-font3">
                        <p>Let&apos;s get in touch</p>
                        <div className="arrow__up">
                            <RiArrowRightUpLine className="text-[4rem] lg:text-[10rem]"/>
                        </div>
                    </motion.div>
                </div>
                <div className="email underline text-2xl lg:text-5xl mt-8 overflow-hidden py-2">
                    <motion.p
                    variants={itemVariants}
                    >waltergagate1001@gmail.com</motion.p>
                </div>
                <div className="linkedin underline text-2xl lg:text-5xl mt-8 overflow-hidden py-2">
                    <motion.p
                    variants={itemVariants}
                    >linkedin.com/in/walter-gagate-9459ab26a</motion.p>
                </div>
            </motion.div>
            </div>
            <Footer />
        </div>

    );
}

export default App;

const Image = ({ src, position }) => {
    const imageRef = useRef(null);


    const { scrollYProgress } = useScroll();

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

    return (
      <motion.div
        className="w-[120px] lg:w-[250px] h-[200px] lg:h-[400px] absolute overflow-hidden"
        style={{ ...position }}
      >
        <motion.img
          style={{
            y,
            scale: 1.2,
          }}
          src={`/images/${src}`}
          alt={src}
          className="w-full h-full object-cover"
        />
      </motion.div>
    );
  };

  const Projects = () => {
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
       <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="project__wrapper grid grid-cols-2 lg:grid-cols-4 gap-12 mt-[8rem]">
        {projects.map((project, index) => (
          <motion.div
          variants={itemVariants}
          key={index}>
            <div className="project__number">
              <p>0{project.id}</p>
            </div>
            <div className="image__wrapper w-full my-4 cursor-pointer">
              <img
                src={`/images/projects/${project.image}`}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="details">
              <div className="title">
                <p className="capitalize text-2xl">{project.name}</p>
              </div>
              <div className="tags flex items-cente flex-shrink-0 flex-wrap">
                {project.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="px-2 py-1 border border-gray-500 w-fit rounded-full mr-2 mt-2"
                  >
                    <p className="font-font4 uppercase text-xs text-gray-500">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        </motion.div>
    );
  };
