import Image from "next/image";
const BigImageStory = (props: BigImageStoryProps) => {
    return (
        <>
            <div className="text-black font-sans p-5">
                <div id='wrap-image' className={`
                    w-full max-w-full max-h-full
                    relative rounded-[4px] overflow-hidden
                    flex items-center justify-center`}>
                    <div className={` relative w-full h-0
                        ${'pb-[56.25%]'} // Default to 16:9 aspect ratio
                    `} style={{ width: props.width, height: props.height }}>
                        <Image
                            layout="fill"
                            src={props.imgUrl}
                            alt=""
                            className="object-contain"
                        />
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
export default BigImageStory;