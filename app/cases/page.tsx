"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageStory from "@/components/sections/big-img-story";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";

export default function CasesPage() {
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
                <HeroTitle title="SPEAKEASY" subtitle="Spirits Brands' Best Friend" />
                <div className="bg-white rounded-[20px]">
                    <BigTitleStory 
                        title={`INTEGRATED 
                            DIRECT-TO-CONSUMER 
                            SOLUTIONS FOR BEVERAGE 
                            ALCOHOL BRANDS`}
                        titleLeft={`Services`}
                        textLeft={`1. UX/UI DESIGN
                            2. CUSTOM THEME DEVELOPMENT
                            3. STORE SET-UP
                            4. APP INTEGRATION
                            5. CUSTOM APP DEVELOPMENT`}
                        titleRight={`About`}
                        textRight="Speakeasy Co. offers a complete solution for beverage alcohol brands, including technology, warehousing, and order fulfillment. We joined forces with Speakeasy Co. as they sought a modern eCommerce solution for their clients."/>

                    <BigImageStory
                        imgUrl={`/img/new-layout/item-1.png`}
                        title={`Challenge`}
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                    />

                    <BigImageStory
                        imgUrl={`/img/new-layout/item-2.png`}
                        title={`Challenge`}
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                    />

                    <BigImageStory
                        imgUrl={`/img/new-layout/item-3.png`}
                        title={`Challenge`}
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                    />
                </div>
            </div>
        </>
    );
}
