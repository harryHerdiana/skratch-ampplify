import Image from "next/image";
import AnimatedTextOnView from "../common/AnimatedTextOnView";

const HeroTitle = (props: HeroTitleProps) => {
    return (
        <div className="aspect-[9/16] sm:aspect-video bg-white">
            <div className="relative h-full w-full flex  text-white justify-between   bg-dark">
                <div className="z-10  h-full w-full flex flex-col justify-between lg:px-[19px] px-[9px] py-4">
                    <div></div>
                    <div>
                            <div className="flex justify-between h-max">
                                <div className="lg:text-[120px] font-['MonumentGrotesk-Regular'] text-[48px] leading-[48px] lg:leading-[106px] tracking-tight">
                                <AnimatedTextOnView
                                    text={props.title}
                                    stepSize={0.01}
                                    animDuration={0.3}
                                />
                                </div>
                            </div>
                        
                        <div className="flex justify-between">
                            <div className="text-[15px] mt-[12px]">
                                <AnimatedTextOnView
                                    text={props.subtitle}
                                    stepSize={0.01}
                                    animDuration={0.3}
                                />
                            </div>
                            <div className="text-[15px] mt-[12px] opacity-50">
                                <AnimatedTextOnView
                                    text={ props.year ?? 2023}
                                    stepSize={0.01}
                                    animDuration={0.3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block aspect-[9/16] md:aspect-video w-full absolute top-0 left-0 h-full rounded-[20px] overflow-hidden">
                    <Image
                        layout="fill"
                        src={props.desktopImgUrl}
                        alt=""
                        className="h-full object-cover"
                    />
                </div>
                <div className=" sm:hidden aspect-[9/16] md:aspect-video w-full absolute top-0 left-0 h-full rounded-[20px] overflow-hidden">
                    <Image
                        layout="fill"
                        src={props.mobileImgUrl}
                        alt=""
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroTitle;
