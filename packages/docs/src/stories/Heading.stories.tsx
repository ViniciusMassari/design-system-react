import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@ignite-ui/react/'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export type Story = StoryObj<HeadingProps>

export const Primary: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, heading sempre será `h2`, porém podemos alterar isto com a propriedade `as`',
      },
    },
  },
}
