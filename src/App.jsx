import "./styles.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { projects } from "./projects";
import { RiArrowRightUpLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

function App() {
    const year = new Date().getFullYear();

    useEffect(() => {
      const lenis = new Lenis({
        smooth: true,
        lerp: 0.1
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }, []);

    const { scrollYProgress } = useScroll();

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

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
                <div className="hero w-[85vw] md:w-[65vw] lg:w-[50vw] h-[85vh] lg:h-[90vh] flex flex-col md:flex-row md:space-x-4 lg:space-x-16 items-center justify-center mx-auto">
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.9 }}}
                className="image__wrapper w-[200px] h-[280px] overflow-hidden">
                    <motion.img
                    src="/images/walter.png"
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
                        className="text__1 uppercase text-2xl md:text-3xl lg:text-5xl flex items-end space-x-2 lg:space-x-3 pl-14">
                            <span className="text-sm lg:text-2xl font-font2">&#40;01&#41;</span>
                            <span className="font-bold font-font3 flex-shrink-0">
                                web developer
                            </span>
                        </motion.div>
                    </div>
                    <div className="overflow-hidden">
                        <motion.div
                        variants={itemVariants}
                        className="text__2 uppercase text-2xl md:text-3xl lg:text-5xl flex items-end space-x-2 lg:space-x-3">
                            <span className="text-sm lg:text-2xl font-font2">&#40;02&#41;</span>
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
                className="absolute bottom-0 w-full justify-between items-end hidden lg:flex">
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
                    className="brief__desc hidden md:block">
                        <p>&copy; {year} Philippines</p>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once : true}}
            custom={1}
            className="quote__section h-[40vh] lg:h-screen mt-[3rem]">
                <div className="relative h-full">
                    <div
                    className="quote absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  flex flex-col items-center text-4xl md:text-7xl lg:text-9xl font-font2  w-full">
                        <span
                        className="leading-relaxed">EXCELLENCE IS</span>
                        <span
                        className="leading-relaxed">A MINDSET</span>
                    </div>
                    <div className="mx-auto w-full">
                        <ParallaxImage
                            src="/images/astronaut.webp"
                            alt="Excellence in space"
                            title="Excellence in space"
                            start={300}
                            end={-100}
                            className="w-[70px] md:w-[120px] h-100px lg:w-[200px] ml-1 lg:ml-10"/>
                        <ParallaxImage
                            src="/images/runner.webp"
                            alt="Excellence in running"
                            title="Excellence in running"
                            start={500}
                            end={-200}
                            className="w-[80px] lg:w-[200px] md:w-[120px] ml-[210px] md:ml-[580px] lg:ml-[350px]"/>
                        <ParallaxImage
                            src="/images/chess.webp"
                            alt="Excellence in chess"
                            title="Excellence in chess"
                            start={150}
                            end={-150}
                            className="w-[80px] md:w-[100px] lg:w-[180px] ml-[80px] lg:ml-[1600px]"/>
                    </div>
                </div>
            </motion.div>

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
                className="about col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:justify-self-end mt-[8rem] lg:mt-0">
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
            <div id="projects" className="projects__section mt-[30rem] lg:mt-[20rem]">
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
            custom={0.6}
            viewport={{ once: true}}
            id="contact"
            className="contact__section h-[35rem] grid grid-cols-4 grid-rows-3 mt-20">
                <motion.div
                variants={itemVariants}
                className="sec__1 col-start-3 md:col-start-4 col-end-4 self-end lg:self-center lg:col-start-1 lg:row-start-2">
                    <RiArrowRightUpLine className="text-[10rem] lg:text-[20rem] rotate-180 lg:rotate-0"/>
                </motion.div>
                <div className="sec__2 row-start-2 col-span-4 lg:col-start-2">
                        <motion.p
                        variants={itemVariants}
                        className="text-[4rem] lg:text-[9rem] leading-tight font-font2">Let&apos;s get in touch</motion.p>
                    <div className="socials space-y-3 mt-4 text-sm lg:text-xl">
                        <motion.div
                        variants={itemVariants}
                        className="email underline flex items-center space-x-2">
                            <MdAlternateEmail />
                            <p>waltergagate1001@gmail.com</p>
                        </motion.div>
                        <motion.div
                        variants={itemVariants}
                        className="email underline flex items-center space-x-2">
                            <BsLinkedin />
                            <a href="https://www.linkedin.com/in/walter-gagate-9459ab26a/">linkedin.com/in/walter-gagate-9459ab26a</a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            </div>
            <Footer />
        </div>

    );
}

export default App;

const ParallaxImage = ({ src, className, alt, start, end, title }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.85, 1], [1, 0.85]);
    const y = useTransform(scrollYProgress, [0, 1], [start, end])


    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    useMotionValue(scrollYProgress, "change", latest => console.log(latest));

   return (
        <motion.img
        ref={ref}
        style={{
            opacity,
            transform
        }}
        src={src}
        alt={alt}
        title={title}
        className={className} />

   )
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
                className="project__wrapper grid grid-cols-2 lg:grid-cols-4 gap-12 mt-[4rem] lg:mt-[8rem]">
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
