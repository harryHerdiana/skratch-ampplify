"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigImageStory2 from "@/components/sections/big-img-story-2";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";

export default function TDEApparel() {
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
                    title="TDE Apparel"
                    subtitle="Here To Contend"
                    desktopImgUrl="/img/products/tdeproduct.png"
                    mobileImgUrl="/img/products/mobile/tdeproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px] pb-[80px] lg:pb-[210px]">
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
                        textRight="One main purpose of the site was to showcase job opportunities and attract potential employees. We developed a custom integration of their current hiring platform that was required to display current openings."
                    />

                    <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-[1410/940] "
                        imgUrl={`/img/products/tde/tde-1.png`}
                        width={`90%`}
                        height={`60%`}
                        title={`Challenge`}
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                    />
                </div>
                <div className="bg-[#D6D8CE] rounded-[20px]">
                    <BigImageStory2
                                            textContainerClassname="px-[9px] lg:px-[19px]"

                        imgUrl={`/img/products/tde/tde-2.png`}
                        imageContainerClassname="aspect-[1601/1715]  max-w-[1601px] m-auto"
                        title={`Challenge`}
                        story={`One main purpose of the site was to showcase job opportunities and attract potential employees. We developed a custom integration of their current hiring platform that was required to display current openings.`}
                        textColor="text-black"
                    />
                </div>
                <div className="bg-[#1F1F1F] rounded-[20px]  ">
                    <BigImageStory
                        imageContainerClassname="aspect-[1025/581] m-auto max-w-[1025px]"
                        imgUrl={`/img/products/tde/tde-3.png`}
                  
                   />
                </div>

                <div className="rounded-[20px] overflow-hidden">
                    <BigImageOnly imgUrl={`/img/products/tde/tde-4.png`} />
                </div>
            </div>
        </>
    );
}
