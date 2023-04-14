import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, Props } from '../src/Form/CheckBox/CheckBox';

const meta: Meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
};

export default meta;

export const Default: Story<Props> = args => (
         <Checkbox {...args} label='terence' />
       );
