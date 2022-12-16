import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

type Props = {
  className?: string
}

const button = cva(['font-semibold', 'border', 'rounded'], {
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
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

type CVAProps = VariantProps<typeof button>

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
