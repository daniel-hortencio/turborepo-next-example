import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'
import Icon from '../Icon'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>

export const PrimaryLargeButtonStory: Story = {
  name: 'Primary Large Button',
  args: {
    size: 'large',
    text: 'Primary Large Button',
    color: 'primary'
  }
}
export const PrimaryLowButtonStory: Story = {
  name: 'Primary Low Button',
  args: {
    size: 'large',
    height: 'low',
    text: 'Primary Low Button',
    color: 'primary'
  }
}
export const PrimarySmallButtonStory: Story = {
  name: 'Primary Small Button',
  args: {
    size: 'small',
    text: <Icon name="CheckFat" />,
    color: 'primary'
  }
}

export const SecondaryLargeButtonStory: Story = {
  name: 'Secondary Large Button',
  args: {
    size: 'large',
    text: 'Secondary Large Button',
    color: 'secondary'
  }
}
export const SecondaryLowButtonStory: Story = {
  name: 'Secondary Low Button',

  args: {
    size: 'large',
    height: 'low',
    text: 'Secondary Low Button',
    color: 'secondary'
  }
}
export const SmallSecondaryButtonStory: Story = {
  name: 'Small Secondary Button',
  args: {
    size: 'small',
    text: <Icon name="CheckFat" />,
    color: 'secondary'
  }
}

export const DangerLargeButtonStory: Story = {
  name: 'Danger Large Button',
  args: {
    size: 'large',
    text: 'Danger Large Button',
    color: 'danger'
  }
}
export const DangerLowButtonStory: Story = {
  name: 'Danger Low  Button',
  args: {
    size: 'large',
    height: 'low',
    text: 'Danger Low Button',
    color: 'danger'
  }
}
export const DangerSmallButtonStory: Story = {
  name: 'Danger Small Button',
  args: {
    size: 'small',
    text: <Icon name="CheckFat" />,
    color: 'danger'
  }
}
