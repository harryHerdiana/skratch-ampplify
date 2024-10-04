import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../sections/projectdata";
export default function ProjectPage() {
    return (
        <div
            className="px-[9px] lg:px-[19px]
        pt-12 bg-[#FDFCF3] text-[#1F1F1F] rounded-[20px]  font-['MonumentGrotesk-Regular']"
        >
            <main className="mt-10 md:mt-[175px] mx-auto ">
                <h1 className="text-[#565652] md:text-[120px] text-[52px] leading-[48px] tracking-[-0.02em]  mb-[60px] md:mb-[120px]  font-['MonumentGrotesk-Bold']">
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
                                    <p className="text-[#1F1F1F66] text-12 mb-2 md:text[18px] lg:text-18">
                                        {project.year}
                                    </p>
                                    <h2 className="text-[#565652]">{project.title}</h2>
                                </div>
                            </Link>
                            <div className="rounded-xl relative w-full md:w-full  aspect-[79/55]">
                            <Link href={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    style={{ borderRadius: "4px" }}
                                />
                            </Link>
                            </div>
                            <div className="space-y-4 md:w-full">
                                <div className="mt-3">
                                    <h3 className="text-[#565652] text-12 mb-2 md:text[18px] lg:text-18">
                                        Services
                                    </h3>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                                        {project.services.map((service, index) => (
                                            service.length > 0 && 
                                            <li
                                                key={service}
                                                className="text-[#1F1F1F66] [&:nth-child(2)]:border-t [&:nth-child(1)]:border-t border-b py-0.5 uppercase font-['MonumentGrotesk-Semi-Mono'] text-12 leading-[20px]"
                                            >
                                            { <span className="mr-8">{index + 1}</span> }{service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
