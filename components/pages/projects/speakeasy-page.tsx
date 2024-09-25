"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigImageStory2 from "@/components/sections/big-img-story-2";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";

export default function SpeakeasyPage() {
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
                    title="SPEAKEASY"
                    subtitle="Spirits Brands' Best Friend"
                    desktopImgUrl="/img/products/speakeasyproduct.png"
                    mobileImgUrl="/img/products/mobile/speakeasyproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono]">
                    <BigTitleStory
                        title={`INTEGRATED 
                            DIRECT - TO - CONSUMER 
                            SOLUTIONS FOR BEVERAGE 
                            ALCOHOL BRANDS`}
                        titleLeft={`Services`}
                        textLeft={`1. UX/UI DESIGN
                            2. CUSTOM THEME DEVELOPMENT
                            3. STORE SET-UP
                            4. APP INTEGRATION
                            5. CUSTOM APP DEVELOPMENT`}
                        titleRight={`About`}
                        textRight="Speakeasy Co. offers a complete solution for beverage alcohol brands, including technology, warehousing, and order fulfillment. We joined forces with Speakeasy Co. as they sought a modern eCommerce solution for their clients."
                    />

                    <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-video rounded-[4px] overflow-hidden"
                        imgUrl={`/img/new-layout/item-1.png`}
                        width={`90%`}
                        height={`60%`}
                        title={`Challenge`}
                        imageOuterContainerClassname="px-[9px] lg:px-[19px]"
                        textContainerClassname="px-[9px] lg:px-[19px]"
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                    />
                </div>

                <div className="bg-[#D6D8CE] rounded-[20px] pb-[80px] lg:pb-[200px]">
                    <BigImageStory
                        imageOuterContainerClassname="px-10 lg:px-[160px]"
                        imageContainerClassname="aspect-video m-auto lg:pb-[120px] lg:pt-[160px] py-[112px] "
                        imgUrl={`/img/new-layout/item-2.png`}
                        width={`65%`}
                        height={`100%`}
                        title={`Challenge`}
                           textContainerClassname="px-[9px] lg:px-[19px]"
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                    />
                </div>

                <div className="pb-[80px] lg:pb-[200px]">
                    <BigImageStory2
                        imgUrl={`/img/new-layout/item-3.png`}
                        textContainerClassname="px-[9px] lg:px-[19px]"
                        imageOuterContainerClassname="px-10 lg:px-0"
                        imageContainerClassname="aspect-[15/17] max-w-[1196px] m-auto "
                        title={`Challenges`}
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                        textColor={`text-white`}
                        
                    />
                </div>

                <div className="bg-[#D6D8CE] rounded-[20px] pb-[80px] lg:pb-[200px]">
                    <BigImageStory2
                        imgUrl={`/img/new-layout/item-4.png`}
                          textContainerClassname="px-[9px] lg:px-[19px]"
                        imageOuterContainerClassname="px-10 lg:px-0"
                            imageContainerClassname="aspect-[530/637] max-w-[1060px] m-auto"
                        title={`Challenge`}
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                    />
                </div>

                <div className="pb-[80px] lg:pb-[200px]">
                    <BigImageStory2
                        imgUrl={`/img/new-layout/item-5.png`}
                          textContainerClassname="px-[9px] lg:px-[19px]"
                        imageOuterContainerClassname="px-10 lg:px-0"
                        imageContainerClassname="aspect-[38/25] max-w-[912px]"
                        title={`Challenge`}
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                        textColor={`text-white`}
                    />
                </div>

                <div className="bg-[#D6D8CE] rounded-[20px] pb-[80px] lg:pb-[200px]">
                    <BigImageStory2
                        imgUrl={`/img/new-layout/item-6.png`}
                            imageContainerClassname="aspect-[46/31] max-w-[926px]"
                        title={`Challenge`}
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                    />
                </div>
                <div className="rounded-[20px] overflow-hidden">
                    <BigImageOnly imgUrl={`/img/new-layout/item-7.png`} />
                </div>
            </div>
        </>
    );
}
