import classNames from "classnames";
import Image from "next/image";
const BigImageStory = (props: BigImageStoryProps) => {
    return (
    
            <div className="text-black font-sans p-5">
         
                <div className={classNames(props.imageClassname,'w-full relative top-0 left-0 h-full  overflow-hidden')}>
                    <Image
                        layout="fill"
                        src={props.imgUrl}
                        alt=""
                        className="h-full object-cover"
                    />
                </div>
                <div className="border-t border-[#1F1F1F] mt-8 opacity-15"></div>

                <div className="flex flex-col md:flex-row p-2  font-['MonumentGrotesk-Regular']">
                    <div className=" md:w-2/4">
                        <h2 className={`text-[15px] mb-4 
                            ${props.textColor ?? 'text-[#1F1F1F]'}`}>
                            {props.title}
                        </h2>
                    </div>

                    <div className="md:mt-0 mb-16 md:w-2/4">
                        <p className={`text-[18px] md:text-[24px]  leading-[24px] 
                            md:leading-[30px] ${props.textColor ?? 'text-[#1F1F1F]'}`}>
                            {props.story}
                        </p>
                    </div>
                </div>
            </div>
       
    );
}
export default BigImageStory;