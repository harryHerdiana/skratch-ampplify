import Image from "next/image";

const HeroTitle = (props: HeroTitleProps) => {
    return (
        <div className="h-screen bg-white">
            <div className="relative h-full w-full flex  text-white justify-between   bg-black">
                <div className="z-10  h-full w-full flex flex-col justify-between p-2.5">
                    <div></div>
                    <div>
                            <div className="flex justify-between h-max">
                                <div className="lg:text-[120px] font-['MonumentGrotesk-Bold'] text-[52px] leading-[48px] lg:leading-[100px]">
                                    {props.title}
                                </div>
                            </div>
                        
                        <div className="flex justify-between">
                            <div className="text-[15px] mt-[17px]">{props.subtitle}</div>
                            <div className="text-[15px] mt-[17px] opacity-50">{ props.year ?? 2023}</div>
                        </div>
                    </div>
                </div>
                <div className=" aspect-[9/16] md:aspect-video w-full absolute top-0 left-0 h-full rounded-[20px] overflow-hidden">
                    <Image
                        layout="fill"
                        src={"/img/new-layout/hero2.png"}
                        alt=""
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroTitle;
