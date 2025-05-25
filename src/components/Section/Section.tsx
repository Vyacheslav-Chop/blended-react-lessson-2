import React from "react";
import css from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return <section className={css.section}>{children}</section>;
}
