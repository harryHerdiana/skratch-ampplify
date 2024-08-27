import CertorProduct from "@/public/img/products/certor/certorproduct.png";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const ProjectItem: React.FC = () => {
    const services = [
        "UX/UI design",
        "custom theme development",
        "store set-up",
        "app integration",
        "custom app development",
    ];

    return (
        <div className="max-w-[327px] md:max-w-full w-auto px-5">
            <p className="text-20 md:text-32 w-max mb-2.5">
                <span className="text-[#1F1F1F80]">2023</span>
                <br />
                Certor
            </p>
            <div className="relative aspect-video">
                <Image src={CertorProduct} alt="" fill className="h-full" />
            </div>
            <div className="mt-3 ">
                <p className="mb-2">Services</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    <div className="">
                        {services.slice(0, 3).map((service, index) => (
                            <div
                                key={index}
                                className={`text-[#1F1F1F] text-opacity-40 flex         items-center border-b border-gray-200 ${
                                    index == 0 && "border-t"
                                } px-2 py-0.5 leading-[20px]`}
                            >
                                <span className="text-12 font-medium mr-8">
                                    {service ? index + 1 : ""}
                                </span>
                                <span className="text-12">{service}</span>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        {services.slice(3).map((service, index) => (
                            <div
                                key={index + 3}
                                className={`text-[#1F1F1F] text-opacity-40 flex    font-['MonumentGrotesk-Semi-Mono']     items-center border-b border-gray-200 ${
                                    index == 0 && "md:border-t"
                                } px-2 py-0.5 leading-[20px]`}
                            >
                                <span className="text-12 font-medium mr-8 min-h-4">
                                    {service ? index + 4 : ""}
                                </span>
                                <span className="text-12">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
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
                    <ProjectItem /> <ProjectItem /> <ProjectItem />
                    <ProjectItem />
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
