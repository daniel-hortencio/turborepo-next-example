import React, { CSSProperties, ReactNode } from "react";

export type BoxElementType =
  | "div"
  | "header"
  | "nav"
  | "section"
  | "footer"
  | "main"
  | "ul"
  | "li"
  | "form";
export interface IBox {
  id?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: BoxElementType;
  onClick?: () => void;
  onSubmit?: (e: any) => void;
}

export const Box = ({
  id,
  children,
  className,
  style,
  as = "div",
  onClick,
  onSubmit,
}: IBox) => {
  const element = {
    div: (
      <div id={id} onClick={onClick} style={style} className={className}>
        {children}
      </div>
    ),
    header: (
      <header id={id} onClick={onClick} style={style} className={className}>
        {children}
      </header>
    ),
    nav: (
      <nav id={id} onClick={onClick} style={style} className={className}>
        {children}
      </nav>
    ),
    section: (
      <section id={id} onClick={onClick} style={style} className={className}>
        {children}
      </section>
    ),
    footer: (
      <footer id={id} onClick={onClick} style={style} className={className}>
        {children}
      </footer>
    ),
    main: (
      <main id={id} onClick={onClick} style={style} className={className}>
        {children}
      </main>
    ),
    ul: (
      <ul id={id} onClick={onClick} style={style} className={className}>
        {children}
      </ul>
    ),
    li: (
      <li id={id} onClick={onClick} style={style} className={className}>
        {children}
      </li>
    ),
    form: (
      <form id={id} onSubmit={onSubmit} style={style} className={className}>
        {children}
      </form>
    ),
  };

  return element[as];
};
