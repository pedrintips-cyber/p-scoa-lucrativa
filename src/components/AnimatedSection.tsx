import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "fadeInUp" | "fadeInLeft" | "fadeInRight" | "bounceIn" | "zoomIn";

const variants = {
  fadeInUp: { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } },
  fadeInLeft: { hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0 } },
  fadeInRight: { hidden: { opacity: 0, x: 18 }, visible: { opacity: 1, x: 0 } },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  zoomIn: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
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
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.35, delay: delay * 0.5, ease: [0.16, 1, 0.3, 1] }}
    variants={variants[animation]}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
