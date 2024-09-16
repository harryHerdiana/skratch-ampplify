const BigTitleStory = (props: BigTitleProps) => {
  return (
    <div className="text-[#1f1f1f] md:p-5 font-['MonumentGrotesk-Bold']">
      <div className="mb-[60px] md:mb-[92px] lg:mb-[164px]">
        <p
          className="whitespace-pre-line pt-[60px] px-[9px] lg:px-[19px] text-[46px] sm:text-[52px] 
                        md:text-[80px] font-bold leading-[48px] md:leading-[72px] 
                        tracking-tighte uppercase"
        >
          {props.title}
        </p>
      </div>

      <div className="flex flex-col md:flex-row p-[9px] font-['MonumentGrotesk-Regular'] md:border-t border-[#1F1F1F] border-opacity-15">
        <div className="border-t border-gray-300 lg:border-none mb-1"></div>
        <div className="mb-[60px] md:w-2/4">
          {props.titleLeft && (
            <h2 className="text-12 md:text-15 mb-5 mt-2.5 lg:mb-[28px] text-[#1F1F1F]">
              {props.titleLeft}
            </h2>
          )}
          {props.textLeft && (
            <p className="whitespace-pre-line uppercase text-[12px] text-[#1F1F1F66] font-['MonumentGrotesk-Semi-Mono']">
              {props.textLeft}
            </p>
          )}
        </div>

        <div className=" md:mt-0 mb-16 md:w-2/4">
          <div className="border-t border-gray-300 mb-1 md:hidden"></div>
          {props.titleRight && (
            <h2 className="text-12 md:text-15  mt-2.5 mb-5 lg:mb-[28px] text-[#1F1F1F]">
              {props.titleRight}
            </h2>
          )}
          <div className=" md:mt-0 max-w-[510px] md:mr-[17%]">
            {props.textRight && (
              <p className="text-[18px] md:text-[24px] leading-[24px] md:leading-[30px]">
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
