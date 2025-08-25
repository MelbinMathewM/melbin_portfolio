import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import prograbyte_img from "/prograbyte_landing.webp";
import glassics_img from "/glassics_landing.webp";
import astute_img from "/astute_landing.webp";
import drchiller_img from "/drchiller_landing.webp";
import meltools_img from "/meltools_landing.webp";

const projects = [
    {
        name: "Prograbyte",
        image: prograbyte_img,
        description: "A full-featured MERN stack e-learning platform where users can purchase tutorials, attend live classes, and publish blogs.",
        live: "https://prograbyte.site",
        github: "https://github.com/melbinmathewm/prograbyte",
    },
    {
        name: "Glassics",
        image: glassics_img,
        description: "An e-commerce platform for sunglasses and eyeglasses with cart functionality, Stripe payments, and an admin dashboard.",
        live: "https://glassics.onrender.com",
        github: "https://github.com/melbinmathewm/glassics",
    },
    {
        name: "CTS - Chiller Technical Services L.L.C",
        image: drchiller_img,
        description: "A corporate website showcasing water chillers, HVAC products, and technical services in the UAE.",
        live: "https://drchiller.com",
        github: "https://github.com/dr-chiller/dr.chiller"
    },
    {
        name: "Astute",
        image: astute_img,
        description: "A React-based PDF viewer application that uses Cloudinary for secure file storage and access.",
        live: "https://astute-eight.vercel.app",
        github: "https://github.com/melbinmathewm/astute_frontend",
    },
    {
        name: "MelTools",
        image: meltools_img,
        description: "A React app providing quick access to essential tools like QR Code generation and WebP image conversion, all in one place.",
        live: "https://meltools.vercel.app",
        github: "https://github.com/melbinmathewm/meltools"
    }
];

const Works = () => {
    return (
        <section id="works" className="w-full py-15 px-6 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-4"
                >
                    My Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10"
                >
                    A selection of some of the work I've done recently — showcasing full-stack skills, real-world solutions, and modern UI.
                </motion.p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                            <img src={project.image} alt={project.name} className="rounded-t-lg object-cover h-48 w-full" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex gap-4">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-violet-500 hover:text-violet-700 flex items-center gap-1"
                                    >
                                        <FaExternalLinkAlt size={16} /> Live
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-1"
                                    >
                                        <FaGithub size={18} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-5 text-center">
                    <a
                        href="https://github.com/melbinmathewm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-violet-500 dark:text-violet-400 hover:text-violet-600 text-lg font-medium"
                    >
                        <FaGithub size={20} /> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Works;
