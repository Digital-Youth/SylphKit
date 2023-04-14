import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Radio, Props } from '../src/Radio/Radio';

const meta: Meta = {
  title: 'Radio',
  component: Radio,
};

export default meta;

export const Default: Story<Props> = args => (
  <Radio {...args} label="Terence" />
);
