import {useEffect, useLayoutEffect, useState} from "react";

export function useSize() {
    const [size, setSize] = useState(window.innerWidth);

    useLayoutEffect(() => {
        const handleResize = () => setSize(window.innerWidth);
        window.onresize = handleResize;
        return () => window.onresize = null;
    }, []);

    return size;
}