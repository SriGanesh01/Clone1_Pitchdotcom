import ScrollThingHome from "./ScrollThingHome";
import { useEffect } from "react";

const useScrollTriggerAnimation = () => {
    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);

            const elements = document.querySelectorAll(".scroll-animate-loop, .scroll-animate-loop-reverse, .scroll-animate-loop-slow, .scroll-animate-loop-reverse-slow, .scroll-animate-loop-slower, .scroll-animate-loop-reverse-slower");

            elements.forEach(el => el.style.animationPlayState = "running");

            scrollTimeout = setTimeout(() => {elements.forEach(el => el.style.animationPlayState = "paused");}, 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);
};

function HeadStartHome() {
    useScrollTriggerAnimation();
    return (
        <div className="flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
            <p className="font-bold leading-[52px] text-center text-[50px] w-[500px] bg-gradient-to-r from-[#372d4e] to-[#7443cd] bg-clip-text text-transparent">
                Get a head start with free templates
            </p>
            <p className="w-[700px] text-center text-[20px] pt-9 pb-10">
                Choose from 100+ fully customizable templates crafted by subject matter experts and presentation design pros. Or upload your existing PPTX file.
            </p>
            <p>
                <a href="/templates" className="text-[#7443cd] font-bold text-[20px]">
                    Explore the templates gallery
                </a>
            </p>

            <div className="w-full overflow-hidden">
                <ScrollThingHome animateName="scroll-animate-loop" />
                <ScrollThingHome animateName="scroll-animate-loop-reverse-slow" />
                <ScrollThingHome animateName="scroll-animate-loop-slower" />
            </div>
        </div>
    );
}

export default HeadStartHome;
