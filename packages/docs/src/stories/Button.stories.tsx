import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
}

export default meta
type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'cancel',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}
export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo passo <ArrowRight weight="bold" />
      </>
    ),
  },
}
