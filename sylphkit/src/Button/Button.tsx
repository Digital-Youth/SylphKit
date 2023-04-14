import React, { ReactNode, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'text' | 'contained' | 'outlined';
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({
  children,
  variant,
  color = '#1976d2',
  size = 'medium',
  className = '',
  ...props
}: Props) => {
  let backgroundColor, textColor, borderColor;

  if (variant === 'contained') {
    backgroundColor = color;
    textColor = 'white';
  } else if (variant === 'outlined') {
    backgroundColor = 'transparent';
    textColor = color;
    borderColor = color;
  } else {
    backgroundColor = 'transparent';
    textColor = color;
  }

  let padding;

  if (size === 'small') {
    padding = '8px 16px';
  } else if (size === 'large') {
    padding = '16px 32px';
  } else {
    padding = '12px 24px';
  }

  const classNames = `rounded-md font-semibold transition-colors focus:outline-none focus:shadow-outline 
    ${className}`;

  return (
    <button
      style={{
        borderRadius: '5px',
        padding: padding,
        fontSize: '1rem',
        fontWeight: 'bold',
        backgroundColor: backgroundColor,
        color: textColor,
        border: borderColor ? `1px solid ${borderColor}` : 'none',
        cursor: 'pointer',
      }}
      className={classNames}
      {...props}
    >
      {children}
    </button>
  );
};
