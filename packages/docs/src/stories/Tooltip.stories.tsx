import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps} from '@vinicius-ui/react'


export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    content:"21 de outubro - Indisponível",
    children: 
      <div style={{width:"50px", height:"50px", background:"#393939", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff"}}>21</div>
 
  },
  // argTypes: {
  //   children: {
  //     control: {
  //       type: null,
  //     },
  //   },
  // },
} as Meta<TooltipProps>

export type Story = StoryObj<TooltipProps>

export const Primary: Story = {}
