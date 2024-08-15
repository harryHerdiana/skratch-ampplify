import classNames from "classnames";
import Image from "next/image";

const BigImageStory2 = (props: BigImageStoryProps) => {
    return (
        <div className="text-black font-['MonumentGrotesk-Regular'] p-2.5 lg:p-5">
            <div
                id="wrap-image"
                className={`
                    w-full max-w-full max-h-full my-[40px]
                    relative rounded-[4px] overflow-hidden
                    flex items-center justify-center lg:my-[128px] `}
            >
                <div className={classNames(props.imageClassname, "relative h-full w-full")}>
                    <Image
                        src={props.imgUrl}
                        alt=""
                        className="object-contain"
                        fill
                    />{" "}
                    :
                </div>
            </div>
            <div className="border-t border-[#1F1F1F] mt-8 opacity-15"></div>

            <div className="flex flex-col md:flex-row font-['MonumentGrotesk-Regular']">
                <div className=" md:w-2/4">
                    <h2
                        className={`text-[15px] font-semibold mb-4 
                            ${props.textColor ?? "text-[#1F1F1F]"}`}
                    >
                        {props.title}
                    </h2>
                </div>

                <div className="md:mt-0 mb-16 md:w-2/4">
                    <p
                        className={`text-[18px] md:text-[24px] leading-[24px] 
                            md:leading-[30px] ${
                                props.textColor ?? "text-[#1F1F1F]"
                            }`}
                    >
                        {props.story}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BigImageStory2;
