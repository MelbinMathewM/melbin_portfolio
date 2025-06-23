import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo_img from "/logo.png";

const Navbar = () => {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const links = ["home", "about", "skills", "services", "works", "contact"];

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = savedTheme === "dark";

        if (prefersDark) {
            document.documentElement.classList.add("dark");
            setDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDark(false);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        links.forEach((link) => {
            const section = document.getElementById(link);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    

    const toggleTheme = () => {
        const html = document.documentElement;
        const isDark = html.classList.contains("dark");

        if (isDark) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDark(false);
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDark(true);
        }
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (    
        <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
            <div className="flex h-20 items-stretch text-white">

                {/* Left: Logo */}
                <div className="w-1/3 md:w-1/4 bg-none clip-left flex items-center justify-center rounded-br-sm">
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={logo_img}
                        alt="Logo"
                        className="w-25"
                    />
                </div>

                {/* Right: Links and Toggles */}
                <div className="w-2/3 md:w-3/4 clip-right bg-gray-200/90 sm:bg-gray-200/40 dark:bg-gray-800/90 sm:dark:bg-gray-800/40 sm:backdrop-blur-md px-4 flex items-center">
                    <div className="w-full flex items-center justify-between">
                        <div className="hidden md:flex mx-auto space-x-6 uppercase tracking-wide font-medium text-gray-100">
                            {links.map((link) => (
                                <a  
                                    key={link}
                                    href={`#${link}`}
                                    className={`transition ${
                                        activeLink === link
                                            ? "text-violet-500 font-semibold"
                                            : "text-gray-800 dark:text-gray-200 hover:text-violet-500"
                                    }`}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 ml-auto md:m-auto">
                            <button
                                onClick={toggleTheme}
                                className="text-violet-600 transition cursor-pointer"
                                aria-label="Toggle theme"
                            >
                                {dark ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                            <button
                                onClick={toggleMenu}
                                className="md:hidden text-violet-600 transition cursor-pointer"
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                    </div>
                </div>


                {/* Mobile menu */}
                {menuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 md:hidden px-6 py-4 z-40">
                        <ul className="flex flex-col gap-4 text-end uppercase tracking-wide font-medium">
                            {links.map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link}`}
                                        onClick={() => setMenuOpen(false)}
                                        className={`transition ${
                                            activeLink === link
                                                ? "text-violet-500 font-semibold"
                                                : "hover:text-violet-500"
                                        }`}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
