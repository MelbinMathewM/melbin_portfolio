import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import prograbyte_img from "/prograbyte_landing.png";
import glassics_img from "/glassics_landing.png";
import astute_img from "/astute_landing.png";

const projects = [
    {
        name: "Prograbyte",
        image: prograbyte_img,
        description: "A MERN Stack based E-learning site where users can buy tutorials, attend live classes and add blogs.",
        live: "https://prograbyte.site",
        github: "https://github.com/melbinmathewm/prograbyte",
    },
    {
        name: "Glassics",
        image: glassics_img,
        description: "An E-commerce site for sunglasses and eyeglasses with cart, Stripe payment, admin panel, and more.",
        live: "https://glassics.shop",
        github: "https://github.com/melbinmathewm/glassics",
    },
    {
        name: "Astute",
        image: astute_img,
        description: "A PDF viewing site using React and Cloudinary as its database",
        live: "https://astute-eight.vercel.app",
        github: "https://github.com/melbinmathewm/astute_frontend",
    }
];

const Works = () => {
    return (
        <section id="works" className="w-full py-15 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
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

                {/* Project Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
