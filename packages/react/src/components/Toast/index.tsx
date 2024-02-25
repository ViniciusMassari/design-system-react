import * as React from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import {ToastAction,ToastDescription,ToastRoot,ToastTitle,ToastViewport} from './styles'
import { Button } from '../Button';
import { Text } from '../Text';

export interface ToastProps{
  title:string;
  description:string;
}

export const Toast = ({description,title}:ToastProps) => {


  return (
    <RadixToast.Provider swipeDirection="right">
      <ToastRoot open={true}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription asChild>
          <Text  size="xs">
        {description}

          </Text>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
         <Text>X</Text>
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </RadixToast.Provider>
  );
};


function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date:Date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

