import { useEffect, useRef, useState } from "react";

const useScrollToStart = (timeDuration = 30000, callback = null) => {
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

                if (callback) {
                    callback();
                }
            }, timeDuration);
        }

        return () => {
            window.removeEventListener("touchstart", handleStart);
            window.removeEventListener("touchend", handleEnd);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isTouching, timeDuration, callback]);

    return menuRef;
};

export default useScrollToStart;
