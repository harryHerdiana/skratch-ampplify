"use client";
import HeroTitle from "@/components/common/HeroTitle";
import BigImageOnly from "@/components/sections/big-img-only";
import BigImageStory from "@/components/sections/big-img-story";
import BigTitleStory from "@/components/sections/big-title-story";
import Head from "next/head";
import { projectsData } from "../../sections/projectdata";

export default function CertortPage() {
  const project = projectsData.find((project) => project.title === "Certor");

     if (!project) {
         return <div>Project data not found.</div>;
     }
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-dark">
        <HeroTitle
          title="CERTOR"
          subtitle="Here to contend"
          desktopImgUrl="/img/products/certorproduct.png"
          mobileImgUrl="/img/products/mobile/certorproduct-mobile.png"
        />
        <div className="bg-[#FDFCF3] rounded-[20px] font-[MonumentGrotesk-Semi-Mono] px-[9px] lg:px-[19px] pb-[80px] lg:pb-[210px]">
        <BigTitleStory
                        title={`We’re leaders in
                        technology, innovation
                        design,  and sport`}
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
                        textRight="Certor Sports offers high-quality sports equipment with a focus on improving athletes' performance and safety. We helped develop Certor’s company website in Webflow, expanding off of the identity and UI work created by MUTO."
                    />
                    <div className="">
                    <BigImageStory
                      imageContainerClassname="aspect-square md:aspect-video"
                      imgUrl={`/img/products/certor/certor-1.png`}
                      width={`90%`}
                      height={`60%`}
                      imageClassname="rounded-[4px]"
                      title={`Challenge`}
                      story={`One main purpose of the site was to showcase job opportunities and attract potential employees. We developed a custom integration of their current hiring platform that was required to display current openings.`}

                    />
                    </div>
        </div>
        <div className="rounded-[20px] bg-[#D6D8CE] px-[9px] lg:px-[19px]">
          <BigImageStory
            imgUrl={`/img/products/certor/certor-2.png`}
            imageContainerClassname="aspect-[15/17] max-w-[1000px] m-auto"
            imageClassname="py-40px"
          />
        </div>

        <div className="overflow-hidden md:py-[120px] md:px-[60px] p-[40px]">
          <BigImageOnly imgUrl={`/img/products/certor/certor-3.png`} contain/>
        </div>
        <div className="rounded-[20px] overflow-hidden">
          <BigImageOnly imgUrl={`/img/products/certor/certor-4.png`} />
        </div>
      </div>
    </>
  );
}
