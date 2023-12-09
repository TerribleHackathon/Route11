import { useEffect, useState } from 'react';

function useIsPwa() {
    const [isPwa, setIsPwa] = useState(false);

    useEffect(() => {
        const setPwa = () => setIsPwa(true);

        window.addEventListener('appinstalled', setPwa);

        // Check if a service worker is controlling the page
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((registration) => {
                if (registration.active) {
                    setPwa();
                }
            });
        }

        // Cleanup
        return () => {
            window.removeEventListener('appinstalled', setPwa);
        };
    }, []);

    return isPwa;
}

export default useIsPwa;