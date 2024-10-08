import classNames from "classnames";
const TextOnly = (props: BigImageStoryProps) => {
    return (
        <>
            <div
                className={classNames(
                  "text-black font-sans ",
                  props.textContainerClassname
                )}
            >
                {props.title && props.story && (
                <><div className="border-t border-[#D6D8CE] opacity-15 mix-blend-difference "></div>
                <div
                    className={classNames(
                        "flex flex-col md:flex-row  font-['MonumentGrotesk-Regular'] mt-5  lg:px-[0]"
                        
                    )}
                >
                    <div className=" w-1/2">
                        <h2
                            className={`text-12 md:text-15  mt-2.5 mb-5 lg:mb-[28px] 
                        ${props.textColor ?? "text-[#1F1F1F]"}`}
                        >
                            {props.title}
                        </h2>
                    </div>

                    <div className=" md:mt-0 lg:max-w-[453px]  md:w-1/2">
                        <p
                            className={`text-[18px] md:text-[24px] leading-[24px] 
                        md:leading-[30px] ${
                            props.textColor ?? "text-[#1F1F1F]"
                        }`}
                        >
                            {props.story}
                        </p>
                    </div>
                </div></>
                )}
            </div>
        </>
    );
};
export default TextOnly;
