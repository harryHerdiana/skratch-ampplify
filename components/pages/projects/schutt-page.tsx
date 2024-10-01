"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigImageStory2 from "@/components/sections/big-img-story-2";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";

export default function SchuttPage() {
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
                    title="SCHUTT"
                    subtitle="Built For Battle"
                    desktopImgUrl="/img/products/schuttproduct.png"
                    mobileImgUrl="/img/products/mobile/schuttproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px] pb-[80px] lg:pb-[210px]">
                <BigTitleStory
                        title={`Optimized impact performance, increased athlete comfort, and improved fit flexibility`}
                        titleLeft={`Services`}
                        textLeft={`1. UX/UI DESIGN
                            2. CUSTOM THEME DEVELOPMENT
                            3. STORE SET-UP
                            4. APP INTEGRATION
                            5. CUSTOM APP DEVELOPMENT`}
                        titleRight={`About`}
                        textRight="Schutt Sports is a leading manufacturer of athletic equipment, particularly renowned for its football gear, emphasizing player safety and innovation. After being acquired by Certor, they approached us with a request to create a unified shopping experience across their range of brands. "
                    />

                    <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-video"
                        imgUrl={`/img/products/schutt/schutt-1.png`}
                        width={`90%`}
                        height={`60%`}
                        title="Approach"
                        story="The objective was to enable users to add products from any of Certor's brand stores and view them in a single shopping cart for a seamless checkout process. This approach aimed to enhance user convenience and streamline the shopping journey."
                    />
                </div>
                <div className="bg-[#D6D8CE] rounded-[20px]">
                    <BigImageStory2
                        imgUrl={`/img/products/schutt/schutt-2.png`}
                        imageContainerClassname="aspect-[59/54] max-w-[1280px] m-auto mb-[120px]"
                        title="Approach"
                        story={`With a clear understanding of the prerequisites and a deep awareness of API capabilities and limitations of Shopify Plus, we embarked on the creation of a bespoke app designed to fit seamlessly into this collaborative shopping model.`}
                        textContainerClassname="px-[9px] lg:px-[19px]"

                    />
                </div>

                <div className="">
                    <BigImageStory2
                        imgUrl={`/img/products/schutt/schutt-3.png`}
                        imageContainerClassname="aspect-[50/105]  m-auto mb-[120px]"
                        title="Approach"
                        textContainerClassname="px-[9px] lg:px-[19px]"
                        textColor={`text-white`}
                        story={`Each brand's store operates through its individual Shopify instance, displaying the custom themes we developed in partnership with MUTO.`}
                    />
                </div>

                <div className="rounded-[20px] px-5 pb-20 lg:px-40 lg:pb-[200px]">
                    <BigImageOnly
                        imgUrl={`/img/products/schutt/schutt-4.png`}
                        contain
                    />
                </div>

                <div className="rounded-[20px] bg-[#FDFCF3] px-5">
                    <BigImageStory2
                        imgUrl={`/img/products/schutt/schutt-5.png`}
                        imageContainerClassname="aspect-[16/9] max-w-[1280px] m-auto mb-[120px]"
                        title="Approach"
                        story={`The synchronization of cart drawers across all sites ensures a consistent shopping experience, leading to a unified checkout process.`}
                        
                    />
                </div>
            </div>
        </>
    );
}
