import * as RadixToast from '@radix-ui/react-toast';
import React,{ useEffect, useRef, useState } from 'react';
import { ToastRoot, ToastTitle,ToastDescription,ToastViewport,ToastAction } from './styles';
import { Button } from '../Button';
import { Text } from '../Text';

export interface ToastProps{
  title: string;
  description: string;
  altText: string;
}




export function Toast ({altText,description,title}:ToastProps) {




  return (
    <RadixToast.Provider swipeDirection="right">
      <Button 
      >
        Add to calendar
      </Button>

      <ToastRoot open={true}>
        <ToastTitle><Text>{title ?? ""}</Text></ToastTitle>
        <ToastDescription asChild>
          <Text  size="xs">{description ?? ""}</Text>


        </ToastDescription>
        <ToastAction asChild altText={altText ?? ""}>
        <Text>X</Text>
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </RadixToast.Provider>
  );
};





