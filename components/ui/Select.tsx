'use client';
import * as React from 'react';
import { cn } from '../lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'primary' | 'secondary';
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, variant = 'primary', ...props }, ref) => {
    const borderColor = variant === 'secondary' ? 'border-white' : 'border-[#E2E2E2]';
    const textColor =
      variant === 'secondary'
        ? 'text-white placeholder-white'
        : 'text-[#848484] placeholder-[#848484]';
    const bgColor = 'bg-transparent';

    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(
            'flex h-10 w-full appearance-none  border px-3 py-2 text-sm outline-none transition-colors pr-8 disabled:opacity-50',
            borderColor,
            bgColor,
            textColor,
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className={cn(
            'absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none',
            variant === 'secondary' ? 'text-white' : 'text-[#0097DC]'
          )}
          aria-hidden="true"
        />
      </div>
    );
  }
);

Select.displayName = 'Select';
export { Select };
