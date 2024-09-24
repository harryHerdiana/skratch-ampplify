"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigImageStory2 from "@/components/sections/big-img-story-2";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";

export default function MionePage() {
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
                    title="MIONE"
                    subtitle="Here To Contend"
                    desktopImgUrl="/img/products/mioneproduct.png"
                    mobileImgUrl="/img/products/mobile/mioneproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono]">
                    <BigTitleStory
                        title={`We’re leaders in
                        technology, innovation
                        design,  and sport`}
                        titleLeft={`Services`}
                        textLeft={`1. UX/UI DESIGN
                            2. CUSTOM THEME DEVELOPMENT
                            3. STORE SET-UP
                            4. APP INTEGRATION
                            5. CUSTOM APP DEVELOPMENT`}
                        titleRight={`About`}
                        textRight="Certor Sports offers high-quality sports equipment with a focus on improving athletes' performance and safety. We helped develop Certor’s company website in Webflow, expanding off of the identity and UI work created by MUTO."
                    />

                    <div className="px-[19px]">
                        <BigImageStory
                            imageContainerClassname="aspect-square md:aspect-video"
                            imgUrl={`/img/products/mione/mione-1.png`}
                            imageClassname="rounded-[4px]"
                            width={`90%`}
                            height={`60%`}
                            title={`Challenge`}
                            story={`One main purpose of the site was to showcase job opportunities and attract potential employees. We developed a custom integration of their current hiring platform that was required to display current openings.`}
                        />
                    </div>
                </div>

                <div className="bg-[#1F1F1F] rounded-[20px]  pt-[160px]">
                    <BigImageStory
                        imageContainerClassname="aspect-[84/37] m-auto lg:mb-[120px] mb-[112px]"
                        imgUrl={`/img/products/mione/mione-2.png`}
                        width={`65%`}
                        height={`100%`}
                        title={`Challenge`}
                        textColor="text-white"
                        textContainerClassname="px-[19px] lg:px-[19px]"
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                    />
                </div>

                <div className="bg-[#D6D8CE] rounded-[20px]">
                    <BigImageStory2
                        imgUrl={`/img/products/mione/mione-3.png`}
                        imageContainerClassname="aspect-[26/17] max-w-[1196px] m-auto"
                        title={`Challenge`}
                        story={`One main purpose of the site was to showcase job opportunities and attract potential employees. We developed a custom integration of their current hiring platform that was required to display current openings.`}
                        textColor="text-black"
                        textContainerClassname="px-[19px] lg:px-[19px]"
                    />
                </div>
                <div className="rounded-[20px] overflow-hidden min-h-[900px] h-full bg-[url('/img/products/mione/mione-4-bg.png')] bg-auto lg:bg-cover bg-no-repeat bg-center  flex py-[94px] px-[19px]">
                    <BigImageOnly
                        contain
                        imgUrl={`/img/products/mione/mione-4.png`}
                    />
                </div>
                <div className="bg-[#1F1F1F] rounded-[20px] font-[MonumentGrotesk-Semi-Mono]">
                    <BigImageOnly
                        contain
                        imageClassname="px-[19px] lg:px-[150px] lg:pt-[240px]"
                        imgUrl={`/img/products/mione/mione-5.png`}
                    />
                    <BigImageStory
                        imageContainerClassname="aspect-[48/43] lg:mb-16 mt-[240px] max-w-[1148px] m-auto"
                        imgUrl={`/img/products/mione/mione-6.png`}
                        imageClassname=""
                        width={`90%`}
                        height={`60%`}
                        textColor="text-white"
                        title={`Challenge`}
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                        textContainerClassname="px-[19px] lg:px-[19px]"
                    />
                </div>

                <div className="rounded-[20px] overflow-hidden">
                    <BigImageOnly imgUrl={`/img/products/mione/mione-7.png`} />
                </div>
            </div>
        </>
    );
}
