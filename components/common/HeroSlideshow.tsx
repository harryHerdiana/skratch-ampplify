import heroImage from "@/public/img/new-layout/hero1.png";
import Image from "next/image";
import Link from "next/link";

const SliderItem = () => {
    return (
        <div className="relative h-full w-full flex  text-white justify-between   bg-dark">
            <div className="z-10 text-20 h-full w-full flex flex-col justify-between p-2.5 md:p-5 ">
                <p></p>
                <div className="grid md:grid-cols-2 grid-cols-1 w-full justify-between">
                    <div className="block text-15 md:text-18 pb-5 md:pb-0">( Info )</div>
                    <p className="md:max-w-[505px] font-[MonumentGrotesk-Regular] text-[30px] leading-[34px]">
                        SKRATCH is a digital studio focused on developing
                        experiences to help brands stay ahead of the game.
                    </p>
                </div>
                <div className=" flex justify-between md:grid grid-cols-2">
                    <div>
                        <p>2023</p>
                        <p>Certor</p>
                    </div>

                    <Link href="/" className="underline self-end">
                        View Project
                    </Link>
                </div>
            </div>
            <div className=" aspect-[9/16] md:aspect-video w-full absolute top-0 left-0 h-full rounded-[20px] overflow-hidden">
                <Image
                    layout="fill"
                    src={heroImage}
                    alt=""
                    className="h-full object-cover   "
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
