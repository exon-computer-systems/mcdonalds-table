import { useEffect, useRef, useState } from "react";

const useScrollToStart = (timeDuration = 30000) => {
    const menuRef = useRef(null);
    const timeoutRef = useRef(null);

    const [isTouching, setIsTouching] = useState(true);

    useEffect(() => {
        const handleStart = () => {
            setIsTouching(true);
        };

        const handleEnd = () => {
            setIsTouching(false);
        };

        window.addEventListener("touchstart", handleStart);
        window.addEventListener("touchend", handleEnd);

        if (!isTouching) {
            timeoutRef.current = setTimeout(() => {
                menuRef.current.scrollTo({ left: 0 });
            }, timeDuration);
        }

        return () => {
            window.removeEventListener("touchstart", handleStart);
            window.removeEventListener("touchend", handleEnd);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isTouching, timeDuration]);

    return menuRef;
};

export default useScrollToStart;
