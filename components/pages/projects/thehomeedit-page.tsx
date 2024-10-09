"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigImageStory2 from "@/components/sections/big-img-story-2";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";
import { projectsData } from "../../sections/projectdata";

export default function TheHomeEditPage() {
    const project = projectsData.find((project) => project.title === "The Home Edit");

    if (!project) {
        return <div>Project data not found.</div>;
    }
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
                    title="THE HOME EDIT"
                    subtitle="Your Home Organized In Style"
                    desktopImgUrl="/img/products/thehomeeditproduct.png"
                    mobileImgUrl="/img/products/mobile/thehomeeditproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px] pb-[80px] lg:pb-[210px]">
                <BigTitleStory
                        title={`Improving the everyday with a unique blend of form, function, and fun`}
                        titleLeft={`Services`}
                        textLeft={
                            <ul>
                                {project.services
                                    .filter(service => service) // Filter out empty strings
                                    .map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                            </ul>
                        }
                        titleRight={`About`}
                        textRight="The Home Edit is a professional organization company known for their innovative and stylish approach to decluttering and organizing spaces. Our connection with The Home Edit team was forged via our collaboration with Outfit. "
                    />

                    <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-video"
                        imgUrl={`/img/products/thehomeedit/thehomeedit-1.png`}
                        width={`90%`}
                        height={`60%`}
                        title={`Approach`}
                        story={`Outfit's positive regard for our team's confidence and professionalism from earlier projects positioned us as the preferred option to migrate the store from WooCommerce to Shopify and craft an entirely new shopping experience.`}
                    />
                </div>
                <div className="rounded-[20px] px-[9px] lg:px-[19px] pb-[120px]">
                    <BigImageStory2
                        imgUrl={`/img/products/thehomeedit/thehomeedit-2.png`}
                        imageContainerClassname="aspect-video m-auto md:mb-[120px]"
                        textContainerClassname="px-[9px] lg:px-[19px]"
                        title={`Approach`}
                        story={`While we initiated the migration and started configuring the backend, Outfit took the lead in crafting the new UI style guide and designing the homepage. These served as our foundation for designing the remaining eCommerce templates within the new custom Shopify theme.`}
                        textColor="text-white"
                    />
                </div>        
                <div className="bg-[url(/img/products/thehomeedit/thehomeedit-3-bg.png)] rounded-[20px] bg-cover bg-center bg-no-repeat overflow-hidden">
                    <BigImageStory2
                        imageOuterContainerClassname=" px-[50px]  lg:px-[19px]  max-h-[940px] overflow-y-scroll translate-x-10 lg:pb-[169px] pb-[60px]"
                        imgUrl={`/img/products/thehomeedit/thehomeedit-3.png`}
                        imageContainerClassname="aspect-[37/112]  m-auto max-w-[925px] "
                    />
                    
                </div>
                <div className="bg-[#FDFCF3] rounded-[20px] px-[9px] lg:px-[19px]rounded-[20px] pb-20 lg:pb-[200px] ">
                    <BigImageStory
                        imgUrl={`/img/products/thehomeedit/thehomeedit-4.png`}
                        imageContainerClassname="aspect-[58/53] md:aspect-[58/53] h-full max-w-[1280px]"
                        title={`Approach`}
                        story={`A significant aspect of The Home Edit's online sales hinges on their tailor-made labels. Ensuring a user-friendly shopping experience, as well as creating a reliable fulfillment solution for their printing vendor, was our focal point to boost conversions and efficiency.`}
                        textContainerClassname="px-[9px] lg:px-[19px]"
                    />
                </div>
            </div>
        </>
    );
}
