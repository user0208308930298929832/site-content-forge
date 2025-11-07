export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`transition-all font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
