import { openLeadModal } from "./LeadModal";

/** A button styled like the site's links (pass the same className) that opens the lead card instead of navigating. */
export function LeadButton({ children, ...rest }) {
  return (
    <button type="button" onClick={openLeadModal} {...rest}>
      {children}
    </button>
  );
}
