import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

const CTAButton = ({ text, className = "" }: Props) => (
  <motion.a
    href="#oferta"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className={`btn-cta inline-block text-center cursor-pointer animate-pulse-cta ${className}`}
  >
    {text}
  </motion.a>
);

export default CTAButton;
