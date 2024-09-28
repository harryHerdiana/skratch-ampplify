import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { projectsData } from "./projectdata";

const ProjectItem = (props: IProjectList) => {
    return (
        <div className="md:max-w-full px-[5px] lg:px-2.5 w-full sm:translate-x-1/2 translate-x-[18%]">
            <Link
                href={`/projects/${props.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
            >
                <p className="text-20 md:text-32 w-max mb-2.5 text-[#1F1F1F]">
                    <span className="text-[#1F1F1F80]">{props.year}</span>
                    <br />
                    {props.title}
                </p>
            </Link>
            <Link
                href={`/projects/${props.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
            >
            <div className="relative aspect-video">
                <Image
                    src={props.image}
                    alt="Certor product"
                    fill
                    className="h-full object-cover"
                />
            </div>
            </Link>
            <div className="mt-3 text-left">
                <p className="mb-2 text-18 text-[#1f1f1f]">Services</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    {props.services.map((service, index) => (
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
    );
};

const ProjectList: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth);
        }
    }, [ref]);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        className: "",
        centerPadding: "0px",

        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1.2,
                },
            },
        ],
    };

    return (
        <div className="bg-white pt-[60px] lg:py-[120px] px-[9px] lg:px-[19px] pb-4 rounded-[20px] text-12 md:text-15">
            <h3 className="uppercase text-52 md:text-120 font-['MonumentGrotesk-Bold'] tracking-[-2px] text-[#1f1f1f]">
                projects
            </h3>
            <div className="flex my-[60px] lg:my-[105px] justify-between lg:justify-normal gap-[86px]">
                <h4 className="w-max text-[#1F1F1F]">Our Work</h4>
                {width && (
                    <p
                        style={{ marginLeft: width / 1.55 }}
                        className={classNames(
                            "hidden lg:block uppercase w-[282px] font-['MonumentGrotesk-Semi-Mono'] text-18 text-[#1f1f1f]"
                        )}
                    >
                        is a digital studio focused on developing experiences to
                        help brands stay ahead of the game.
                    </p>
                )}
                    <p
                        className={classNames(
                            "lg:hidden uppercase w-[282px] font-['MonumentGrotesk-Semi-Mono'] text-12 md:text-18 text-[#1f1f1f]"
                        )}
                    >
                        is a digital studio focused on developing experiences to
                        help brands stay ahead of the game.
                    </p>
            </div>

            <div ref={ref} className="mb-32 w-full lg:w-auto">
                <Slider {...settings}>
                    {projectsData.map((project, index) => (
                        <ProjectItem
                            key={project.title}
                            services={project.services}
                            image={project.image}
                            title={project.title}
                            year={project.year}
                        />
                    ))}
                </Slider>
            </div>
            <Link
                href="/projects"
                className="text-20 lg:text-[34px] text-[#1f1f1f] underline"
            >
                View All Projects
            </Link>
        </div>
    );
};

export default ProjectList;
