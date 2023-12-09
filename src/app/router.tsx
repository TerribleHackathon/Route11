"use client"

import NavigationPage from "./(pwa)/NavigationPage";
import useIsPWA from "../../hooks/useIsPwa";
import useIsMobile from "../../hooks/useIsMobile";
import PersonIcon from "../../icons/Person"

export default function Router() {
    const isPWA = useIsPWA();
    const isMobile = useIsMobile();

    if (isMobile && isPWA) return (<NavigationPage />)

    return (
        <>
            {isPWA ? (
                <p>This site is accessed through a service worker (PWA).</p>
            ) : (
                <p>This site is not accessed through a service worker.</p>
            )}
        </>
    )

    if (isMobile) return (
        <>
            <div className="flex h-screen w-screen bg-gray-200">
                <div className="w-screen h-screen bg-black opacity-30 absolute top-0 bottom-0 left-0 right-0"></div>
                <div className="bg-white h-[25rem] rounded-lg absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%-20px)]">
                    <PersonIcon className="w-[6rem] h-[8rem] mt-[2rem] mx-auto" />
                    <p className="flex mx-[1.5em] text-center mt-[0.4rem]">To install the app, you need to add this website to your home screen.</p>
                    <p className="inline-block mx-[1.5rem] text-center mb-auto mt-[2rem]">In your safari browser menu, tap the share icon and choose <span className="inline-block font-bold">Add to Home Screen</span> in the options. Then open the Route11 app on your homescreen</p>
                </div>
            </div>
        </>
    )

    return (
        <>
            <p>Landing Page</p>
        </>
    )
}