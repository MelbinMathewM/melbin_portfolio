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
        description: "Create responsive and interactive UIs using React, Tailwind CSS, and modern frontend tools.",
    },
    {
        icon: <FaServer size={32} />,
        title: "Backend API Development",
        description: "Develop robust REST APIs and backend services with Express and Node.js.",
    },
    {
        icon: <FaLock size={32} />,
        title: "Authentication & Security",
        description: "Implement secure login systems with JWT, OAuth, and role-based access.",
    },
    {
        icon: <FaDatabase size={32} />,
        title: "Database Management",
        description: "Design and integrate MongoDB and SQL databases efficiently and securely.",
    },
    {
        icon: <FaRocket size={32} />,
        title: "Deployment & DevOps",
        description: "Deploy applications using Docker, Vercel, Render, or AWS with CI/CD workflows.",
    },
    {
        icon: <FaSyncAlt size={32} />,
        title: "Real-Time Features",
        description: "Integrate live chat, notifications, and real-time updates using Socket.IO.",
    },
    {
        icon: <FaChartLine size={32} />,
        title: "Admin Dashboard & Analytics",
        description: "Create admin interfaces and integrate user or product analytics dashboards.",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="py-15 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
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
