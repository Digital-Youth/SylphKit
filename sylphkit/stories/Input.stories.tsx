import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props } from '../src/Form/Input/Input';

const meta: Meta = {
  title: 'Form/Input',
  component: Input,
};

export default meta;

export const Default: Story<Props> = args => (
         <Input {...args} placeholder="Terence" />
       );
