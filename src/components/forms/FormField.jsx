/** Label + control + inline error wired together with aria-describedby / aria-invalid. */
export function FormField({ id, label, error, hint, multiline, required, ...rest }) {
  const errId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error ? errId : null, hint ? hintId : null].filter(Boolean).join(" ") || undefined;
  const common = {
    id,
    name: id,
    required,
    "aria-required": required || undefined,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
  };
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {!required && <span className="hint"> (optional)</span>}
      </label>
      {hint && (
        <p className="hint" id={hintId} style={{ margin: "0 0 6px" }}>
          {hint}
        </p>
      )}
      {multiline ? <textarea {...common} {...rest} /> : <input {...common} {...rest} />}
      {error && (
        <p className="field-error" id={errId}>
          {error}
        </p>
      )}
    </div>
  );
}
