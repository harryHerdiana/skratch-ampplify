"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageSliderStory from "@/components/sections/big-img-slider-story";
import BigImageStory from "@/components/sections/big-img-story";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";
import { projectsData } from "../../sections/projectdata";

export default function EvvyPage() {
    const project = projectsData.find((project) => project.title === "Evvy");

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
                    title="Evvy"
                    subtitle="Know What’s Up Down There"
                    desktopImgUrl="/img/products/evvyproduct.png"
                    mobileImgUrl="/img/products/mobile/evvyproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px] pb-[80px] lg:pb-[210px]">
                    <BigTitleStory
                        title={`The female body                  shouldn’t be a medical      mystery`}
                        titleLeft={`Services`}
                        textLeft={
                            <ul>
                                {project.services
                                    .filter((service) => service) // Filter out empty strings
                                    .map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                            </ul>
                        }
                        titleRight={`About`}
                        textRight="Evvy is a health and wellness company that provides customers with science-backed insights to improve their overall well-being. Evvy approached us to develop their eCommerce platform and enhance their marketing website."
                    />

                    <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-video"
                        imgUrl={`/img/products/evvy/evvy-1.png`}
                        width={`90%`}
                        height={`60%`}
                        title={`Challenge`}
                        story={`They were intrigued by our prior project for a health and wellness client that employed the same web stack they intended to use, including Shopify, ReCharge, and Webflow.`}
                    />
                </div>

                <div className="px-[9px] lg:px-[19px] mb-[40px] lg:mb-[120px]">
                    <BigImageStory
                        textContainerClassname=""
                        imgUrl={`/img/products/evvy/evvy-2.png`}
                        imageContainerClassname="aspect-[53/40] m-auto max-w-[1066px] md:mb-[120px] "
                        title={`Challenge`}
                        story={`Synchronization was crucial as time was limited before their official launch, giving them confidence in our ability to recreate the desired experience swiftly.`}
                    />
                </div>
                <div className="bg-[#FDFCF3] rounded-[20px] ">
                    <BigImageStory
                        textContainerClassname="px-[9px] lg:px-[19px] "
                        imgUrl={`/img/products/evvy/evvy-3.png`}
                        imageContainerClassname="aspect-[17/12] m-auto max-w-[1224px]"
                        title={`Challenge`}
                        story={`Utilizing their existing product page on Webflow, we synced the product availability with Shopify and maintained a fluid transition to checkout to ensure a seamless user experience. `}
                        textColor="text-white"
                    />
                </div>
                <div className="rounded-[20px] bg-[url(/img/products/evvy/evvy-4-bg.png)] bg-cover bg-center bg-no-repeat overflow-hidden">
          
                    <BigImageSliderStory
                        images={[
                            "/img/products/evvy/evvy-4.png",
                            "/img/products/evvy/evvy-4.2.png",
                            "/img/products/evvy/evvy-4.3.png",
                        ]}
                        imageContainerClassname="aspect-[18/11] m-auto max-w-[920px] mb-[160px]"
                        imageClassname="px-[9px] lg:px-[19px] object-cover"
                    />
                </div>
                <div className="px-[9px] lg:px-[19px] my-[40px] lg:my-[169px] rounded-b-[20px]">
                    {" "}
                    <BigImageStory
                        textContainerClassname="px-[9px] lg:px-[19px] "
                        title={`Approach`}
                        story={`The integration of ReCharge facilitated smooth management of their subscription-based healthcare service and recurring billing. `}
                        textColor={`text-white`}
                    />
                </div>
                <div className="bg-[#FDFCF3] rounded-[20px] pb-[40px] lg:pb-[169px]">
                    <BigImageStory
                        textContainerClassname="px-[9px] lg:px-[19px] "
                        imgUrl={`/img/products/evvy/evvy-5.png`}
                        imageContainerClassname="aspect-[95/83] m-auto max-w-[908px]"
                        title={`Challenge`}
                        story={`ReCharge enabled efficient management of Evvy's subscription-based healthcare services and recurring billing, laying a solid foundation for offering premium virtual healthcare with a seamless customer experience. `}
                    />
                </div>
                <div className="rounded-[20px] overflow-hidden">
                    <BigImageOnly
                        imgUrl={`/img/products/evvy/evvy-6.png`}
                        imageClassname="rounded-lg"
                    />
                </div>
            </div>
        </>
    );
}
