import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, Props } from '../src/CheckBox/CheckBox';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

export const Default: Story<Props> = args => (
         <Checkbox {...args} label='terence' />
       );
