import React from "react";
import css from "./Grid.module.css";

interface GridProps {
  children: React.ReactNode;
}

export default function Grid({ children }: GridProps) {
  return <ul className={css.list}>{children}</ul>;
}
