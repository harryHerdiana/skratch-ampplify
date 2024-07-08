import heroImage from "@/public/img/new-layout/hero1.png";
import Image from "next/image";
import Link from "next/link";

const SliderItem = () => {
    return (
        <div className="relative h-full w-full flex  text-white justify-between   bg-black">
            <div className="z-10 text-20 h-full w-full flex flex-col justify-between p-2.5 ">
                <p></p>
                <p className="max-w-[259px] font-[MonumentGrotesk-Semi-Mono] uppercase text-12">
                    SKRATCH is a digital studio focused on developing
                    experiences to help brands stay ahead of the game.
                </p>
                <div className=" flex justify-between">
                    <div>
                        <p>2023</p>
                        <p>Certor</p>
                    </div>

                    <Link href="/" className=" self-end">
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
