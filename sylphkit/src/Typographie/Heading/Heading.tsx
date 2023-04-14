import React, { ElementType, HTMLAttributes } from 'react';

export interface Props
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'size'> {
  as?: ElementType;
  size?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';


}

export const Heading = ({
  as: Tag = 'h2',
  size = 'md',
  children,

  ...props
}: Props) => {
  let fontSize;
  switch (size) {
    case '4xl':
      fontSize = '2.5rem';
      break;
    case '3xl':
      fontSize = '2rem';
      break;
    case '2xl':
      fontSize = '1.75rem';
      break;
    case 'xl':
      fontSize = '1.5rem';
      break;
    case 'lg':
      fontSize = '1.25rem';
      break;
    case 'md':
      fontSize = '1rem';
      break;
    case 'sm':
      fontSize = '0.875rem';
      break;
    case 'xs':
      fontSize = '0.75rem';
      break;
    default:
      fontSize = '1rem';
  }

  return (
    <Tag style={{ fontSize }} {...props}>
      {children}
    </Tag>
  );
};
