import { createElement, type ReactNode } from "react";

function Typography({
  component,
  children,
}: {
  component: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode[];
}) {
  return createElement(component, {}, children);
}

export default Typography;
