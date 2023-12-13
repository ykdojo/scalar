<script lang="ts" setup>
import { computedAsync } from '@vueuse/core'
import { getHighlighter } from 'shikiji'

const props = defineProps<{
  value?: string
  language: string
}>()

const highlightedCode = computedAsync(
  async () => {
    const shiki = await getHighlighter({
      themes: ['github-dark'],
      langs: [props.language],
    })

    return shiki.codeToHtml(props.value, {
      lang: props.language,
      theme: 'github-dark',
    })
  },
  // initial state
  `<pre><code>${props.value}</code></pre>`,
)
</script>

<template>
  <div
    class="code-block"
    v-html="highlightedCode" />
</template>

<style scoped>
.code-block >>> pre {
  white-space: pre-wrap;
}
.code-block >>> pre:before {
  counter-reset: listing;
}
.code-block >>> pre code .line {
  counter-increment: listing;
  line-height: 1.4em;
}
.code-block >>> pre code .line:before {
  content: counter(listing);
  display: inline-block;
  width: 3em;
  padding-right: 1em;
  padding-left: auto;
  margin-left: auto;
  text-align: right;
  color: var(--theme-color-3, var(--default-theme-color-3));
}
</style>
