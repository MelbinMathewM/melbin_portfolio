import { motion } from "framer-motion";
import { Mail, FolderOpen, Download } from "lucide-react";
import melbin_img from "/melbin.jpg";

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900"
        >
            <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.5 }}
                src={melbin_img}
                alt="Melbin Mathew"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg mb-6"
            />

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2"
            >
                Hi, I'm <span className="text-violet-500 text-3xl md:text-5xl"> Melbin Mathew</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-md md:text-xl text-violet-600 dark:text-violet-400 font-medium mb-4"
            >
                MERN Stack Developer
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-md md:text-xl italic text-gray-700 dark:text-gray-300 max-w-xl"
            >
                "Code is my canvas — I design, build, and deliver web experiences that matter."
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-4"
            >
                <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-violet-500 text-white rounded-md px-6 py-2 hover:bg-violet-600 transition"
                >
                    <Mail size={18} /> Contact Me
                </a>

                <div className="flex gap-4 w-full md:w-auto justify-center">
                    <a
                        href="#works"
                        className="flex items-center gap-2 border border-violet-500 rounded-md text-violet-500 px-6 py-2 hover:bg-violet-500 hover:text-white transition"
                    >
                        <FolderOpen size={18} /> Projects
                    </a>

                    <a
                        href="/Melbin_Mathew_Resume.pdf"
                        download
                        className="flex items-center gap-2 border border-violet-500 rounded-md text-violet-500 px-6 py-2 hover:bg-violet-500 hover:text-white transition"
                    >
                        <Download size={18} /> Resume
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
