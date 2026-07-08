import { ArrowUpRight, ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'light';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: LucideIcon;
  children: ReactNode;
}

/**
 * SOUL STUDIO primary action. Pill shape. Always a "dot" containing the icon
 * on the left, label on the right. Never a square button.
 *
 *   <Button>Begin a New Chapter</Button>
 *   <Button variant="ghost" icon={ArrowRight}>Learn More</Button>
 */
export default function Button({
  variant = 'primary',
  icon: Icon = ArrowUpRight,
  className,
  children,
  ...props
}: ButtonProps) {
  if (variant === 'ghost') {
    return (
      <button
        {...props}
        className={cn(
          'inline-flex items-center gap-2.5 rounded-full px-5 py-3',
          'border border-border-strong text-espresso',
          'text-[15px] font-medium tracking-button',
          'transition-colors duration-base ease-out',
          'hover:bg-espresso/[0.04] active:scale-[0.98]',
          className,
        )}
      >
        {children}
        <Icon size={16} strokeWidth={2} />
      </button>
    );
  }

  const isLight = variant === 'light';
  return (
    <button
      {...props}
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full pl-3.5 pr-5 py-3.5',
        'text-[15px] font-medium tracking-button',
        'transition-colors duration-base ease-out',
        isLight
          ? 'bg-ivory text-espresso border border-border-strong hover:bg-ivory-soft'
          : 'bg-wine text-ivory hover:bg-wine-hover active:bg-wine-press',
        'active:scale-[0.98]',
        className,
      )}
    >
      <span
        className={cn(
          'w-7 h-7 rounded-full flex items-center justify-center shrink-0',
          isLight ? 'bg-wine text-ivory' : 'bg-ivory text-wine',
        )}
      >
        <Icon size={14} strokeWidth={2} />
      </span>
      {children}
    </button>
  );
}
