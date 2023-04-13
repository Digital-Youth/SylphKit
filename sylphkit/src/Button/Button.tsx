import React, { ReactNode, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({
  children,
  variant,
  color = 'primary',
  size = 'medium',
  ...props
}: Props) => {
  let backgroundColor, textColor, borderColor;

  if (variant === 'contained') {
    backgroundColor = color === 'primary' ? '#1976d2' : '#DF0F0F';
    textColor = 'white';
  } else if (variant === 'outlined') {
    backgroundColor = 'transparent';
    textColor = color === 'primary' ? '#1976d2' : '#DF0F0F';
    borderColor = color === 'primary' ? '#1976d2' : '#DF0F0F';
  }
  else {
    backgroundColor = 'transparent'
    textColor = color === 'primary' ? '#1976d2' : '#DF0F0F';
  }

  let padding;

  if (size === 'small') {
    padding = '8px 16px';
  } else if (size === 'large') {
    padding = '16px 32px';
  } else {
    padding = '12px 24px';
  }

  return (
    <button
      style={{
        borderRadius: '10px',
        padding: padding,
        fontSize: '1rem',
        fontWeight: 'bold',
        backgroundColor: backgroundColor,
        color: textColor,
        border: borderColor ? `2px solid ${borderColor}` : 'none',
        // boxShadow:
        //   variant === 'outlined' ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 2px 8px 0px',
        cursor: 'pointer',
        
      }}
      {...props}
    >
      {children}
    </button>
  );
};
