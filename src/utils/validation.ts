export type FieldErrors<T extends string> = Partial<Record<T, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isEmail = (v: string) => EMAIL.test(v.trim());

export type ContactValues = { name: string; email: string; message: string; organization?: string; role?: string };

export function validateContact(v: ContactValues, opts: { school?: boolean } = {}): FieldErrors<keyof ContactValues> {
  const errors: FieldErrors<keyof ContactValues> = {};
  if (!v.name.trim()) errors.name = "Please enter your name.";
  if (!v.email.trim()) errors.email = "Please enter your email address.";
  else if (!isEmail(v.email)) errors.email = "Please enter a valid email address, like name@example.com.";
  if (opts.school && !v.organization?.trim()) errors.organization = "Please enter your school or organization.";
  if (!v.message.trim()) errors.message = "Please write a short message.";
  else if (v.message.trim().length < 10) errors.message = "Please write at least 10 characters so we can help.";
  return errors;
}
