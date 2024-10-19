import { motion, useTransform as transform, useScroll } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  stepSize?: number;
  animDuration?: number;
  className?: string;
}

const AnimatedText = ({
  text,
  stepSize = 0.1,
  animDuration = 1,
  className = "",
}: AnimatedTextProps) => {
  // Ref for the section to measure scroll progress
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Starts when the component enters the viewport
  });

  // Split text into individual characters
  const characters = Array.from(text);

  // Calculate the total duration of the animation based on the number of characters
  const totalAnimationDuration =
    (characters.length - 1) * stepSize + animDuration;

  // Map scrollYProgress (0 to 1) to overallProgress (0 to totalAnimationDuration)
  const overallProgress = transform(
    scrollYProgress,
    [0, 0.5],
    [0, totalAnimationDuration]
  );

  return (
    <div ref={ref}>
      <h1 className={`flex flex-wrap ${className}`}>
        {characters.map((char, index) => {
          if (char === " ") {
            return <span key={index}>&nbsp;</span>;
          }

          // Calculate the start time for each character's animation
          const characterStart = index * stepSize;

          // Calculate the individual progress for each character
          const charProgress = transform(
            overallProgress,
            [characterStart, characterStart + animDuration],
            [0, 1]
          );

          // Clamp the progress between 0 and 1
          const clampedProgress = transform(
            charProgress,
            [0, 1],
            [0, 1]
          );

          // Apply the animations based on the clamped progress
          const opacity = clampedProgress;
          const filter = transform(
            clampedProgress,
            [0, 1],
            ["blur(4px)", "blur(0px)"]
          );

          return (
            <motion.span
              key={index}
              className="inline-block"
              style={{ opacity, filter }}
            >
              {char}
            </motion.span>
          );
        })}
      </h1>
    </div>
  );
};

export default AnimatedText;