import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaLock, FaChartLine, FaRocket, FaSyncAlt } from "react-icons/fa";

const services = [
    {
        icon: <FaLaptopCode size={32} />,
        title: "Full-Stack Web Development",
        description: "Build modern, scalable full-stack applications using the MERN stack (MongoDB, Express, React, Node.js).",
    },
    {
        icon: <FaCode size={32} />,
        title: "Frontend Development",
        description: "Design responsive, interactive UIs with React and Tailwind CSS, optimized for performance and accessibility.",
    },
    {
        icon: <FaServer size={32} />,
        title: "Backend & API Development",
        description: "Develop secure and efficient REST APIs and backend services with Node.js and Express.",
    },
    {
        icon: <FaLock size={32} />,
        title: "Authentication & Security",
        description: "Implement robust authentication with JWT, OAuth, and role-based access while ensuring app security.",
    },
    {
        icon: <FaDatabase size={32} />,
        title: "Database & Data Management",
        description: "Design and integrate MongoDB and SQL databases, ensuring efficiency, reliability, and scalability.",
    },
    {
        icon: <FaRocket size={32} />,
        title: "Deployment & DevOps",
        description: "Deploy applications using Docker, Vercel, Render, or AWS with CI/CD pipelines and cloud scaling.",
    },
    {
        icon: <FaSyncAlt size={32} />,
        title: "Real-Time Features",
        description: "Add live chat, notifications, and real-time updates powered by WebSockets and Socket.IO.",
    },
    {
        icon: <FaChartLine size={32} />,
        title: "SEO & Analytics",
        description: "Optimize websites for search engines (SEO) and integrate analytics dashboards for performance tracking.",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="w-full py-15 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Services
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="text-violet-500 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
