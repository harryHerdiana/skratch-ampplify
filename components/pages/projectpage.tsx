import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../sections/projectdata";
export default function ProjectPage() {
    return (
        <div
            className="sm:px-6 lg:px-8 
        pt-12 bg-[#FDFCF3] text-[#1F1F1F] rounded-[20px]  font-['MonumentGrotesk-Regular']"
        >
            <main className="mt-10 md:mt-[175px] mx-auto px-4">
                <h1 className="md:text-[120px] text-[52px] leading-[48px] tracking-tighter  font-bold mb-[60px] md:mb-[120px]  font-['MonumentGrotesk-Bold']">
                    PROJECTS
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.title}
                            className="space-y-4 mb-[60px] lg:mb-[120px]"
                        >
                            <Link href={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}>
                                <div className="text-[20px] md:text-[30px] leading-[24px] md:leading-[34px]">
                                    <p className="text-gray-500">
                                        {project.year}
                                    </p>
                                    <h2 className="">{project.title}</h2>
                                </div>
                            </Link>
                            <div className="rounded-xl relative w-full md:w-full  aspect-[79/55]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    style={{ borderRadius: "4px" }}
                                />
                            </div>
                            <div className="space-y-4 md:w-full">
                                <div className="mt-3">
                                    <h3 className="text-12 mb-2 md:text[18px] lg:text-18">
                                        Services
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                        <div className="">
                                            {project.services
                                                .slice(0, 3)
                                                .map((service, index) => (
                                                    <div
                                                        key={project.title}
                                                        className={`text-[#1F1F1F] text-opacity-40 flex         items-center border-b border-gray-200 ${
                                                            index == 0 &&
                                                            "border-t"
                                                        } px-2 py-0.5 leading-[20px]`}
                                                    >
                                                        <span className="text-12 font-medium mr-8">
                                                            {service
                                                                ? index + 1
                                                                : ""}
                                                        </span>
                                                        <span className="text-12">
                                                            {service}
                                                        </span>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className="">
                                            {project.services
                                                .slice(3)
                                                .map((service, index) => (
                                                    <div
                                                        key={index + 3}
                                                        className={`text-[#1F1F1F] text-opacity-40 flex         items-center border-b border-gray-200 ${
                                                            index == 0 &&
                                                            "md:border-t"
                                                        } px-2 py-0.5 leading-[20px]`}
                                                    >
                                                        <span className="text-12 font-medium mr-8 min-h-4">
                                                            {service
                                                                ? index + 4
                                                                : ""}
                                                        </span>
                                                        <span className="text-12">
                                                            {service}
                                                        </span>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
