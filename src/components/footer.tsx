import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import logo_img from "/logo.png";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300 px-6 py-5 mt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                {/* Logo + Description */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center space-x-3 text-center">
                        <img src={logo_img} alt="Logo" className="w-20 h-20 object-contain" />
                        <h4 className="text-lg font-semibold">Melbin Mathew</h4>
                    </div>
                    <p className="text-sm max-w-xs">
                        Passionate MERN Stack developer building modern, scalable, and engaging web apps.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mt-6 mb-4">Contact</h3>
                    <a
                        href="mailto:melbinppmathewp@gmail.com"
                        className="text-sm hover:text-violet-400 flex items-center"
                    >
                        <FaEnvelope className="mr-2" />
                        melbinppmathewp@gmail.com
                    </a>
                    <a
                        href="tel:+919747827371"
                        className="text-sm hover:text-violet-400 flex items-center"
                    >
                        <FaPhone className="mr-2" />
                        +91 9747827371
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="text-lg font-semibold mt-6 mb-4">Follow Me</h3>
                    <div className="flex justify-center md:justify-start gap-4 text-xl dark:text-gray-100 text-gray-800">
                        <a href="https://github.com/melbinmathewm" className="hover:text-violet-600" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/melbinmathewm" className="hover:text-violet-600" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://facebook.com/melbin.mathew.90281?mibextid=ZbWKwL" className="hover:text-violet-600" target="_blank" rel="noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com/triumph_beau?igsh=MXc1Y25mOWN0emw5aw==" className="hover:text-violet-600" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="mt-10 mx-8 border-t border-gray-300 dark:border-gray-800" />
            <p className="text-center text-sm text-gray-400 mt-5 dark:text-gray-700">
                © {new Date().getFullYear()} Melbin Mathew. All rights reserved.
            </p>

        </footer>
    );
};

export default Footer;
