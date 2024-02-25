import type { Meta, StoryObj } from '@storybook/react'

import { Toast, ToastProps } from '@vinicius-ui/react'

export default {
  title: 'Data Display/Toast',  
  component: Toast,
  args: {
    title:"Agendamento Realizado",
  description:" Quarta-feira, 23 de Outubro às 16h"
  },
 
} as Meta<ToastProps>

export type Story = StoryObj<ToastProps>

export const Primary: Story = {}
