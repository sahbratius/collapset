<script setup lang="ts">
import { uk } from '@nuxt/ui/locale'
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <UApp :locale="uk">
    <UError :error="{
        statusCode: error?.statusCode,
        statusMessage: 'Сторінки немає ☹️',
        message: 'Я дуже старався знайти сторінку, дивився скрізь де я міг побачити, але я її нажаль не знайшов ('
      }" />
  </UApp>
</template>