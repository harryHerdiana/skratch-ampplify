"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projectArchives = [
    {
        year: 2024,
        projects: [
            {
                title: "certor",
                business:
                    "UX/UI Design, Custom Theme Development, Store Set-up",
                thumbnail: "/img/products/certorproduct.png",
            },
            {
                title: "vicis",
                business: "App Integration, Custom App Development",
                thumbnail: "/img/products/vicisproduct.png",
            },
            {
                title: "schutt",
                business:
                    "UX/UI Design, Custom Theme Development, Store Set-up",
                thumbnail: "/img/products/schuttproduct.png",
            },
            {
                title: "tucci",
                business: "App Integration, Custom App Development",
                thumbnail: "/img/products/tucciproduct.png",
            },
            {
                title: "the home edit",
                business: "Custom App Development",
                thumbnail: "/img/products/thehomeeditproduct.png",
            },
            {
                title: "volt athletics",
                business: "Custom App Development",
                thumbnail: "/img/products/voltproduct.png",
            },
        ],
    },
    {
        year: 2023,
        projects: [
            {
                title: "SPEAKEASY",
                business:
                    "UX/UI Design, Custom Theme Development, Store Set-up",
                thumbnail: "/img/products/speakeasyproduct.png",
            },
            {
                title: "TRYIT",
                business: "App Integration, Custom App Development",
                thumbnail: "/img/products/tryitproduct.png",
            },
            {
                title: "evvy",
                business:
                    "UX/UI Design, Custom Theme Development, Store Set-up",
                thumbnail: "/img/products/evvyproduct.png",
            },
            {
                title: "proprio",
                business: "Custom App Development",
                thumbnail: "/img/products/proprioproduct.png",
            },
            {
                title: "blueprint",
                business: "App Integration, Custom App Development",
                thumbnail: "/img/products/blueprintproduct.png",
            },
        ],
    },
    {
        year: 2022,
        projects: [
            {
                title: "aftco",
                business: "App Integration, Custom App Development",
                thumbnail: "/img/products/aftcoproduct.png",
            },
            {
                title: "dice barbers",
                business:
                    "UX/UI Design, Custom Theme Development, Store Set-up",
                thumbnail: "/img/products/diceproduct.png",
            },
            {
                title: "skatex",
                business: "UX/UI Design",
                thumbnail: "/img/products/diceproduct.png",
            },
            {
                title: "timbergames",
                business:
                    "UX/UI Design, Custom Theme Development, Store Set-up",
                thumbnail: "/img/products/diceproduct.png",
            },
        ],
    },
];

const ProjectArchives = () => {
    const [activeThumbnail, setActiveThumbnail] = useState<string>("");
    return (
        <div className="bg-dark text-white px-2.5 py-[58px] hidden lg:block">
            <div className="flex justify-between">
                {" "}
                <h3 className="text-[30px] leading-[34px] mb-[20px]">
                    Projects Archive
                </h3>{" "}
                <Link
                    href="/projects"
                    className="text-[30px] pl-3 md:pl-5 lg:text-[34px]  underline"
                >
                    View All
                </Link>
            </div>
            <div
                className="font-[MonumentGrotesk-Semi-Mono] uppercase text-12 leading-[16px] "
                onMouseLeave={() => setActiveThumbnail("")}
            >
                {projectArchives.map((item) => (
                    <div
                        className="grid grid-cols-5  text-[#E4E4E4] border-t border-white border-opacity-10"
                        key={item.year}
                    >
                        <p className="py-[6px]">{item.year}</p>
                        <div className="col-span-4 ">
                            {item.projects.map((project) => (
                                <div
                                    onMouseEnter={() =>
                                        setActiveThumbnail(project.thumbnail)
                                    }
                                    key={project.title}
                                    className={classNames(
                                        "grid relative grid-cols-4 py-[6px] hover:cursor-pointer opacity-45 hover:opacity-100  border-white border-opacity-10",
                                        project.title !== "volt athletics" &&
                                            project.title !== "blueprint" &&
                                            "border-b"
                                    )}
                                >
                                    <p className="flex items-center ">
                                        {project.title}
                                    </p>
                                    <p className="col-span-2">
                                        {project.business}
                                    </p>
                                    {activeThumbnail === project.thumbnail && (
                                        <div className="absolute top-1/2 -translate-y-1/2 right-0 h-[169px] w-[243px]">
                                            <Image
                                                src={
                                                    activeThumbnail ===
                                                    project.thumbnail
                                                        ? project.thumbnail
                                                        : ""
                                                }
                                                alt=""
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        
        </div>
    );
};

export default ProjectArchives;
