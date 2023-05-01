import type { Meta, StoryObj } from '@storybook/react';

import { BoeButton } from './BoeButton';
import React from 'react';

const meta: Meta<typeof BoeButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'BoeButton',
  component: BoeButton,
};

export default meta;

type Story = StoryObj<typeof BoeButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <BoeButton label="A Button" />,
};
