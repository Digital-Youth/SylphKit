import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props } from '../src/Input/Input';

const meta: Meta = {
  title: 'Input',
  component: Input,
};

export default meta;

export const Default: Story<Props> = args => (
         <Input {...args} placeholder="Terence" />
       );
