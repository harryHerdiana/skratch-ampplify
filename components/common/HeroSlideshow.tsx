import heroImage from "@/public/img/products/tdeproduct.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedTextOnView from "./AnimatedTextOnView";
import AnimatedText from "./AnimatedText";

const SliderItem = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formattedTime = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    const text =
        "SKRATCH is a digital studio focused on developing experiences to support brands stay ahead of the game.";

    return (
        <div className="relative h-screen w-full flex flex-col text-white justify-between bg-dark">
            <div className="z-10 text-20 h-full w-full flex flex-col justify-between p-2.5 md:p-5">
                <div className="text-center">
                    <div className="hidden md:flex text-18 relative w-max m-auto justify-center left-12 leading-none">
                        <span className="absolute top-[-1px] -left-5 text-10 rotate-[90deg]">
                            ▲
                        </span>
                        {formattedTime}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 w-full justify-between">
                    <div className="block text-15 md:text-18 pb-5 md:pb-0">
                        ( Info )
                    </div>

                    {/* Use the AnimatedText component here */}
                    <AnimatedText
                        text={text}
                        className="md:max-w-[505px] font-[MonumentGrotesk-Regular] text-[30px] leading-[34px]"
                        stepSize={0.1}
                        animDuration={1}
                    />
                    <AnimatedTextOnView
                        text={text}
                        stepSize={0.01}
                        animDuration={0.3}
                        className="md:max-w-[505px] font-[MonumentGrotesk-Regular] text-[30px] leading-[34px]"

                    />
                </div>
                <div className="flex justify-between md:grid grid-cols-2">
                    <div>
                        <p className="text-[12px]">2024</p>
                        <p>TDE</p>
                    </div>
                    <Link href="/projects/tde" className="underline self-end">
                        View Project
                    </Link>
                </div>
            </div>
            <div className="aspect-[9/16] md:aspect-video w-full absolute top-0 left-0 h-full rounded-[20px] overflow-hidden">
                <Image
                    fill
                    src={heroImage}
                    alt=""
                    className="h-full object-cover"
                />
            </div>
        </div>
    );
};

const HeroSlideShow = () => {
    return (
        <div className="h-screen bg-white">
            <SliderItem />
        </div>
    );
};

export default HeroSlideShow;
