import footerLogo from "@/public/img/common/skratch_footer.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black">
            <div className=" bg-[#D6D8CE] text-[#1F1F1F66] uppercase pt-[60px] px-2.5 pb-4 rounded-[20px] text-12 md:text-15">
                <div className="grid grid-cols-2 md:hidden">
                    <div className="flex flex-col">
                        <Link href="">work</Link>
                        <Link href="">contact</Link>
                    </div>
                    <div />
                </div>
                <div className="grid grid-cols-2 mt-12  md:hidden">
                    <p>projects</p>
                    <ul>
                        <li>certor</li>
                        <li>vicis</li>
                        <li>schutt</li>
                        <li>tucci</li>
                        <li>the home edit</li>
                        <li>volt athletics</li>
                        <li>speakesy</li>
                        <li>tryit</li>
                        <li>evvy</li>
                        <li>proprio</li>
                        <li>blueprint</li>
                        <li>aftco</li>
                        <li>dice barbers</li>
                        <li>skatex</li>
                        <li>timbergames</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 mt-12  md:hidden">
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
                        <li> </li>
                        <li>email:</li>
                        <li>studio@skratch.co</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 mt-12  md:hidden">
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
                        <Link href="">work</Link>
                        <Link href="">contact</Link>
                    </div>

                    <p>projects</p>
                    <ul>
                        <li>certor</li>
                        <li>vicis</li>
                        <li>schutt</li>
                        <li>tucci</li>
                        <li>the home edit</li>
                        <li>volt athletics</li>
                        <li>speakesy</li>
                        <li>tryit</li>
                        <li>evvy</li>
                        <li>proprio</li>
                        <li>blueprint</li>
                        <li>aftco</li>
                        <li>dice barbers</li>
                        <li>skatex</li>
                        <li>timbergames</li>
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
                <div className="hidden md:grid grid-cols-4 mt-40">
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
                <div className="relative aspect-[350/59] mt-14">
                    <Image src={footerLogo} alt="" fill />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
