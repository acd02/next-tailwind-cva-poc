import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

type Props = {
  className?: string
}

const classesBloat = [
  'ZNCaTA7Drz5gnsCBSEfW',
  'MLR8BwJBSCwHDj4HrjWi',
  'cZ0nU5LiyRWWrKCEj7Al',
  'LeL0e3Hu5tipcdCGvHiy',
  '40fHAZ2595Lb8RArh2nl',
  'Pn6tEwxTEfhTBRxGmQMR',
  'Ph3EvZQTwgQnaCRdkg59',
  'NOClgrxJLJqje9waUYUs',
  'akOIUF33gk9K50wfj8AX',
  'P0Or33K2HU1uu5X3qqEY',
  'Hr2VARQIKRjQQuPrBcNS',
  'N0aZcIeDUzRiSoRPqXav',
  'x3bTVa8ow4DKQtUQx4Mv',
  'Cx73t0I5oxvLFltN2nbE',
  'tJ3kHEqkdpH6DV4Y64nU',
  'w9rtGMhAUu2j6bTolspv',
  'eMnJtDtCalZzNGH1yaiP',
  'ksgpRGy5TCMjZ38ZRmLW',
  'LMqGgAqqjUKizuqG0zH0',
  'mgGD0oHpYLlSLfabnIrn',
  'X2RKuk58UbghRmSKalc0',
  'FkrkosAy2xvu1qztR1Bj',
  'qZZ9i94v5aFrJNLjr8Kc',
  'Wy8V9n5NGx87s9miwdqS',
  'Wpz5KuIt8tMsdgf0yf2q',
  'vQedEze0e20dYjzVh4Ot',
  '4jI9GOAT4GYi2vcwAXm3',
  'pFgpvoY8kgdRd7HnNty3',
  'd2kvfDyRzbdj7EkZA3ns',
  'GDEoj5HR2yuQRqPpQUMi',
  'B0j2BxOVQFQuJD2zLTtv',
  'Vuxnbe9QAdm2VNZYkdWv',
  'ZrWeZ4WNoJa2zRcd14QA',
  'nB4k8Fd10Zv18sjDU6fY',
  'lKmE5mcM1F3zm7mdmXwt',
  'jLoRoW6KAZ17HtDbmUSD',
  '8X7336hvjUkdj2SJVGle',
  'NHu8e3xDVoKmRevAqI6D',
  'Da5SbAMKSnQ8eaggLTIg',
  'iHlcCVY435g7EEltwjRG',
]

const button = cva(
  [
    'font-semibold',
    'border',
    'rounded',
    'hover:transition-colors',
    'hover:duration-100',
    ...classesBloat,
  ],
  {
    variants: {
      disabled: {
        true: ['opacity-50', 'cursor-not-allowed'],
      },
      intent: {
        primary: [
          'bg-primaries-first',
          'text-main-text',
          'border-transparent',
          'hover:bg-primaries-second',
        ],
        secondary: [
          'bg-secondaries-first',
          'text-main-text',
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
        className: 'border-4 border-pink-500',
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
