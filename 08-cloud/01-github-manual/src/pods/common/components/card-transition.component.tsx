import React from "react";
import { motion } from "framer-motion";

interface Props {
  index: number;
}

export const CardTransition: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      style={{
        perspective: "1000px",
      }}
    >
      {children}
    </motion.div>
  );
};
