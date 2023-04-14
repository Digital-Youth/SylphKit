import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Form/Button/Button';



export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['text', 'contained', 'outlined'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['search', 'moon', 'search-2'],
      },
    },
  },
} as Meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Button',
  variant: 'text',
};

export const Contained = Template.bind({});
Contained.args = {
  children: 'Button',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Button',
  variant: 'outlined',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Search',
  variant: 'contained',
  color: '#1976d2',
  icon: 'search-2',
};
