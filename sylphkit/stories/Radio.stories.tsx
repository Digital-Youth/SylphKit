import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Radio, Props } from '../src/Form/Radio/Radio';

const meta: Meta = {
  title: 'Form/Radio',
  component: Radio,
};

export default meta;

export const Default: Story<Props> = args => (
  <Radio {...args} label="Terence" />
);
