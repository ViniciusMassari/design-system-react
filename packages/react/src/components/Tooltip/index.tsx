import * as RadixTooltip from '@radix-ui/react-tooltip';
import { styled, keyframes } from '@stitches/react';
import { ReactNode } from 'react';
import {TooltipArrow,TooltipContent} from './styles'

export interface TooltipProps{
  content: string;
  children: ReactNode
}

export const Tooltip = ({content,children}: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
        
      {children}          
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};




