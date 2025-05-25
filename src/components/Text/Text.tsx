import css from "./Text.module.css";

interface TextProps {
  children: React.ReactNode;
  textAlign?: string;
  marginBottom?: string;
}

export default function Text({
  children,
  textAlign = "",
  marginBottom = "0",
}: TextProps) {
  return (
    <p
      className={[
        css["text"],
        css[textAlign],
        css[`marginBottom${marginBottom}`],
      ].join(" ")}
    >
      {children}
    </p>
  );
}
