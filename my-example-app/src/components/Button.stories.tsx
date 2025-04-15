import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button.tsx';

const meta: Meta<typeof Button> = {
  title: 'MyComponents/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: '#353' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};
