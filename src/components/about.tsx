import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import melbin_mathew_img from "/melbin_mathew_1.jpg";

const About = () => {
    return (
        <section
            id="about"
            className="py-15 px-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Left: Profile Image */}
                <motion.div
                    className="w-full md:w-1/3 flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={melbin_mathew_img}
                        alt="Melbin Mathew"
                        className="w-56 rounded-lg object-cover shadow-lg"
                    />
                </motion.div>

                {/* Right: Text + Skills */}
                <motion.div
                    className="w-full md:w-2/3 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>

                    <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
                        I'm <span className="font-semibold text-violet-500">Melbin Mathew</span>,
                        a passionate <strong>MERN Stack Developer</strong> from Kerala, India.
                        I design and build full-stack web apps that are clean, scalable, and user-focused.
                        With a background in Physics and a dedication to modern tech, I turn ideas into impactful solutions.
                    </p>

                    {/* Skills */}
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-6 text-3xl text-violet-500 justify-items-center">
                        <SiMongodb title="MongoDB" />
                        <SiExpress title="Express.js" />
                        <FaReact title="React.js" />
                        <FaNodeJs title="Node.js" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
