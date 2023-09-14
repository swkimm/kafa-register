<template>
  <div class="bg-black py-4 sm:py-8 w-full flex flex-col items-center">
    <div class="max-w-screen-xl rounded-2xl px-4 md:px-20 w-full text-start">
      <div class="text-slate-300 text-sm sm:text-base mb-0.5 sm:mb-1">
        {{ props.item.subtitle }}
      </div>
      <div class="text-white text-xl sm:text-2xl font-bold">{{ props.item.title }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  item: {
    type: Object as PropType<{
      title: string
      subtitle: string
    }>,
    required: true
  }
})
</script>
