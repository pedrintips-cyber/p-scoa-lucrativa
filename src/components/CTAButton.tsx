import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  className?: string;
  variant?: "default" | "dark";
  href?: string;
}

const CTAButton = ({ text, className = "", variant = "default", href = "#oferta" }: Props) => {
  const navigate = useNavigate();
  const isInternal = href.startsWith("/");

  const handleClick = (e: React.MouseEvent) => {
    if (isInternal) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsl(38 85% 55% / 0.4)" }}
      whileTap={{ scale: 0.97 }}
      className={`${variant === "dark" ? "btn-cta-dark" : "btn-cta"} inline-block text-center cursor-pointer animate-pulse-cta ${className}`}
    >
      {text}
    </motion.a>
  );
};

export default CTAButton;
