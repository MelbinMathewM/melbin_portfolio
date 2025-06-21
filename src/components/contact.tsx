import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState<boolean>(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name.trim() || !email.trim() || !message.trim()) {
            toast.error("Please fill out all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        setLoading(true);

        emailjs
            .send(
                serviceId,
                templateId,
                formData,
                userId
            )
            .then(() => {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                setLoading(false);
            })
            .catch(() => {
                toast.error("Failed to send message. Please try again.");
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="w-full py-15 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-2"
                >
                    Let's connect
                </motion.h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Have a question, project idea, or just want to say hello? Drop a message below.
                </p>


                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-row gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-300 hover:border-purple-400 dark:border-gray-700"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-300 hover:border-purple-400 dark:bg-gray-900 dark:border-gray-700"
                        />
                    </div>
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-gray-300 hover:border-purple-400 dark:border-gray-700 bg-transparent"
                    ></textarea>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-violet-500 text-white px-6 py-2 rounded hover:bg-violet-600 transition"
                    >
                        {loading ? (
                            <div className="flex items-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 01-8 8z"
                                    />
                                </svg>
                                <span>Sending...</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 cursor-pointer">
                                <span>Send</span>
                                <FaMessage className="text-white" />
                            </div>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
