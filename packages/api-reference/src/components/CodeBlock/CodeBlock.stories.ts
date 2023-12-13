import type { Meta, StoryObj } from '@storybook/vue3'

import CodeBlock from './CodeBlock.vue'

const meta: Meta<typeof CodeBlock> = {
  title: 'Example/CodeBlock',
  component: CodeBlock,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof CodeBlock>

export const Default: Story = {
  render: (args) => ({
    components: {
      CodeBlock,
    },
    setup() {
      return { args }
    },
    template: `
      <CodeBlock v-bind="args" />
    `,
  }),
  args: {
    value: `const foo = 42;\nconsole.log(foo);`,
    language: 'javascript',
  },
}
