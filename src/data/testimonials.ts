export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization?: string;
  /** Must be true only when written permission to publish exists. */
  approved: boolean;
};

/**
 * Intentionally empty: no genuine, approved testimonials were found on kalqy.in.
 * Add entries here (with approved: true) and the Testimonials page will render them.
 */
export const testimonials: Testimonial[] = [];
