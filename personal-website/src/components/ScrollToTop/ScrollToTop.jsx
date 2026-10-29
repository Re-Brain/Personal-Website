import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// How long (ms) the linked project keeps its highlight, and how many frames to wait for it to render
const HIGHLIGHT_MS = 1800;
const MAX_FRAMES = 30;

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Plain navigation: start at the top of the page
        if (!hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            return;
        }

        // Deep link such as /project#furlong: jump to that element once the page has rendered it
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        let frame = 0;
        let raf;
        let timer;
        const id = decodeURIComponent(hash.slice(1));

        const scrollToTarget = () => {
            const target = document.getElementById(id);
            if (!target) {
                if (frame++ < MAX_FRAMES) raf = requestAnimationFrame(scrollToTarget);
                return;
            }
            target.scrollIntoView({ behavior: 'instant', block: 'start' });
            target.classList.add('project-highlight');
            timer = setTimeout(() => target.classList.remove('project-highlight'), HIGHLIGHT_MS);
        };
        raf = requestAnimationFrame(scrollToTarget);

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(timer);
        };
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;
