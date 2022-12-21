import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import cx from 'classcat'
import { ComponentProps, PropsWithChildren } from 'react'

import { Button } from './Components/Button'

const SelectTrigger = ({
  ariaLabel,
}: ComponentProps<typeof SelectPrimitive['Trigger']> & {
  ariaLabel?: string
}) => {
  return (
    <SelectPrimitive.Trigger asChild aria-label={ariaLabel}>
      <Button>
        <Select.Value />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Button>
    </SelectPrimitive.Trigger>
  )
}

const SelectIcon = ({ children }: PropsWithChildren) => {
  return <SelectPrimitive.Icon className="ml-2">{children}</SelectPrimitive.Icon>
}

const SelectContent = ({
  children,
}: ComponentProps<typeof SelectPrimitive['Viewport']>) => {
  return (
    <SelectPrimitive.Content>
      <SelectPrimitive.Viewport className="rounded-lg bg-white p-2 shadow-lg">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  )
}

const SelectItem = ({
  children,
  disabled,
  value,
}: ComponentProps<typeof SelectPrimitive['Item']>) => {
  return (
    <SelectPrimitive.Item
      disabled={disabled}
      value={value}
      className={cx([
        'relative flex items-center rounded-md px-8 py-2 text-sm font-medium text-gray-700 focus:bg-gray-100',
        'aria-disabled:opacity-50',
        'select-none focus:outline-none',
      ])}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

const SelectSeparator = () => {
  return <SelectPrimitive.Separator className="m-1 h-px bg-slate-200" />
}

/* eslint-disable fp/no-mutating-assign */
export const Select = Object.assign(SelectPrimitive.Root, {
  displayName: 'Select',
  // SubComponents:
  Content: SelectContent,
  Group: SelectPrimitive.Group,
  Icon: SelectIcon,
  Item: SelectItem,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  Value: SelectPrimitive.Value,
})
