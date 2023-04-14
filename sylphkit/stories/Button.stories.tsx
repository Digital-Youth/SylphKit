import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button/Button';



const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
          defaultValue: "Default Text"
      },
    color: {
      control: 'color',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  variant: 'contained',
  color: "#000000"
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Hello',
  variant: 'outlined',


};
