import React, { ReactNode, HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  size?:
    | '6xl'
    | '5xl'
    | '4xl'
    | '3xl'
    | '2xl'
    | 'xl'
    | 'lg'
    | 'md'
    | 'sm'
    | 'xs';
  color?: string;
}

export const Text = ({
  children,
  size = 'md',
  color = 'inherit',
  ...props
}: TextProps) => {
  let fontSize: string;

  switch (size) {
    case '6xl':
      fontSize = '4rem';
      break;
    case '5xl':
      fontSize = '3rem';
      break;
    case '4xl':
      fontSize = '2.25rem';
      break;
    case '3xl':
      fontSize = '1.875rem';
      break;
    case '2xl':
      fontSize = '1.5rem';
      break;
    case 'xl':
      fontSize = '1.25rem';
      break;
    case 'lg':
      fontSize = '1.125rem';
      break;
    case 'sm':
      fontSize = '0.875rem';
      break;
    case 'xs':
      fontSize = '0.75rem';
      break;
    default:
      fontSize = '1rem';
      break;
  }

  return (
    <span
      style={{
        fontSize: fontSize,
        color: color,
      }}
      {...props}
    >
      {children}
    </span>
  );
};
