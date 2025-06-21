import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaAws,
    FaDocker,
    FaBootstrap,
    FaFolderOpen,
    FaPlug,
} from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import {
    SiTailwindcss,
    SiTypescript,
    SiMongodb,
    SiFirebase,
    SiKubernetes,
    SiExpress,
    SiPostgresql,
    SiVercel,
    SiRender,
    SiCloudinary,
    SiMicrodotblog,
    SiRedux,
    SiSocketdotio,
    SiRabbitmq,
} from "react-icons/si";
import { TbNetwork } from "react-icons/tb";

const skills = [
    {
        title: "Languages",
        items: [
            { name: "JavaScript", icon: <FaJs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
        ],
    },
    {
        title: "Frontend",
        items: [
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "React", icon: <FaReact /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "Bootstrap", icon: <FaBootstrap /> }
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "RestAPI", icon: <FaPlug /> },
            { name: "gRPC", icon: <SiMicrodotblog /> },
        ],
    },
    {
        title: "Database",
        items: [
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
        ],
    },
    {
        title: "Version Control",
        items: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
        ],
    },
    {
        title: "Cloud & DevOps",
        items: [
            { name: "Docker", icon: <FaDocker /> },
            { name: "Kubernetes", icon: <SiKubernetes /> },
            { name: "AWS", icon: <FaAws /> },
            { name: "Vercel", icon: <SiVercel /> },
            { name: "Render", icon: <SiRender /> },
            { name: "Cloudinary", icon: <SiCloudinary /> },
        ],
    },
    {
        title: "Architecture",
        items: [
            { name: "MVC", icon: <FiLayers /> },
            { name: "Repository", icon: <FaFolderOpen /> },
            { name: "Microservices", icon: <TbNetwork /> }
        ]
    },
    {
        title: "Libraries & Tools",
        items: [
            { name: "Redux", icon: <SiRedux /> },
            { name: "Socket.io", icon: <SiSocketdotio /> },
            { name: "RabbitMQ", icon: <SiRabbitmq /> },
            { name: "Cloudinary", icon: <SiCloudinary /> }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="w-full py-15 px-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12"
                >
                    My <span className="text-violet-500">Skillset</span>
                </motion.h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-gray-100 dark:bg-gray-950 dark:border dark:border-gray-800 rounded-md p-6 shadow-md hover:shadow-xl hover:dark:border-gray-700 transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-violet-500 mb-4">{group.title}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {group.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 text-sm hover:scale-105 transition-transform"
                                    >
                                        <span className="text-violet-500 text-xl">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;