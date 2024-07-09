import Image from "next/image";

import CertorProduct from "@/public/img/products/certor/certorproduct.png";
import Link from "next/link";

const ProjectItem = () => {
    const services = [
        "UX/UI design",
        "custom theme development",
        "store set-up",
        "app integration",
        "custom app development",
    ];

    return (
        <div className="max-w-[327px] md:max-w-[808px] w-full ">
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
                {services.map((item: string, index: number) => (
                    <div
                        key={item}
                        className="items-center flex my-1 gap-8 text-[#1F1F1F66] border-t border-[#1F1F1F26]"
                    >
                        <p className="w-2">{index + 1}</p>
                        <p className="uppercase">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProjectList = () => {
    return (
        <div className="bg-white pt-[60px] px-2.5 pb-4 rounded-[20px] text-12 md:text-15">
            <h3 className="uppercase font-bold text-52 md:text-120">projects</h3>
            <div className="flex my-[60px]">
                <h4 className="w-full">Our Work</h4>
                <p className="uppercase">
                    is a digital studio focused on developing experiences to
                    help brands stay ahead of the game.
                </p>
            </div>
            <div className="mb-32">
                <ProjectItem />
            </div>
            <Link href="/projects" className="text-20 md:text-32">View All Projects</Link>
        </div>
    );
};

export default ProjectList;
