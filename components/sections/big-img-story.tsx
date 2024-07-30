import Image from "next/image";

const BigImageStory = (props: BigImageStoryProps) => {
    return (
        <>
            <div className="text-black font-sans p-5">
                <div className="aspect-[9/16] md:aspect-video w-full 
                relative rounded-[4px] overflow-hidden max-h-[400px] md:max-h-none">
                    <Image
                        layout="fill"
                        src={props.imgUrl}
                        alt=""
                        className="h-full"
                    />
                </div>
                <div className="border-t border-gray-300 mt-8"></div>
                
                <div className="flex flex-col md:flex-row p-2">
                    <div className=" md:w-2/4">
                        <h2 className="text-[15px] font-semibold mb-4 text-[#1F1F1F]">
                            {props.title}
                        </h2>
                    </div>
                    
                    <div className="md:mt-0 mb-16 md:w-2/4">
                        <p className="text-[18px] md:text-[24px] font-semibold leading-[24px] md:leading-[30px]">
                            {props.story}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BigImageStory;