import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

type Props = {
  className?: string
}

const button = cva(
  ['font-semibold', 'border', 'rounded', 'hover:transition-colors', 'hover:duration-100'],
  {
    variants: {
      intent: {
        primary: [
          'bg-primaries-first',
          'text-white',
          'border-transparent',
          'hover:bg-primaries-second',
        ],
        secondary: [
          'bg-secondaries-first',
          'text-gray-200',
          'border-gray-400',
          'hover:bg-secondaries-second',
        ],
      },
      size: {
        small: ['text-sm', 'py-sm', 'px-xs'],
        medium: ['text-base', 'py-sm', 'px-lg'],
        large: ['text-lg', 'py-lg', 'px-xl'],
      },
    },
    // compoundVariants: [
    //   {
    //     intent: 'primary',
    //     size: 'medium',
    //   },
    // ],
    defaultVariants: {
      intent: 'primary',
      size: 'small',
    },
  }
)

type CVAProps = VariantProps<typeof button> // & { intent: string } <- to mark a prop as required

function Button({
  className,
  color = 'gray',
  children,
  intent,
  size,
  ...rest
}: ComponentPropsWithoutRef<'button'> & Props & CVAProps) {
  return (
    <button className={button({ intent, size, className })} {...rest}>
      {children}
    </button>
  )
}

export { Button }
