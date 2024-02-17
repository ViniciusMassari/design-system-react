import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },
})
export type ButtonProps = ComponentProps<typeof Button>
