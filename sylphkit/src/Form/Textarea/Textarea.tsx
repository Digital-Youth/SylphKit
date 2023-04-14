import React, { TextareaHTMLAttributes } from 'react';

export interface Props
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  placeholder?: string;
  size?: number;
}

export const Textarea = ({ placeholder, size, ...props }: Props) => {
  const sizeInput = `${size}px`;

  return (
    <label>
      <textarea
        style={{
          borderRadius: '5px',
          margin: 5,
          padding: 5,
          width: sizeInput,
          border: '1px solid',
        }}
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
};
