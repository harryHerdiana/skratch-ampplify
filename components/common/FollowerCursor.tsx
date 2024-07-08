import { useEffect } from "react";
import gsap from "gsap";
import { motion, useAnimationControls } from "framer-motion";
import classNames from "classnames";

interface FollowerCursorProps {
  isImageHover?: boolean;
  onMenuHover?: boolean;
  isDark:boolean;
}

const containerVariants = {
  initial: {
    height: 20,
    width: 20,
    top: 0,
    left: 0,
  },
  animate: {
    height: 68,
    width: 160,
    top: -34,
    left: -80,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    height: 20,
    width: 20,
    top: 0,
    left: 0,
    transition: { duration: 0.2, ease: "easeInOut", delay: 0.1 },
  },
};

const paragraphVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 100,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0,
    },
  },
};

const FollowerCursor: React.FC<FollowerCursorProps> = ({
  isImageHover,
  onMenuHover,
  isDark
}) => {
  const cursorControls = useAnimationControls();
  const paragraphControls = useAnimationControls();
  useEffect(() => {
    let cursor = document.getElementById("cursor");
    window.addEventListener(
      "pointermove",
      (event: { clientX: number; clientY: number }) => {
        if (cursor) {
          let px = event.clientX - 10;
          let py = event.clientY - 10;
          gsap.to(cursor, 0.1, { y: py, x: px });
        }
      }
    );

    if (onMenuHover) {
      gsap.to(cursor, { opacity: 0, duration: 0.1 });
    } else if (isImageHover) {
      cursorControls.start("animate");
      paragraphControls.start("animate");
      cursorControls.mount();
      gsap.to(cursor, { opacity: 0.8, duration: 0.1 });
    } else {
      cursorControls.start("exit");
      paragraphControls.start("exit");
      gsap.to(cursor, { opacity: 1, duration: 0.1 });
    }
  }, [isImageHover, onMenuHover]);

  return (
    <>
      <motion.div
        variants={containerVariants}
        animate={cursorControls}
        id="cursor"
        className={classNames(
          isImageHover ? "opacity-80" : "opacity-100",
          "fixed flex rounded-full pointer-events-none items-center justify-center overflow-hidden transition-opacity duration-100 ease-out"
        )}
        style={{ background: isDark ? "#ff5C00":"#001AFF", zIndex: 100 }}
      >
        <motion.p
          animate={paragraphControls}
          variants={paragraphVariants}
          className="uppercase text-14 text-white font-['SuisseIntl-Condensed'] tracking-[1px]"
        >
          view project
        </motion.p>
      </motion.div>
    </>
  );
};

export default FollowerCursor;
