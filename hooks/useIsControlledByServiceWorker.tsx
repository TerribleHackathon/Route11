import { useEffect, useState } from 'react';

function useIsControlledByServiceWorker() {
    const [isControlled, setIsControlled] = useState(false);

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            setIsControlled(!!navigator.serviceWorker.controller);
        }
    }, []);

    return isControlled;
}

export default useIsControlledByServiceWorker;