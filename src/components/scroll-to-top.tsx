import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        visible && (
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-violet-600 text-white shadow-lg hover:bg-violet-700 transition-all duration-300"
            >
                <ArrowUp size={20} />
            </button>
        )
    );
};

export default ScrollToTopButton;
