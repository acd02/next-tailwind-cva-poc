import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

type Props = {
  className?: string
}

const button = cva(
  ['font-semibold', 'border', 'rounded', 'hover:transition-colors', 'hover:duration-100'],
  {
    variants: {
      disabled: {
        true: 'disabled:cursor-not-allowed disabled:opacity-70',
      },
      intent: {
        primary: [
          'bg-primaries-first',
          'text-white',
          'border-transparent',
          'hover:bg-primaries-second',
        ],
        secondary: [
          'bg-secondaries-first',
          'text-gray-100',
          'border-transparent',
          'hover:bg-secondaries-second',
        ],
      },
      size: {
        small: ['text-sm', 'px-sm', 'py-xs'],
        medium: ['text-base', 'px-md', 'py-sm'],
        large: ['text-lg', 'px-lg', 'py-md'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'small',
    },
    compoundVariants: [
      {
        intent: 'primary',
        size: 'small',
        disabled: true,
        className: 'border-4 border-black',
      },
    ],
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
    <button
      className={button({
        intent,
        size,
        disabled: !!rest.disabled,
        className,
      })}
      {...rest}
    >
      {children}
    </button>
  )
}

export { Button }
