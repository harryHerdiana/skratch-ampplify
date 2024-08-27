import Image from "next/image";

export default function ProjectPage() {
    const projects = [
        {
            year: "2023",
            name: "Certor",
            image: "/img/new-layout/project-1.png",
        },
        {
            year: "2023",
            name: "EVVY",
            image: "/img/new-layout/project-2.png",
        },
        {
            year: "2023",
            name: "Certor",
            image: "/img/new-layout/project-3.png",
        },
        {
            year: "2023",
            name: "EVVY",
            image: "/img/new-layout/project-4.png",
        },
        {
            year: "2023",
            name: "Certor",
            image: "/img/new-layout/project-5.png",
        },
        {
            year: "2023",
            name: "EVVY",
            image: "/img/new-layout/project-6.png",
        },
        {
            year: "2023",
            name: "Certor",
            image: "/img/new-layout/project-7.png",
        },
        {
            year: "2023",
            name: "EVVY",
            image: "/img/new-layout/project-8.png",
        },
    ];

    const services = [
        "UX/UI DESIGN",
        "CUSTOM THEME DEVELOPMENT",
        "STORE SET-UP",
        "APP INTEGRATION",
        "CUSTOM APP DEVELOPMENT",
        "",
    ];

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
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="space-y-4 mb-[60px] lg:mb-[120px]"
                        >
                            <div className="text-[20px] md:text-[30px] leading-[24px] md:leading-[34px]">
                                <p className="text-gray-500">{project.year}</p>
                                <h2 className="">{project.name}</h2>
                            </div>
                            <div className="rounded-xl relative w-full md:w-full  aspect-[79/55]">
                                <Image
                                    src={project.image}
                                    alt={project.name}
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
                                            {services
                                                .slice(0, 3)
                                                .map((service, index) => (
                                                    <div
                                                        key={index}
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
                                            {services
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
