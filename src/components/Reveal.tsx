"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = 28;

function hidden(direction: Direction) {
  switch (direction) {
    case "up":
      return { opacity: 0, y: offset };
    case "down":
      return { opacity: 0, y: -offset };
    case "left":
      return { opacity: 0, x: offset };
    case "right":
      return { opacity: 0, x: -offset };
    default:
      return { opacity: 0 };
  }
}

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
};

/** Fades / slides its children into view the first time they scroll on-screen. */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: RevealProps) {
  const variants: Variants = {
    hidden: hidden(direction),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
