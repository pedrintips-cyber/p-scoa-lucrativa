import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  variant?: "default" | "dark";
}

const CTAButton = ({ text, className = "", variant = "default" }: Props) => (
  <motion.a
    href="#oferta"
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.97 }}
    className={`${variant === "dark" ? "btn-cta-dark" : "btn-cta"} inline-block text-center cursor-pointer animate-pulse-cta ${className}`}
  >
    {text}
  </motion.a>
);

export default CTAButton;
