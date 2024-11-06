import Image from "next/image";
import Link from "next/link";
import RelatedArticles from "../sections/related-articles";

export default function BlogDetailPageComponent() {
    return (
        <div className="bg-[#FDFCF3] rounded-[20px] px-[9px] lg:px-[19px]">
            <h1 className="text-36 lg:text-[60px] lg:leading-[64px] tracking-tight uppercase font-bold  font-[MonumentGrotesk-Bold] pt-[93px] mb-5 md:max-w-[1041px]">
                When a shower just won&apos;t cut it: how to be the most
                creative person in the room
            </h1>
            <div className="flex gap-x-4 flex-wrap  mb-4 lg:mt-[30px] lg:mb-[60px] lg:gap-x-[30px] uppercase font-[MonumentGrotesk-Semi-Mono] text-dark text-opacity-40">
                <span>24 AUG, 2024</span>
                <span>Presss studio insights</span>
            </div>
            <div>
                <div className="rounded-md overflow-hidden relative aspect-[394/276] lg:max-w-full w-full">
                    <Image
                        src={"/img/products/aftcoproduct.png"}
                        alt={"aftcoproduct"}
                        fill
                        className="object-cover "
                    />
                </div>
                <div className="flex justify-between mb-4 items-center uppercase text-12 text-dark text-opacity-40 pt-5 pb-[60px] border-b border-dark border-opacity-15 lg:hidden">
                    <div>
                        <p>share</p>
                    </div>
                    <div className="flex gap-x-2 ">
                        <Link href={"#"}>
                            <Image
                                src={"/img/common/copy.svg"}
                                alt={"copy"}
                                width={18}
                                height={18}
                            />
                        </Link>
                        <Link href={"#"}>
                            <Image
                                src={"/img/common/twitter.svg"}
                                alt={"twitter"}
                                width={18}
                                height={18}
                            />
                        </Link>
                        <Link href={"#"}>
                            <Image
                                src={"/img/common/facebook.svg"}
                                alt={"facebook"}
                                width={18}
                                height={18}
                            />
                        </Link>
                        <Link href={"#"}>
                            <Image
                                src={"/img/common/linkedin.svg"}
                                alt={"linkedin"}
                                width={18}
                                height={18}
                            />
                        </Link>
                    </div>
                </div>
                <div className="lg:mt-[80px] lg:grid lg:grid-cols-2 text-16 font-[MonumentGrotesk-Regular] text-dark pb-5 lg:pb-0 lg:mb-4  lg:border-b lg:border-dark lg:border-opacity-15">
                    <div className="lg:flex gap-2 flex-col lg:border-r lg:border-dark lg:border-opacity-15  hidden">
                        <Link href={"#"}>
                            <div className="flex py-1 items-center gap-4">
                                <Image
                                    src={"/img/common/copy.svg"}
                                    alt={"copy"}
                                    width={18}
                                    height={18}
                                />
                                <p className="text-12 uppercase text-dark text-opacity-40 font-[MonumentGrotesk-Semi-Mono]">
                                    Copy link
                                </p>
                            </div>
                        </Link>
                        <Link href={"#"}>
                            <div className="flex py-1 items-center gap-4">
                                <Image
                                    src={"/img/common/twitter.svg"}
                                    alt={"twitter"}
                                    width={18}
                                    height={18}
                                />
                                <p className="text-12 uppercase text-dark text-opacity-40 font-[MonumentGrotesk-Semi-Mono]">
                                    Share on X
                                </p>
                            </div>
                        </Link>
                        <Link href={"#"}>
                            <div className="flex py-1 items-center gap-4">
                                <Image
                                    src={"/img/common/facebook.svg"}
                                    alt={"facebook"}
                                    width={18}
                                    height={18}
                                />
                                <p className="text-12 uppercase text-dark text-opacity-40 font-[MonumentGrotesk-Semi-Mono]">
                                    Share on Facebook
                                </p>
                            </div>
                        </Link>
                        <Link href={"#"}>
                            <div className="flex py-1 items-center gap-4">
                                <Image
                                    src={"/img/common/linkedin.svg"}
                                    alt={"linkedin"}
                                    width={18}
                                    height={18}
                                />
                                <p className="text-12 uppercase text-dark text-opacity-40 font-[MonumentGrotesk-Semi-Mono]">
                                    Share on LinkedIn
                                </p>
                            </div>
                        </Link>
                    </div>
                    <p className="lg:px-5 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla quam velit, vulputate eu pharetra nec, mattis ac
                        neque. Duis vulputate commodo lectus, ac blandit elit
                        tincidunt id. Sed rhoncus, tortor sed eleifend
                        tristique, tortor mauris molestie elit, et lacinia ipsum
                        quam nec dui.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla quam velit, vulputate eu pharetra nec, mattis ac
                        neque. Duis vulputate commodo lectus, ac blandit elit
                        tincidunt id. Sed rhoncus, tortor sed eleifend
                        tristique, tortor mauris molestie elit, et lacinia ipsum
                        quam nec dui.
                    </p>
                </div>
                <RelatedArticles />
            </div>
        </div>
    );
}
