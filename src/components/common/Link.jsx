import { Link as RouterLink } from "react-router-dom";

/** Router Link that keeps the `href` prop used across the site. */
export default function Link({ href, ...rest }) {
  return <RouterLink to={href} {...rest} />;
}
