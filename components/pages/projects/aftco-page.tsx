"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";
import { projectsData } from "../../sections/projectdata";

export default function AftcoPage() {
    const project = projectsData.find((project) => project.title === "Aftco");

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
                    title="AFTCO"
                    subtitle="American Fishing Tackle Company"
                    desktopImgUrl="/img/products/aftcoproduct.png"
                    mobileImgUrl="/img/products/mobile/aftcoproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-t-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px] pb-[80px] lg:pb-[210px]">
                    <BigTitleStory
                        title={`Unparalleled quality, performance, and reliability when it counts most`}
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
                        textRight="AFTCO, the American Fishing Tackle Company, is renowned for its top-quality fishing apparel and accessories. With a rich history and dedication to quality, innovation, and conservation, AFTCO stands as a trusted name in the fishing community."
                    />
                      <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-video"
                        imgUrl={`/img/products/aftco/aftco-1.png`}
             
                        title={`Challenge`}
                        textContainerClassname="px-[9px] lg:px-[19px]"
                        story={`In line with its ongoing evolution and commitment to innovation, Aftco identified the necessity to overhaul its eCommerce experience. After considering various options, they embraced a headless eCommerce approach, decoupling the front-end while retaining Shopify Plus for checkout. `}
                    />
                </div>
              
                <div className="rounded-[20px]  px-[9px] py-[40px] lg:px-[19px] lg:py-[169px]">
                    <BigImageOnly
                        imgUrl={`/img/products/aftco/aftco-2.png`}
                        className="aspect-[200/129] max-w-[1200px] m-auto"
                    />
                </div>
                <div className="rounded-[20px] px-[9px] pb-[40px] lg:px-[19px] lg:pb-[169px]">
                    <BigImageStory
                        imgUrl={`/img/products/aftco/aftco-3.png`}
                        imageContainerClassname="aspect-[227/159] m-auto max-w-[908px]"
                        title={`Challenge`}
                        story={`Our challenge was to develop a customized commerce experience that not only prioritizes speed and performance but also achieves outstanding lighthouse scores.  `}
                        textColor="text-white"
                    />
                </div>
                <div className="  bg-[url(/img/products/aftco/aftco-4-bg.png)] bg-cover bg-center bg-no-repeat overflow-hidden mb-[40px] lg:mb-[169px]">
                    <BigImageStory
                        imgUrl={`/img/products/aftco/aftco-4.png`}
                        imageClassname="rounded-[8px] "
                        imageContainerClassname="aspect-[160/183] m-auto max-w-[908px]"
                    />
                </div>
                    <BigImageStory
                        title={`Approach`}
                        textContainerClassname=" px-[9px] pb-[40px] lg:px-[19px] lg:pb-[169px]"
                        story={`Utilizing the new user interface contributed by AFTCO, we kicked off the project by building an MVP as proof of concept to ensure they chose the right approach.`}
                        textColor={`text-white`}
                    />
           
                <div className="rounded-[20px] px-[9px] pb-[40px] lg:px-[19px] lg:pb-[169px] bg-[#FDFCF3] ">
                    <BigImageStory
                        imgUrl={`/img/products/aftco/aftco-5.png`}
                        imageContainerClassname="aspect-[235/189] m-auto max-w-[1177px]"
                        title={`Challenge`}
                        story={`The integration of diverse third-party services such as accessibility, search, and personalization played a pivotal role in the complexity of the new build. `}
                    />
                </div>
                <div className="rounded-[20px]  px-[9px] pb-[40px] lg:px-[19px] lg:pb-[169px]">
                    <BigImageStory
                        imgUrl={`/img/products/aftco/aftco-6.png`}
                        imageContainerClassname="aspect-[45/26] m-auto max-w-[1080px]"
                        title={`Challenge`}
                        story={`We dedicated extensive hours to quality assurance and accessibility audits to ensure exceptional website experience and adherence to web compliance.`}
                        textColor="text-white"
                    />
                </div>
                <div className="bg-[#FDFCF3] rounded-[20px] pb-[40px] lg:pb-[169px]">
                    <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-video lg:mb-16 "
                        imgUrl={`/img/products/aftco/aftco-7.png`}
                        width={`90%`}
                        height={`60%`}
                        textContainerClassname="px-[9px] lg:px-[19px] "
                        title={`Challenge`}
                        story={`In line with its ongoing evolution and commitment to innovation, Aftco identified the necessity to overhaul its eCommerce experience. After considering various options, they embraced a headless eCommerce approach, decoupling the front-end while retaining Shopify Plus for checkout. `}
                    />
                </div>
                <div className="rounded-[20px] mt-[120px] lg:mt-[200px]  px-[9px] pb-[40px] lg:px-[19px] lg:pb-[169px]">
                    <BigImageOnly
                        imgUrl={`/img/products/aftco/aftco-8.png`}
                        className="aspect-[68/47]" 
                        imageClassname="rounded-lg"
                    />
                </div>
            </div>
        </>
    );
}
