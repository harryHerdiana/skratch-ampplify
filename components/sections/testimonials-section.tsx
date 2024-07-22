import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Slider from "react-slick";

const TestimonialItem: React.FC = () => {
  return (
    <div className="flex flex-col gap-[120px]">
      <p className=" text-[30px] leading-[34px] md:max-w-[510px]">
        “Lorem ipsum dolor sit amet, deus consectetur adipiscing elit, sed do
        eiusmod et tempor incididunt ut labores et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris.”
      </p>
      <div className="text-[#1F1F1F66] uppercase">
        <p>April Osmanof</p>
        <p>CEO @ Amazon & Hubspot</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <div className="bg-white pt-[60px] px-2.5 pb-4 rounded-[20px] text-12 md:text-15 text-[#1f1f1f]">
      <div className="md:grid md:grid-cols-2 border-t-[1px] border-t-[#1F1F1F26] md:pt-5">
        <h3 className=" pt-2.5 md:pt-0 mb-16 ">Testimonials</h3>
        <div className="w-full relative">
          <div className="absolute right-0 bottom-0 md:top-0 flex gap-1 text-[#1F1F1F66] z-10 h-max">
            <button className="p-2.5 bg-[#D6D8CE] rounded-[4px] hover:opacity-85 cursor-pointer">
              <ArrowLeftIcon className="size-4" />
            </button>
            <button className="p-2.5 bg-[#D6D8CE] rounded-[4px]  hover:opacity-85  cursor-pointer">
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
          <Slider {...settings}>
            {" "}
            <TestimonialItem /> <TestimonialItem />
          </Slider>
        </div>
      </div>
      <h2 className="uppercase text-48 leading-[48px] mt-[120px] md:text-120 md:leading-[110px] font-['MonumentGrotesk-Bold'] tracking-[-2px]">
        Testimonials
      </h2>
    </div>
  );
};

export default TestimonialsSection;
