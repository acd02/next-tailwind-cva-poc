import cx from 'classcat'
import { ComponentProps, forwardRef } from 'react'

const Button = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ children, ...rest }, ref) => (
    <button
      ref={ref}
      {...rest}
      className={cx([
        'inline-flex select-none items-center justify-center rounded-md border border-primaries-first px-4 py-2 text-sm font-medium',
        'bg-main-bg text-main-text hover:opacity-80',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
      ])}
    >
      {children}
    </button>
  )
)

/* eslint-disable-next-line fp/no-mutation */
Button.displayName = 'Button'
export { Button }
