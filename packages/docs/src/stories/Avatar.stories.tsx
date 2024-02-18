import type { Meta, StoryObj } from '@storybook/react'

import { AvatarProps, Avatar } from '@ignite-ui/react/'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ViniciusMassari.png',
    alt: 'Vinícius Massari',
  },
} as Meta<AvatarProps>

export type Story = StoryObj<AvatarProps>

export const Primary: Story = {}
export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
