import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxGroup } from './CheckboxGroup'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Checkbox',
  component: CheckboxGroup,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof CheckboxGroup>

export const CheckboxGroupStory: Story = {
  name: 'Checkbox',
  args: {
    label: 'My Checkbox'
  },
  render: args => {
    const [checked, setIsChecked] = useState(false)

    return <CheckboxGroup checked={checked} onChange={setIsChecked} {...args} />
  }
}
