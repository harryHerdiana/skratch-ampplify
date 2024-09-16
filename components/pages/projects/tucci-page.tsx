"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigImageStory2 from "@/components/sections/big-img-story-2";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";

export default function TucciPage() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-black">
        <HeroTitle
          title="TUCCI"
          subtitle="Built For Battle"
          desktopImgUrl="/img/products/tucciproduct.png"
          mobileImgUrl="/img/products/mobile/tucciproduct-mobile.png"
        />
        <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono]">
          <BigTitleStory
            title={`Optimized impact performance, increased athlete comfort, and improved fit flexibility`}
            titleLeft={`Schutt`}
            textRight="Schutt Sports is a leading manufacturer of athletic equipment, particularly renowned for its football gear, emphasizing player safety and innovation. After being acquired by Certor, they approached us with a request to create a unified shopping experience across their range of brands. "
          />

          <BigImageStory
            imageContainerClassname="aspect-square md:aspect-video "
            imgUrl={`/img/products/tucci/tucci-1.png`}
            width={`90%`}
            height={`60%`}
            title=" "
            story="The objective was to enable users to add products from any of Certor's brand stores and view them in a single shopping cart for a seamless checkout process. This approach aimed to enhance user convenience and streamline the shopping journey."
          />
        </div>
        <div className="">
          <BigImageStory2
            imgUrl={`/img/products/tucci/tucci-2.png`}
            imageOuterContainerClassname="m-auto " 
            imageContainerClassname="aspect-[55/18] m-auto w-full"
            title={`Approach`}
            story={`With a clear understanding of the prerequisites and a deep awareness of API capabilities and limitations of Shopify Plus, we embarked on the creation of a bespoke app designed to fit seamlessly into this collaborative shopping model.`}
            textColor={`text-white`}
          />
        </div>

        <div className="bg-[#FDFCF3]">
          <BigImageStory2
            imageClassname=" px-[9px] lg:px-[19px]"
            imgUrl={`/img/products/tucci/tucci-3.png`}
            imageContainerClassname="aspect-[5/4]  m-auto"
            title={`Approach`}
            story={`Each brand's store operates through its individual Shopify instance, displaying the custom themes we developed in partnership with MUTO.`}
          />
        </div>
        <div className="">
          <BigImageStory2
            imageClassname=" px-[9px] lg:px-[19px]"
            imgUrl={`/img/products/tucci/tucci-4.png`}
            imageContainerClassname="aspect-[47/28] m-auto"
            title={`Approach`}
            story={`The synchronization of cart drawers across all sites ensures a consistent shopping experience, leading to a unified checkout process.`}
            textColor={`text-white`}
          />
        </div>

        <div className="rounded-[20px] mt-[120px] lg:mt-[200px] pb-20 lg:px-40 lg:pb-[200px] ">
          <BigImageOnly imgUrl={`/img/products/tucci/tucci-5.png`} imageClassname=" lg:object-cover" className="aspect-[16/9]"/>
        </div>
      </div>
    </>
  );
}
