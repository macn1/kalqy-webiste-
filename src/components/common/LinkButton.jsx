import Link from "@/components/common/Link";
import { Icon } from "./Icon";
/** A real link styled as a button. Internal routes use the router Link; external URLs get rel + a screen-reader hint. */
export function LinkButton({ href, children, variant = "primary", small, icon, className = "", external }) {
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
