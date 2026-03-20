import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "fadeInUp" | "fadeInLeft" | "fadeInRight" | "bounceIn" | "zoomIn";

const variants = {
  fadeInUp: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
  fadeInLeft: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  fadeInRight: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 15 } },
  },
  zoomIn: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
};

interface Props {
  children: ReactNode;
  animation?: AnimationType;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, animation = "fadeInUp", className = "", delay = 0 }: Props) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    variants={variants[animation]}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
