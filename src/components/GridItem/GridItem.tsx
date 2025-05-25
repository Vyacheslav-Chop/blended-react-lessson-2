import React from "react";
import css from "./GridItem.module.css";

interface GridItemProps {
  children: React.ReactNode;
}

export default function GridItem({ children }: GridItemProps) {
  return <li className={css.item}>{children}</li>;
}
