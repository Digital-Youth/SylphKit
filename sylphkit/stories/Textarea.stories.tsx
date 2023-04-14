import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Textarea, Props } from '../src/Form/Textarea/Textarea';

export default {
  title: 'Form/Textarea',
  component: Textarea,
} as Meta;

export const Default: Story<Props> = args => (
  <Textarea {...args} placeholder="Terence Hill" />
);
