import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@vinicius-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando elemento box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export type Story = StoryObj<BoxProps>

export const Primary: Story = {}
