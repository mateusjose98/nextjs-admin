interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  children: import('react').ReactNode;
  onClick?: () => void;
}

export default function Button({
  className,
  children,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full text-white p-2 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}
