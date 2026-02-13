import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-charcoal",
  secondary:
    "bg-teal text-white hover:bg-navy",
  ghost:
    "bg-transparent text-navy hover:text-teal border-b border-navy/30 hover:border-teal rounded-none px-0",
  outline:
    "bg-transparent text-white border border-white/40 hover:bg-white hover:text-navy",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs tracking-wide",
  md: "px-7 py-3 text-sm tracking-wide",
  lg: "px-9 py-4 text-sm tracking-wide",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const isGhost = variant === "ghost";
  const baseStyles = `inline-flex items-center justify-center gap-2 font-sans font-medium uppercase transition-all duration-300 cursor-pointer ${
    isGhost ? "" : "rounded-sm"
  }`;
  const classes = `${baseStyles} ${variantStyles[variant]} ${isGhost ? "" : sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
