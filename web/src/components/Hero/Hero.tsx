"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";
import styles from "./Hero.module.scss";

const EASE = [0.22, 1, 0.36, 1] as const;

// Uma única sequência orquestrada: palavras -> letras -> bloco de apresentação.
const root: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const word: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

const letter: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

const intro: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.5 },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const words = profile.name.split(" ");

  return (
    <motion.section
      className={styles.hero}
      variants={root}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
    >
      {/* Leitores de tela leem o nome inteiro, não letra por letra. */}
      <h1 className={styles.name} aria-label={profile.name}>
        {words.map((w) => (
          <motion.span
            key={w}
            className={styles.word}
            variants={word}
            aria-hidden="true"
          >
            {w.split("").map((char, i) => (
              <motion.span key={`${w}-${i}`} className={styles.letter} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </h1>

      <motion.div className={styles.info} variants={intro}>
        <p className={styles.summary}>
          <strong>{profile.role}.</strong> {profile.summary}
        </p>

        <ul className={styles.links} role="list">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.status}>{profile.status}</p>
      </motion.div>
    </motion.section>
  );
}
