import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedTextOnViewProps {
  text: string | number;
  stepSize?: number;
  animDuration?: number;
  className?: string;
}

const AnimatedTextOnView = ({
  text,
  stepSize = 0.1,
  animDuration = 1,
  className = "",
}: AnimatedTextOnViewProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Split text into individual characters
  const characters = Array.from(String(text));

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <span ref={ref}>
      <span className={`flex flex-wrap ${className}`}>
        {characters.map((char, index) => {
          if (char === " ") {
            return <span key={index}>&nbsp;</span>;
          }

          return (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: {
                    delay: index * stepSize,
                    duration: animDuration,
                  },
                },
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </span>
    </span>
  );
};

export default AnimatedTextOnView;