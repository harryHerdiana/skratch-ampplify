"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigImageStory2 from "@/components/sections/big-img-story-2";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";

export default function TheHomeEditPage() {
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
                    title="THE HOME EDIT"
                    subtitle="Your Home Organized In Style"
                    desktopImgUrl="/img/products/thehomeeditproduct.png"
                    mobileImgUrl="/img/products/mobile/thehomeeditproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono]">
                    <BigTitleStory
                        title={`Improving the everyday with a unique blend of form, function, and fun`}
                        titleLeft={`Services`}
                        textLeft={`1. UX/UI DESIGN
                            2. CUSTOM THEME DEVELOPMENT
                            3. STORE SET-UP
                            4. APP INTEGRATION
                            5. CUSTOM APP DEVELOPMENT`}
                        titleRight={`About`}
                        textRight="The Home Edit is a professional organization company known for their innovative and stylish approach to decluttering and organizing spaces. Our connection with The Home Edit team was forged via our collaboration with Outfit. "
                    />

                    <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-video"
                        imgUrl={`/img/products/thehomeedit/thehomeedit-1.png`}
                        width={`90%`}
                        height={`60%`}
                        title={` `}
                        story={`Outfit's positive regard for our team's confidence and professionalism from earlier projects positioned us as the preferred option to migrate the store from WooCommerce to Shopify and craft an entirely new shopping experience.`}
                    />
                </div>

                <div className="">
                    <BigImageStory2
                        imgUrl={`/img/products/thehomeedit/thehomeedit-2.png`}
                        imageContainerClassname="aspect-video m-auto"
                        title={` `}
                        story={`While we initiated the migration and started configuring the backend, Outfit took the lead in crafting the new UI style guide and designing the homepage. These served as our foundation for designing the remaining eCommerce templates within the new custom Shopify theme.`}
                        textColor={`text-white`}
                    />
                </div>

                <div className=" bg-[url(/img/products/thehomeedit/thehomeedit-3-bg.png)] bg-cover bg-center bg-no-repeat overflow-hidden">
                    <BigImageStory2
                        imageOuterContainerClassname=" px-[50px]  lg:px-[19px]  max-h-[940px] overflow-y-scroll translate-x-10"
                        imgUrl={`/img/products/thehomeedit/thehomeedit-3.png`}
                        imageContainerClassname="aspect-[37/112]  m-auto max-w-[925px] "
                    />
                    <BigImageStory2
                        title={` `}
                        story={`A significant aspect of The Home Edit's online sales hinges on their tailor-made labels. Ensuring a user-friendly shopping experience, as well as creating a reliable fulfillment solution for their printing vendor, was our focal point to boost conversions and efficiency.`}
                        textColor={`text-white`}
                    />
                </div>

                <div className="rounded-[20px] mt-[120px] lg:mt-[200px] pb-20 px-[19px] lg:px-40 lg:pb-[200px] ">
                    <BigImageOnly
                        imgUrl={`/img/products/thehomeedit/thehomeedit-4.png`}
                        className="aspect-[58/53] md:aspect-[58/53] h-full"
                    />
                </div>
            </div>
        </>
    );
}