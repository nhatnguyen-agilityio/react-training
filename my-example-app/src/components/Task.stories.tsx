import { Meta, StoryObj } from '@storybook/react';
import Task from './Task';
import { fn } from '@storybook/test';

export const ActionsData = {
    onArchiveTask: fn(),
    onPinTask: fn(),
};

const meta: Meta<typeof Task> = {
    component: Task,
    title: 'Task',
    tags: ['autodocs'],
    excludeStories: /.*Data$/,
};

export default meta;
type Story = StoryObj<typeof Task>;
export const Default: Story = {
    args: {
        task: {
            id: '1',
            title: 'Task 1',
            state: 'TASK_INBOX',
        },
        ...ActionsData,
    },
}

export const Pinned: Story = {
    args: {
        task: {
            id: '2',
            title: 'Task 2',
            state: 'TASK_PINNED',
        },
        ...ActionsData,
    },
};
export const Archived: Story = {
    args: {
        task: {
            id: '3',
            title: 'Task 3',
            state: 'TASK_ARCHIVED',
        },
        ...ActionsData,
    },
};