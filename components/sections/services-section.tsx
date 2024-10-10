"use client";

import classNames from "classnames";
import Image from "next/image";

const ecommerceList = [
    "Store Migration",
    "Custom Storefront",
    "Store Setup",
    "APP Integration",
    "API Implementation",
    "Optimization",
];

const modernWebList = [
    "Rapid Product",
    "Prototyping",
    "Information Architecture",
    "User Interface",
    "Graphic Design",
    "Brand Identity",
    "Content Creation",
    "Motion Design",
];

const loNocodeList = [
    "Webflow",
    "Shopify Development",
    "Web-App Development",
    "Usability Testing",
];

const supportList = [
    "Ecommerce Management",
    "Email Campaign Management",
    "Product Image Capture",
];

const ServicesSection = () => {
    return (
        <div className="bg-dark text-white px-2.5 py-[160px]">
            <h3 className="text-52 md:text-120  max-w-[85%] lg:max-w-[1163px] font-['MonumentGrotesk-Regular'] tracking-[-2px]">
                Services
            </h3>
            <div className="mt-[100px] mb-2.5 md:translate-y-10 flex justify-between">
                {" "}
                <h3 className="text-12 lg:text-15 mb-[25px]">
                ( What we do )
                </h3>{" "}
            </div>
            <div className="font-[MonumentGrotesk-Semi-Mono] uppercase text-12 leading-[16px] ">
                <div className="grid grid-cols-6  text-[#E4E4E4]  border-b  border-white border-opacity-10">
                    <div className="py-[6px] col-span-3">
                        <div className="flex gap-2.5">
                          
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div
                            className={classNames(
                                "grid relative grid-cols-2 py-[6px]   border-white border-opacity-10"
                            )}
                        >
                            <div className="flex items-center ">
                                <p>Ecommerce</p>
                            </div>
                            <p className="col-span-1">Modern Web</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6  text-[#E4E4E4]">
                    <div className="py-[6px] col-span-3">
                        <div className="flex gap-2.5 mt-[4px]">
                        <Image src="/img/common/services-1.png" alt="ecommerce" width={109} height={109} />
                        <Image src="/img/common/services-2.png" alt="ecommerce" width={109} height={109} />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div
                            className={classNames(
                                "grid relative grid-cols-2 py-[6px]   text-[#565652]"
                            )}
                        >
                            <ul className="block items-center ">
                                {ecommerceList.map((item) => (
                                    <li
                                        className="mr-[10px] py-[6px] border-b border-white border-opacity-10"
                                        key={item}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <ul className="block items-center ">
                                {modernWebList.map((item) => (
                                    <li
                                        className=" py-[6px] border-b border-white border-opacity-10"
                                        key={item}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-[MonumentGrotesk-Semi-Mono] uppercase text-12 leading-[16px] mt-[110px]">
                <div className="grid grid-cols-6  text-[#E4E4E4]  border-b  border-white border-opacity-10">
                    <div className="py-[6px] col-span-3">
               
                    </div>
                    <div className="col-span-3">
                        <div
                            className={classNames(
                                "grid relative grid-cols-2 py-[6px]   border-white border-opacity-10"
                            )}
                        >
                            <div className="flex items-center ">
                                <p>Lo-NO Code</p>
                            </div>
                            <p className="col-span-1">Support</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6  text-[#E4E4E4]">
                    <div className="py-[6px] col-span-3">
                    <div className="flex gap-2.5 mt-[4px]">
                        <Image src="/img/common/services-3.png" alt="ecommerce" width={109} height={109} />
                        <Image src="/img/common/services-4.png" alt="ecommerce" width={109} height={109} />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div
                            className={classNames(
                                "grid relative grid-cols-2 py-[6px]   text-[#565652]"
                            )}
                        >
                            <ul className="block items-center ">
                                {loNocodeList.map((item) => (
                                    <li
                                        className="mr-[10px] py-[6px] border-b border-white border-opacity-10"
                                        key={item}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <ul className="block items-center ">
                                {supportList.map((item) => (
                                    <li
                                        className=" py-[6px] border-b border-white border-opacity-10"
                                        key={item}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
