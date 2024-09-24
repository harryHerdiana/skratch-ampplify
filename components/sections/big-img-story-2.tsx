import classNames from "classnames";
import Image from "next/image";

const BigImageStory2 = (props: BigImageStoryProps) => {
    return (
        <div className="text-black font-['MonumentGrotesk-Regular']">
            {props.imgUrl && (
                <div
                    className={classNames(
                        `py-[40px] relative rounded-[4px] flex items-center justify-center lg:py-[128px]`,
                        props.imageOuterContainerClassname
                    )}
                >
                    <div
                        className={classNames(
                            "relative h-full w-full ",
                            props.imageContainerClassname
                        )}
                    >
                        <Image
                            src={props.imgUrl}
                            alt=""
                            className={classNames(
                                "object-cover ",
                                props.imageClassname
                            )}
                            fill
                        />
                    </div>
                </div>
            )}

            {props.title && props.story && (
                <div className={props.textContainerClassname}>
                    <div className="border-t border-[#D6D8CE] mt-8 opacity-15 mix-blend-difference "></div>
                    <div className="flex flex-col md:flex-row font-['MonumentGrotesk-Regular'] mt-5 ">
                        <div className="w-full">
                            <h2
                                className={`text-12 md:text-15  mt-2.5 mb-5 lg:mb-[28px] 
                         ${props.textColor ?? "text-black"}`}
                            >
                                {props.title}
                            </h2>
                        </div>

                        <div className=" md:mt-0 mb-16 max-w-[453px] md:mr-[17%]">
                            <p
                                className={`text-[18px] md:text-[24px] leading-[24px] 
                         md:leading-[30px] ${
                             props.textColor ?? "text-[#1F1F1F]"
                         }`}
                            >
                                {props.story}
                            </p>
                            {props.story2 && (
                                <p
                                    className={`text-[18px] md:text-[24px] leading-[24px] 
                         md:leading-[30px] my-4 ${
                             props.textColor ?? "text-[#1F1F1F]"
                         }`}
                                >
                                    {props.story2}
                                </p>
                            )}
                            {props.story3 && (
                                <p
                                    className={`text-[18px] md:text-[24px] leading-[24px] 
                         md:leading-[30px] ${
                             props.textColor ?? "text-[#1F1F1F]"
                         }`}
                                >
                                    {props.story3}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BigImageStory2;
