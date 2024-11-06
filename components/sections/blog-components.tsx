"use client";

import Image from "next/image";

export const BlogItem: React.FC<BlogItemInterface> = ({
    title,
    date,
    imgUrl,
    categories,
}) => {
    return (
        <div className="border-t border-[#E0E0E0] py-[10px] lg:py-[20px] flex flex-col lg:flex-row m-auto justify-between">
            <time className="font-[MonumentGrotesk-Semi-Mono] text-12 leading-[16px] text-[#808080] uppercase lg:my-[20px]">
                {date}
            </time>
            <h3 className="font-[MonumentGrotesk-Regular] text-20 leading-[24px] mt-[60px] lg:mt-0 lg:hidden">
                {title}
            </h3>
            <div className="max-w-[434px]">
                <div className="my-[10px] lg:my-[20px] ">
                    {categories.map((category) => {
                        return (
                            <span
                                key={category.slug}
                                className="font-[MonumentGrotesk-Semi-Mono] text-14 leading-[16px] text-[#808080] uppercase"
                            >
                                {category.title}
                            </span>
                        );
                    })}
                </div>
                <h3 className="hidden lg:block font-[MonumentGrotesk-Regular] text-[30px] leading-[34px] mt-[60px] lg:mt-0">
                    {title}
                </h3>
            </div>
            <div className="relative aspect-[394/276] lg:max-w-[572px] w-full">
                <Image
                    src={imgUrl}
                    alt={title}
                    fill
                    className="object-cover rounded-md"
                />
            </div>
        </div>
    );
};
