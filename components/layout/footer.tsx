import footerLogo from "@/public/img/common/skratch_footer.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projectsData } from "../sections/projectdata";

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark">
            <div className=" bg-[#D6D8CE] text-[#1F1F1F66] uppercase pt-[40px] lg:pt-[20px] px-2.5 md:px-5 pb-5 rounded-[20px] text-12 font-['MonumentGrotesk-Semi-Mono'] leading-[16px]">
                <div className="grid grid-cols-2 md:hidden">
                    <div className="flex flex-col">
                        <Link href="">contact</Link>
                    </div>
                    <div />
                </div>
                <div className="grid grid-cols-2 mt-[60px] md:hidden">
                    <p>Projects:</p>
                    <ul>
                    {projectsData.map((project) => (
                            <li>
                                <Link href={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}>
                                    {project.title}
                                </Link>
                            </li>
                    ))}
                    </ul>
                </div>
                <div className="grid grid-cols-2 mt-[60px] md:hidden">
                    <ul>
                        <li>
                            <Link href="">behance</Link>
                        </li>
                        <li>
                            <Link href="">facebook</Link>
                        </li>
                        <li>
                            <Link href="">instagram</Link>
                        </li>
                        <li>
                            <Link href="">linkedin</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>phone no.</li>
                        <li>(213) 533-8208</li>
                        <li className="text-transparent"> x</li>
                        <li>email:</li>
                        <li>studio@skratch.co</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 mt-[60px]  md:hidden">
                    <ul>
                        <li>skratch llc.</li>
                        <li>all rights reserved</li>
                    </ul>
                    <ul>
                        <li>©2024</li>
                    </ul>
                </div>
                <div className="hidden md:grid grid-cols-4">
                    <div className="flex flex-col">
                        <Link href="mailto:studio@skratch.co">contact</Link>
                    </div>

                    <p>Projects:</p>
                    <ul>
                    {projectsData.map((project) => (
                            <li>
                                <Link href={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}>
                                    {project.title}
                                </Link>
                            </li>
                    ))}
                    </ul>
                    <ul>
                        <li>
                            <Link href="">behance</Link>
                        </li>
                        <li>
                            <Link href="">facebook</Link>
                        </li>
                        <li>
                            <Link href="">instagram</Link>
                        </li>
                        <li>
                            <Link href="">linkedin</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:grid grid-cols-4 mt-[169px]">
                    <ul className="flex flex-col justify-end">
                        <li>skratch llc.</li>
                        <li>all rights reserved</li>
                    </ul>

                    <p></p>
                    <ul>
                    <li>phone no.</li>
                        <li>(213) 533-8208</li>
                        <li> </li>
                        <li>email:</li>
                        <li>studio@skratch.co</li>
                    </ul>
                    <ul className="flex flex-col justify-end items-end">
                    <li>©2024</li>
                    </ul>
                </div>
                <div className="relative aspect-[350/59] mt-[58px] lg:mt-[118px]">
                    <Image src={footerLogo} alt="" fill />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
