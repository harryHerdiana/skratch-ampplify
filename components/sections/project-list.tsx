import classNames from "classnames";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import { projectsData } from "./projectdata";

const ProjectItem = (props: IProjectList) => {
    return (
        <div className="md:max-w-full px-[5px] w-full sm:translate-x-1/2 translate-x-[18%] hover:cursor-none">
            <Link 
            className="cursor-none"
                href={`/projects/${props.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
            >
                <p className="text-20 md:text-32 w-max mb-2.5 text-[#565652]">
                    <span className="text-[#1F1F1F66] text-12 mb-2 md:text[18px] lg:text-18 leading-[16px]">
                        {props.year}
                    </span>
                    <br />
                    {props.title}
                </p>
            </Link>
            <Link  
            className="cursor-none"
                href={`/projects/${props.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
            >
                <div className="relative aspect-video">
                    <Image
                        src={props.image}
                        alt="Certor product"
                        fill
                        className="rounded-[4px] h-full object-cover"
                    />
                </div>
            </Link>
            <div className="mt-3 text-left">
                <p className="text-[#565652] uppercase font-['MonumentGrotesk-Semi-Mono'] text-12 mb-2">
                    Services
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    {props.services.map(
                        (service) =>
                            service.length > 0 && (
                                <li
                                    key={service}
                                    className="text-[#1F1F1F66] [&:nth-child(2)]:border-t [&:nth-child(1)]:border-t border-b py-0.5 uppercase font-['MonumentGrotesk-Semi-Mono'] text-12 leading-[20px]"
                                >
                                    {service}
                                </li>
                            )
                    )}
                </ul>
            </div>
        </div>
    );
};

const ProjectList: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

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

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    }, []);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
        setIsHovering(false);
        setIsDragging(false);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const cursorControls = useAnimation();

    useEffect(() => {
        if (isHovering) {
            cursorControls.start({ opacity: 1, scale: 1 });
        }else {
            cursorControls.start({ opacity: 0, scale: 0.5 });
        }
    }, [isHovering, cursorControls]);

    return (
        <div className="bg-white pt-[60px] lg:py-[120px] pb-4 rounded-[20px] text-12 md:text-15 ">
            <h3 className="pl-2 md:pl-4 text-52 md:text-120 font-['MonumentGrotesk-Regular'] tracking-[-2px] text-[#565652]  mb-32">
                Projects
            </h3>
            <div className="flex pl-3 md:pl-5 my-[60px] lg:my-[105px] justify-between md:grid grid-cols-2">
                <h4 className="w-max text-[#565652]">( Our Work )</h4>
                <p
                    className={classNames(
                        "uppercase w-[282px] font-['MonumentGrotesk-Semi-Mono'] text-12 md:text-12 text-[#565652] lg:ml-[16.7vw]"
                    )}
                >
                    is a digital studio focused on developing experiences to
                    help brands stay ahead of the game.
                </p>
            </div>

            <div className="pl-2 md:pl-4 w-full lg:w-auto relative top-32" >
                <div 
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    <Slider {...settings} className="cursor-none">
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
                <motion.div
                    className="fixed pointer-events-none rounded-full bg-black text-white flex items-center justify-center"
                    animate={cursorControls}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                        left: cursorPosition.x,
                        top: cursorPosition.y,
                        width: isDragging ? 80 : 64,
                        height: isDragging ? 80 : 64,
                    }}
                >
                    drag{isDragging ? "ging" : ""}
                </motion.div>

                <div className="mt-32">
                    <Link
                        href="/projects"
                        className="text-20 pl-3 md:pl-5  lg:text-[34px] text-[#565652] underline"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
