"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory2 from "@/components/sections/big-img-story-2";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";

export default function ProprioPage() {
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

            <div className="relative bg-black">
                <HeroTitle
                    title="PROPRIO"
                    subtitle="The New Way Of Seeing"
                    desktopImgUrl="/img/products/proprioproduct.png"
                    mobileImgUrl="/img/products/mobile/proprioproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px] pb-[80px] lg:pb-[210px]">
                    <BigTitleStory
                        title={`Modernizing the way we predict, perform, and perfect surgery`}
                        titleLeft={`Services`}
                        textLeft={`1. webflow development
                            2. APP INTEGRATION
                           `}
                        titleRight={`About`}
                        textRight="Proprio is a tech company revolutionizing surgery with a blend of expert knowledge and immersive technology. This platform equips surgeons with crucial insights for informed decisions during surgeries."
                    />
                </div>
                <div className=" rounded-[20px] bg-[url(/img/products/proprio/proprio-1-bg.png)] bg-cover bg-center bg-no-repeat overflow-hidden">
                    <BigImageStory2
                        imgUrl={`/img/products/proprio/proprio-1.png`}
                        imageContainerClassname="aspect-[13/8] m-auto max-w-[1040px]"
                    />
                    <BigImageStory2
                        textContainerClassname="px-[9px] lg:px-[19px] "
                        title={`Approach`}
                        story={`As Proprio geared up for a new fundraising round, they set out to improve their digital presence. The current site appeared templated, outdated, and didn't mirror the innovative image of the company. Additionally, some sections  posed management challenges and hindered scalability for future upgrades.`}
                        textColor={`text-white`}
                    />
                </div>

                <div className="bg-[#FDFCF3] rounded-[20px]">
                    <BigImageStory2
                        textContainerClassname="px-[9px] lg:px-[19px] "
                        imgUrl={`/img/products/proprio/proprio-2.png`}
                        imageContainerClassname="aspect-[57/31] m-auto max-w-[1132px]"
                        title={`Challenge`}
                        story={`Collaborating with our partners at MUTO, our goal was to create a more engaging and interactive user experience. We achieved this by incorporating elements for motion and video. `}
                    />
                </div>
                <div className=" ">
                    <BigImageStory2
                        textContainerClassname="px-[9px] lg:px-[19px] "
                        imgUrl={`/img/products/proprio/proprio-3.png`}
                        imageContainerClassname="aspect-[54/39] m-auto max-w-[1128px]"
                        title={`Challenge`}
                        textColor={`text-white`}
                        story={`TThese enhancements enriched the website experience while maintaining a balanced design that emphasizes content without overwhelming it. `}
                    />
                </div>
                <div className="bg-[#FDFCF3] rounded-b-[20px]">
                    <BigImageStory2
                        textContainerClassname="px-[9px] lg:px-[19px] "
                        imgUrl={`/img/products/proprio/proprio-4.png`}
                        imageContainerClassname="aspect-[263/187] m-auto max-w-[1048px]"
                        title={`Challenge`}
                        story={`Since we continued using Webflow, Proprio's preferred platform, development was rapid and efficient, and transferring CMS content was seamless, eliminating the need for platform migration. `}
                    />
                </div>

                <div className="rounded-[20px] mt-[120px] lg:mt-[200px] p-5 lg:p-10 ">
                    <BigImageOnly
                        imgUrl={`/img/products/proprio/proprio-5.png`}
                    />
                </div>
            </div>
        </>
    );
}
