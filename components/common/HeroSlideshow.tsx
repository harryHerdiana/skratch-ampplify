import heroImage from "@/public/img/products/tdeproduct.png";
import { motion, stagger, useTransform as transform, useAnimate, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SliderItem = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const text =
    "SKRATCH is a digital studio focused on developing experiences to support brands stay ahead of the game.";

  // Split text into individual characters
  const characters = Array.from(text);

  // Ref for the section to measure scroll progress
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // The animation starts when the section enters the viewport and ends when it leaves
  });

  // Map scrollYProgress (0 to 1) to an index in characters array
  const progressIndex = transform(
    scrollYProgress,
    [0, 0.5],
    [0, characters.length]
  );
  const [scope, animate] = useAnimate();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      animate("span", 
        { opacity: 1, y: 0, scaleY: 1, filter: "blur(0px)" }, 
        { duration: 0.1, delay: stagger(0.01) }
      );
      setHasAnimated(true);
    }
  }, [animate, hasAnimated]);

  return (
    <div
    
      className="relative h-screen w-full flex flex-col text-white justify-between bg-dark"
    >
      <div className="z-10 text-20 h-full w-full flex flex-col justify-between p-2.5 md:p-5">
        <div className="text-center">
          <div className="hidden md:flex text-18 relative w-max m-auto justify-center left-12 leading-none">
            <span className="absolute top-[-1px] -left-5 text-10 rotate-[90deg]">
              ▲
            </span>
            {formattedTime}
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 w-full justify-between"   ref={ref}>
          <div className="block text-15 md:text-18 pb-5 md:pb-0">( Info )</div>
          {/* Animate characters */}
          <h1    ref={scope} className="md:max-w-[505px] font-[MonumentGrotesk-Regular] text-[30px] leading-[34px] flex flex-wrap ">
            {characters.map((char, index) => {
              // Handle spaces to preserve them in the output
              if (char === " ") {
                return (
                  <span key={index}>
                    {/* Add a regular space or use &nbsp; */}
                    &nbsp;
                  </span>
                );
              }

              // Calculate animation values based on scroll progress
              const opacity = transform(
                progressIndex,
                [index - 1, index],
                [0.5, 1]
              );
              const scaleY = transform(
                progressIndex,
                [index - 1, index],
                [0.1, 1]
              );
              const y = transform(
                progressIndex,
                [index - 1, index],
                [20, 0]
              );
              
              const filter = transform(
                progressIndex,
                [index - 1, index],
                ["blur(4px)", "blur(0px)"]
              );

              return (
                <motion.span
                  key={index}
                  className="inline-block"
                  
                  style={{ opacity, scaleY, filter, y}}
                >
                  {char}
                </motion.span>
              );
            })}
          </h1>
        </div>
        <div className="flex justify-between md:grid grid-cols-2">
          <div>
            <p className="text-[12px]">2024</p>
            <p>TDE</p>
          </div>
          <Link href="/projects/tde" className="underline self-end">
            View Project
          </Link>
        </div>
      </div>
      <div className="aspect-[9/16] md:aspect-video w-full absolute top-0 left-0 h-full rounded-[20px] overflow-hidden">
        <Image
          fill
          src={heroImage}
          alt=""
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

const HeroSlideShow = () => {
  return (
    <div className="h-screen bg-white">
      <SliderItem />
    </div>
  );
};

export default HeroSlideShow;