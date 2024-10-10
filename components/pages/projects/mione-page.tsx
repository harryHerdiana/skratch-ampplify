"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";
import { projectsData } from "../../sections/projectdata";

export default function MionePage() {
     const project = projectsData.find((project) => project.title === "Mione");

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
                    title="Mione"
                    subtitle="Here To Contend"
                    desktopImgUrl="/img/products/mioneproduct.png"
                    mobileImgUrl="/img/products/mobile/mioneproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px] pb-[80px] lg:pb-[120px]">
                <BigTitleStory
                        title={`We’re leaders in
                        technology, innovation
                        design,  and sport`}
                        titleLeft={`Sevices`}
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
                        textRight="Certor Sports offers high-quality sports equipment with a focus on improving athletes' performance and safety. We helped develop Certor’s company website in Webflow, expanding off of the identity and UI work created by MUTO."
                    />

                    <div className="">
                        <BigImageStory
                            imageContainerClassname="aspect-square md:aspect-video"
                            imgUrl={`/img/products/mione/mione-1.png`}
                            imageClassname="rounded-[4px]"
                            
                            title={`Challenge`}
                            story={`One main purpose of the site was to showcase job opportunities and attract potential employees. We developed a custom integration of their current hiring platform that was required to display current openings.`}
                        />
                    </div>
                </div>

                <div className="bg-[#1F1F1F] rounded-[20px] pt-[20px]">
                    <BigImageStory
                        imageContainerClassname="aspect-[84/37] m-auto mb-[20px] "
                        imgUrl={`/img/products/mione/mione-2.png`}
                        width={`65%`}
                        height={`100%`}
                        title={`Challenge`}
                        textColor="text-white"
                        textContainerClassname="px-[9px] lg:px-[19px] lg:pb-[120px] pb-[60px]"
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                    />
                </div>

                <div className="bg-[#D6D8CE] rounded-[20px] px-[9px] lg:px-[19px] lg:pb-[120px]">
                    <BigImageStory
                        imgUrl={`/img/products/mione/mione-3.png`}
                        imageContainerClassname="aspect-[26/17] max-w-[1280px] m-auto mb-[112px] "
                        title={`Challenge`}
                        story={`One main purpose of the site was to showcase job opportunities and attract potential employees. We developed a custom integration of their current hiring platform that was required to display current openings.`}
                    />
                </div>
                <div className="rounded-[20px] overflow-hidden min-h-[900px] h-full bg-[url('/img/products/mione/mione-4-bg.png')] bg-auto lg:bg-cover bg-no-repeat bg-center  flex py-[94px] px-[9px] lg:px-[19px]">
                    <BigImageOnly
                        contain
                        imageClassname="px-[19px] lg:pt-[100px] lg:pb-[100px]"
                        imgUrl={`/img/products/mione/mione-4.png`}
                    />
                </div>
                <div className="bg-[#1F1F1F] rounded-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px]">
                    <BigImageOnly
                        contain
                        imageClassname="px-[19px] lg:px-[150px] lg:pt-[240px]"
                        imgUrl={`/img/products/mione/mione-5.png`}
                    />
                    <BigImageStory
                        imageContainerClassname="aspect-[48/43] lg:mb-16 mt-[100px] max-w-[1148px] m-auto"
                        imgUrl={`/img/products/mione/mione-6.png`}
                        imageClassname=""
                        width={`90%`}
                        height={`60%`}
                        textColor="text-white"
                        title={`Challenge`}
                        story={`The goal was to migrate client stores from outdated Magento front-ends to Shopify. Our expertise in Shopify development made us the perfect candidate to support Speakeasy and their client brands. `}
                        textContainerClassname="  lg:pb-[169px] pb-[60px]"
                    />
                </div>

                <div className="rounded-[20px] overflow-hidden">
                    <BigImageOnly imgUrl={`/img/products/mione/mione-7.png`} />
                </div>
            </div>
        </>
    );
}
