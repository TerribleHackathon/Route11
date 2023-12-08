"use client"

import NavigationPage from "./(pwa)/NavigationPage";
import useIsPWA from "../../hooks/useIsPwa";
import useIsMobile from "../../hooks/useIsMobile";

export default function Router() {
    const isPWA = useIsPWA();
    const isMobile = useIsMobile();

    if (isMobile && isPWA) return (<NavigationPage />)

    if (isMobile) return (
        <>
            <p>install the pwa</p>
        </>
    )

    return (
        <>
            <p>Landing Page</p>
        </>
    )
}