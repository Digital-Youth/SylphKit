import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from '../src/Typographie/Text/Text';

export default {
  title: 'Typographie/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = args => (
  <Text {...args}>Text Component</Text>
);

export const Default = Template.bind({});
Default.args = {
  fontSize: 'md',
  color: 'black',
};
