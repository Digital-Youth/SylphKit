import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button/Button';

const meta: Meta = {
  title: 'Button',
    component: Button,
    argTypes: {
        children: {
          defaultValue: "Default Text"
      }
  }
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'contained',
    color: 'primary',
  size: 'large'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'outlined',
  color: 'secondary',
  size: 'small',
};
