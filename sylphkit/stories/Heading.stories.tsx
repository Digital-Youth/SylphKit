import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading, Props } from '../src/Typographie/Heading/Heading';



export default {
  title: 'Typographie/Heading',
  component: Heading,
  argTypes: {
    size: {
      options: ['4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<Props> = args => <Heading {...args} />;

export const Size4xl = Template.bind({});
Size4xl.args = {
  as: 'h1',
  size: '4xl',
  children: '(4xl) In love with React & Next',

};

export const Size3xl = Template.bind({});
Size3xl.args = {
  as: 'h2',
  size: '3xl',
  children: '(3xl) In love with React & Next',

};

export const Size2xl = Template.bind({});
Size2xl.args = {
  as: 'h2',
  size: '2xl',
  children: '(2xl) In love with React & Next',
};

export const SizeXl = Template.bind({});
SizeXl.args = {
  as: 'h3',
  size: 'xl',
  children: '(xl) In love with React & Next',
};

export const SizeLg = Template.bind({});
SizeLg.args = {
  as: 'h4',
  size: 'lg',
  children: '(lg) In love with React & Next',
};

export const SizeMd = Template.bind({});
SizeMd.args = {
  as: 'h5',
  size: 'md',
  children: '(md) In love with React & Next',
};

export const SizeSm = Template.bind({});
SizeSm.args = {
  as: 'h6',
  size: 'sm',
  children: '(sm) In love with React & Next',
};

export const SizeXs = Template.bind({});
SizeXs.args = {
  as: 'h6',
  size: 'xs',
  children: '(xs) In love with React & Next',
};
