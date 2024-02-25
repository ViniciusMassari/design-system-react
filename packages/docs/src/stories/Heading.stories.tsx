import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@vinicius-ui/react'

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
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
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
