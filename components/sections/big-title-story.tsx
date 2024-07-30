const BigTitleStory = (props: BigTitleProps) => {
    return (
        <>
            <div className="text-black font-sans md:p-5">
                <div className="mb-12">
                    <p className="whitespace-pre-line pt-12 px-1 text-[52px] 
                        md:text-[80px] font-bold leading-[48px] md:leading-[72px] 
                        tracking-tighter">
                        {props.title}
                    </p>
                </div>

                <div className="border-t border-gray-300 mx-2 mb-1"></div>
                
                <div className="flex flex-col md:flex-row p-2">
                    <div className="mb-16 md:w-2/4">
                        <h2 className="text-[15px] font-semibold mb-4 text-[#1F1F1F]">{props.titleLeft}</h2>
                        <p className="whitespace-pre-line text-[12px] opacity-40">
                            {props.textLeft}
                        </p>
                    </div>
                    
                    <div className="mt-2 md:mt-0 mb-16 md:w-2/4">
                        <div className="border-t border-gray-300 mx-2 mb-1 md:hidden"></div>
                        <h2 className="text-[15px] font-[400] mb-4">{props.titleRight}</h2>
                        <p className="text-[18px] md:text-[24px] font-semibold leading-[24px] md:leading-[30px]">
                            {props.textRight}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BigTitleStory;