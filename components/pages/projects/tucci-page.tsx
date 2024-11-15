"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageSliderStory from "@/components/sections/big-img-slider-story";
import BigImageStory from "@/components/sections/big-img-story";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";
import { projectsData } from "../../sections/projectdata";

export default function TucciPage() {
    const project = projectsData.find((project) => project.title === "Tucci");

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
                    title="Tucci"
                    subtitle="Trusted by the game's top pros"
                    desktopImgUrl="/img/products/tucciproduct.png"
                    mobileImgUrl="/img/products/mobile/tucciproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px] pb-[80px] lg:pb-[120px]">
                    <BigTitleStory
                        title={`Baseball's Next Evolution  is Here`}
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
                        textRight="Tucci Limited is a premium baseball brand, known for their high-quality craftsmanship and used by many professional MLB players. After being acquired by Certor, they approached us with a request to create a unified shopping experience across their range of brands. "
                    />

                    <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-video "
                        imgUrl={`/img/products/tucci/tucci-1.png`}
                        width={`90%`}
                        height={`60%`}
                        title="Approach"
                        story="The objective was to enable users to add products from any of Certor's brand stores and view them in a single shopping cart for a seamless checkout process. This approach aimed to enhance user convenience and streamline the shopping journey."
                    />
                </div>
                <div className="bg-[#D6D8CE] rounded-[20px] pb-[120px]">
                    <BigImageStory
                        imgUrl={`/img/products/tucci/tucci-2.png`}
                        imageOuterContainerClassname="m-auto "
                        imageContainerClassname="aspect-[27/9] m-auto w-full md:mb-[120px]"
                        title={`Approach`}
                        textContainerClassname="px-[9px] lg:px-[19px]"
                        story={`With a clear understanding of the prerequisites and a deep awareness of API capabilities and limitations of Shopify Plus, we embarked on the creation of a bespoke app designed to fit seamlessly into this collaborative shopping model.`}
                    />
                </div>

                <div className="">
                    <BigImageStory
                        imageClassname=" px-[9px] lg:px-[19px]"
                        imgUrl={`/img/products/tucci/tucci-3.png`}
                        imageContainerClassname="aspect-[5/4] max-w-[1440px] m-auto  mb-[120px]"
                    />
                </div>
                <div className="bg-[#D6D8CE] rounded-[20px] pb-[120px]">
                    <BigImageStory
                        imageClassname=" px-[9px] lg:px-[19px]"
                        imgUrl={`/img/products/tucci/tucci-4.png`}
                        imageContainerClassname="aspect-[16/9] max-w-[1440px] m-auto md:mb-[120px]"
                        title={`Approach`}
                        story={`Each brand's store operates through its individual Shopify instance, displaying the custom themes we developed in partnership with MUTO.`}
                        textContainerClassname="px-[9px] lg:px-[19px]"
                    />
                </div>

                <div className="pb-[120px]">
                    <BigImageSliderStory
                        images={[
                            "/img/products/tucci/tucci-5.png",
                            "/img/products/tucci/tucci-6.png",
                            "/img/products/tucci/tucci-7.png",
                        ]}
                        title="Tucci"
                        story={`The synchronization of cart drawers across all sites ensures a consistent shopping experience, leading to a unified checkout process.`}
                        textColor={`text-white`}
                        imageContainerClassname="aspect-video max-w-[1440px] m-auto md:mb-[120px]"
                    />
                </div>
            </div>
        </>
    );
}
