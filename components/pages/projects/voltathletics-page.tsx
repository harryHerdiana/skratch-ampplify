"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigImageStory2 from "@/components/sections/big-img-story-2";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";

export default function VoltAthleticsPage() {
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
                    title="VOLT ATHLETICS"
                    subtitle="Maximize Your Coaching Impact"
                    desktopImgUrl="/img/products/voltproduct.png"
                    mobileImgUrl="/img/products/mobile/voltproduct-mobile.png"
                />
                <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono]">
                    <BigTitleStory
                        title={`Expert fitness guidance, whether you are training as an individual or part of a group`}
                        titleLeft={`Services`}
                        textLeft={`Front-end Development`}
                        titleRight={`About`}
                        textRight="Volt Athletics specializes in providing strength and conditioning solutions for athletes. Their training app combines cutting-edge technology with expert coaching to create individualized training plans that cater to each athlete's goals and needs."
                    />

                    <BigImageStory
                        imageContainerClassname="aspect-square md:aspect-video  "
                        imgUrl={"/img/products/volt/volt-1.png"}
                        width={`90%`}
                        height={`60%`}
                        title={`Challenge`}
                        story={`As Volt Athletics was undertaking a digital revamp, we were brought in to seamlessly blend design and functionality to enhance Volt Athletics' online presence. This required creating a high-performing front-end that prioritized speed, SEO, and accessibility while still aligning with the website's redesign.  `}
                    />
                </div>
                <div className="">
                    <BigImageStory2
                        imageClassname=" px-[9px] lg:px-[19px]"
                        imgUrl={"/img/products/volt/volt-2.png"}
                        imageContainerClassname="aspect-[92/59] m-auto"
                        title={`Approach`}
                        story={`Following our initial discussions with the Volt team, a mutual decision was made to employ a more modern react-based framework for their front-end.`}
                        textColor={`text-white`}
                    />
                </div>
                <div className="bg-[#FDFCF3]  translate-y-10 no-scrollbar overflow-x-scroll flex">
                    <BigImageStory2
                        imgUrl={"/img/products/volt/volt-3.png"}
                        imageContainerClassname="aspect-[45/7] m-auto h-full w-full lg:h-[536px] lg:w-[3588px]"
                    />
                </div>
                <div className="bg-[#FDFCF3]">
                    <BigImageStory2
                            imgUrl={"/img/products/volt/volt-3.png"}
                            imageContainerClassname="aspect-[45/7] m-auto h-full w-full lg:hidden"
                       
                        title={`Approach`}
                        story={`Following our initial discussions with the Volt team, a mutual decision was made to employ a more modern react-based framework for their front-end.`}
                    />
                </div>
                <div className="">
                    <BigImageStory2
                        imageClassname=" px-[9px] lg:px-[19px]"
                        imgUrl={"/img/products/volt/volt-4.png"}
                        imageContainerClassname="aspect-[92/59] m-auto"
                        title={`Approach`}
                        story={`Post comprehensive quality assurance conducted by all stakeholders, necessary modifications were implemented before launching the new website, meeting all requirements and expectations. `}
                        textColor={`text-white`}
                    />
                </div>
                <div className="rounded-[20px] mt-[120px] lg:mt-[200px] pb-20 lg:px-40 lg:pb-[200px] ">
                    <BigImageOnly
                        imgUrl={"/img/products/volt/volt-5.png"}
                        imageClassname=" lg:object-cover"
                        className="aspect-[41/42]"
                    />
                </div>
            </div>
        </>
    );
}
