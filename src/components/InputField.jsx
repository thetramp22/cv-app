export function InputField({ name, type }) {
  return (
    <input
      type={type}
      className="text-input"
      aria-label={name}
      id={crypto.randomUUID}
      placeholder={name}
    />
  );
}
