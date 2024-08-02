import Image from "next/image";

const BigImageStory2 = (props: BigImageStoryProps) => {
    return (
        <>
            <div className="text-black font-sans p-5">
                <div id='wrap-image' className={`
                    w-full max-w-full max-h-full my-[40px]
                    relative rounded-[4px] overflow-hidden
                    flex items-center justify-center`}>
                    <div className=
                        {props.add ? 
                            `h-[379px] w-[334px] md:h-[900px] md:w-[1196px] mb-0` :
                            `h-[379px] w-[334px] md:h-[1360px] md:w-[1196px]` 
                        }>
                        {props.add ? 
                            <Image
                                src={props.imgUrl}
                                alt=""
                                className="object-contain"
                                width={1000}
                                height={960}
                            /> :
                            <Image
                                layout="fill"
                                src={props.imgUrl}
                                alt=""
                                className="object-contain"
                            />
                        }
                    </div>
                </div>
                <div className="border-t border-[#1F1F1F] mt-8 opacity-15"></div>

                <div className="flex flex-col md:flex-row p-2">
                    <div className=" md:w-2/4">
                        <h2 className={`text-[15px] font-semibold mb-4 
                            ${props.textColor ?? 'text-[#1F1F1F]'}`}>
                            {props.title}
                        </h2>
                    </div>

                    <div className="md:mt-0 mb-16 md:w-2/4">
                        <p className={`text-[18px] md:text-[24px] font-semibold leading-[24px] 
                            md:leading-[30px] ${props.textColor ?? 'text-[#1F1F1F]'}`}>
                            {props.story}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BigImageStory2;