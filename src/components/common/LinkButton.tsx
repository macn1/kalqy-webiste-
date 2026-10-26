import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "blue" | "dark";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  small?: boolean;
  icon?: IconName;
  className?: string;
  /** Force new-tab behavior. External http(s) links open in a new tab by default. */
  external?: boolean;
};

/** A real link styled as a button. Internal routes use next/link; external URLs get rel + a screen-reader hint. */
export function LinkButton({ href, children, variant = "primary", small, icon, className = "", external }: Props) {
  const cls = `btn btn--${variant}${small ? " btn--small" : ""} ${className}`.trim();
  const isExternal = external ?? /^https?:\/\//.test(href);
  const isSpecial = /^(mailto:|tel:)/.test(href);
  if (isExternal) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {icon && <Icon name={icon} size={20} />}
        {children}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }
  if (isSpecial) {
    return (
      <a className={cls} href={href}>
        {icon && <Icon name={icon} size={20} />}
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {icon && <Icon name={icon} size={20} />}
      {children}
    </Link>
  );
}
