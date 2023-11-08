import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../lib/utils'

const buttonLinkVariants = cva('cursor-pointer p-3 font-body transition', {
  variants: {
    bg: {
      blue: 'bg-blue-300',
      slate: 'bg-slate-400',
      indigo: 'bg-indigo-300',
      orange: 'bg-orange-300',
      red: 'bg-red-300',
      instagram:
        'bg-gradient-to-br from-purple-300 from-10% via-red-300 via-50% to-orange-300 to-100%',
    },
    rounded: {
      sm: 'rounded-md',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    },
    shadow: {
      sm: 'shadow-[3px_3px_black] hover:shadow-[5px_5px_black] focus:shadow-[2px_2px_black]',
      base: 'shadow-[5px_5px_black] hover:shadow-[7px_7px_black] focus:shadow-[4px_4px_black]',
    },
  },
  defaultVariants: {
    bg: 'slate',
    rounded: 'md',
    shadow: 'base',
  },
})

export type ButtonLinkVariantProps = VariantProps<typeof buttonLinkVariants>

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonLinkVariantProps {}

export function ButtonLink({
  className,
  bg,
  rounded,
  shadow,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(buttonLinkVariants({ bg, rounded, shadow, className }))}
      {...props}
    />
  )
}
