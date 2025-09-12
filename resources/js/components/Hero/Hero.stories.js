import { fn } from 'storybook/test';
import { Hero } from './Hero';

export default {
  title: 'Example/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};


export const Default = {
  args: {
  },
};
