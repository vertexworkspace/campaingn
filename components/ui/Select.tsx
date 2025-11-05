'use client';
import * as React from 'react';
import { cn } from '../lib/utils';
import { ChevronDown } from 'lucide-react';

/* Note: This is a styled, non-functional <select> for visual matching.
  For a fully accessible and functional dropdown, we'd typically use 
  @radix-ui/react-select, but this is lighter for this specific form.
*/

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          className={cn(
            'flex h-1D w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm',
            ' placeholder:text-gray-500 ',
            ' disabled:opacity-50',
            'pr-8', // Add padding for the icon
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          aria-hidden="true"
        />
      </div>
    );
  }
);
Select.displayName = 'Select';

export { Select };