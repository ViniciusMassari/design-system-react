import type { Meta, StoryObj } from '@storybook/react'

import { AvatarProps, Avatar } from '@vinicius-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ViniciusMassari.png',
    alt: 'Vinícius Massari',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export type Story = StoryObj<AvatarProps>

export const Primary: Story = {}
export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
