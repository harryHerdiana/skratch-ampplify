"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";

export default function DicebarbersPage() {
    return (
        <>
            <Head>
                <title></title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative bg-dark">
                <HeroTitle
                    title="DICE BARBERS"
                    subtitle="A New Era in the Barbers Trade"
                    desktopImgUrl="/img/products/diceproduct.png"
                    mobileImgUrl="/img/products/mobile/diceproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px] pb-[80px] lg:pb-[210px]">
                    <BigTitleStory
                        title={`For those with busy lifestyles, getting a cut has never been so simple`}
                        titleLeft={`Services`}
                        textLeft={`1. WEBFLOW DEVELOPMENT
                            2. APP INTEGRATION
                          `}
                        titleRight={`About`}
                        textRight="Dice Barbers is a new barber experience catering to a generation that prioritizes quality and convenience. They offer mobile barber services, bringing the barber shop experience directly to your event inside their vintage trolley, accommodating your busy schedule."
                    />

                    <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-video"
                        imgUrl={`/img/products/dice/dice-1.png`}
                        width={`90%`}
                        height={`60%`}
                        title={`Challenge`}
                        story={`We were brought in to help Dice with in preparation with their official launch. First, we provided art direction with their digital and print assets `}
                    />
                </div>
                <div className="pb-[120px]">
                    <BigImageStory
                        imgUrl={`/img/products/dice/dice-2.png`}
                        imageContainerClassname="aspect-[1664/2042] max-w-[1664px] m-auto"
                        title={` `}
                        textContainerClassname="px-[9px] lg:px-[19px]"
                        story={`The second phase we produced content for their social media and new website.`}
                        textColor={`text-white`}
                    />
                </div>

                <div className="bg-[#FDFCF3] px-[9px] lg:px-[19px] pb-[120px]">
                    <BigImageStory
                        textContainerClassname=""
                        imgUrl={`/img/products/dice/dice-3.png`}
                        imageContainerClassname="aspect-[1000/713] max-w-[1000px] m-auto"
                        title={` `}
                        story={`Lastly, we built out their web presence using Webflow for them to easily manage the site within the designer view and native CMS.`}
                    />
                </div>

                <div className="rounded-[20px] mt-10 mx-5 py-20 lg:py-[200px]">
                    <BigImageOnly
                        className="rounded-[20px] aspect-[1133/975] max-w-[1133px] m-auto"
                        imgUrl={`/img/products/dice/dice-4.png`}
                    />
                </div>
            </div>
        </>
    );
}
