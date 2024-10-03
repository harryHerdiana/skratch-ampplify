const BigTitleStory = (props: BigTitleProps) => {
  return (
    <div className="text-[#565652] pt-[60px] lg:pt-[120px] font-['MonumentGrotesk-Bold']">
      <div className="mb-[60px] md:mb-[92px] ">
        <p
          className="whitespace-pre-line text-[46px] sm:text-[52px] 
                        md:text-[80px] leading-[48px] md:leading-[72px] 
                        tracking-[-0.02em] uppercase text-[#1F1F1F]"
        >
          {props.title}
        </p>
      </div>

      <div className="flex flex-col md:flex-row  font-['MonumentGrotesk-Regular'] md:border-t border-[#1F1F1F] border-opacity-15">
        <div className="border-t border-gray-300 lg:border-none mb-1"></div>
        <div className=" md:w-2/4">
          {props.titleLeft && (
            <h2 className="text-12 md:text-15 mb-5 mt-2.5 lg:mb-[28px] text-[#565652]">
              {props.titleLeft}
            </h2>
          )}
          {props.textLeft && (
            <p className="whitespace-pre-line uppercase text-[12px] text-[#1F1F1F66] font-['MonumentGrotesk-Semi-Mono'] mb-[60px] md:mb-0">
              {props.textLeft}
            </p>
          )}
        </div>

        <div className=" md:mt-0 md:w-2/4">
          <div className="text-[#565652] border-t border-gray-300 mb-1 md:hidden"></div>
          {props.titleRight && (
            <h2 className="text-12 md:text-15  mt-2.5 mb-5 lg:mb-[28px] text-[#565652]">
              {props.titleRight}
            </h2>
          )}
          <div className="text-[#565652] md:mt-0 md:max-w-[510px]">
            {props.textRight && (
              <p className="text-[18px] text-[#565652] md:text-[24px] leading-[24px] md:leading-[30px]">
                {props.textRight}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigTitleStory;
