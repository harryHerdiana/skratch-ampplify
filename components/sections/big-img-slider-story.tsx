import classNames from "classnames";
import Image from "next/image";
import Slider from "react-slick";

interface BigImageSliderStoryProps extends Omit<BigImageStoryProps, "imgUrl"> {
    images: string[]; // Array of image URLs instead of single imgUrl
    autoPlay?: boolean;
}

interface SlideImageProps {
    imgUrl: string;
    imageClassname?: string;
}

const SlideImage = ({ imgUrl, imageClassname }: SlideImageProps) => {
    return (
        <div className="relative h-full aspect-video px-10">
            <Image
                quality={100}
                unoptimized
                src={imgUrl}
                alt=""
                className={classNames("", imageClassname)}
                fill
            />
        </div>
    );
};

const BigImageSliderStory = (props: BigImageSliderStoryProps) => {
    // Default slider settings
    const defaultSettings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: props.autoPlay ?? true,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        // centerMode: false,
    };

    return (
        <>
            {props.images?.length > 0 && (
                <div
                    className={classNames(
                        `py-[100px] relative rounded-[4px] flex items-center justify-center lg:py-[120px] m-auto`,
                        props.imageOuterContainerClassname
                    )}
                >
                    <div
                        className={classNames(
                            "relative h-full w-full rounded-[4px] overflow-hidden",
                            props.imageContainerClassname
                        )}
                    >
                        <Slider {...defaultSettings} className="slider-story">
                            {props.images.map((imgUrl, index) => (
                                <SlideImage 
                                    key={index}
                                    imgUrl={imgUrl}
                                    imageClassname={props.imageClassname}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            )}

            <div
                className={classNames(
                    "text-black font-sans ",
                    props.textContainerClassname
                )}
            >
                {props.title && props.story && (
                    <>
                        <div className="border-t border-[#D6D8CE] opacity-15 mix-blend-difference "></div>
                        <div
                            className={classNames(
                                "flex flex-col md:flex-row  font-['MonumentGrotesk-Regular'] mt-5  lg:px-[0]"
                            )}
                        >
                            <div className=" w-1/2">
                                <h2
                                    className={`text-12 md:text-15 mb-5 lg:mb-[28px] 
                        ${props.textColor ?? "text-[#565652]"}`}
                                >
                                    {props.title}
                                </h2>
                            </div>

                            <div className=" md:mt-0 lg:max-w-[453px]  md:w-1/2">
                                <p
                                    className={`text-[18px] md:text-[24px] leading-[24px] 
                        md:leading-[30px] ${
                            props.textColor ?? "text-[#565652]"
                        }`}
                                >
                                    {props.story}
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default BigImageSliderStory;
