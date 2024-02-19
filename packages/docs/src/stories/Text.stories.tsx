import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react/'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, voluptates doloribus? Odio suscipit ipsam sed, dolore quod delectus natus non vero quo, dicta, ex harum at. Quae corporis consequatur voluptas?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export type Story = StoryObj<TextProps>

export const Primary: Story = {}
export const CustomTag: Story = {
  args: {
    children: 'strong text',
    as: 'strong',
  },
}
