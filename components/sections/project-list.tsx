import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { projectsData } from "./projectdata";

const ProjectItem = (props: IProjectList) => {
    return (
        <div className="max-w-[327px] md:max-w-full px-5 w-full">
            <Link
                href={`/projects/${props.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
            >
                <p className="text-20 md:text-32 w-max mb-2.5">
                    <span className="text-[#1F1F1F80]">{props.year}</span>
                    <br />
                    {props.title}
                </p>
            </Link>

            <div className="relative aspect-video">
                <Image
                    src={props.image}
                    alt="Certor product"
                    fill
                    className="h-full object-cover"
                />
            </div>

            <div className="mt-3 text-left">
                <p className="mb-2 text-18">Services</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    {props.services.map((service, index) => (
                        <li
                            key={service}
                            className="text-[#1F1F1F66] border-y border-gray-200 py-0.5 uppercase font-['MonumentGrotesk-Semi-Mono'] text-12 leading-[20px]"
                        >
                            <span className="mr-2">{index + 1}.</span>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ProjectList: React.FC = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1.2,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <div className="bg-white pt-[60px] lg:py-[120px] px-[9px] lg:px-[19px] pb-4 rounded-[20px] text-12 md:text-15">
            <h3 className="uppercase text-52 md:text-120 font-['MonumentGrotesk-Bold'] tracking-[-2px] text-[#1f1f1f]">
                projects
            </h3>
            <div className="flex my-[60px] lg:my-[105px]">
                <h4 className="w-full">Our Work</h4>
                <p className="uppercase max-w-[282px] lg:mr-[18%] font-['MonumentGrotesk-Semi-Mono']">
                    is a digital studio focused on developing experiences to
                    help brands stay ahead of the game.
                </p>
            </div>

            <div className="mb-32 w-full lg:w-auto">
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
