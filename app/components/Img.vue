<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Зображення',
  },
  width: [String, Number],
  height: [String, Number],
})
defineOptions({
  inheritAttrs: false,
})
</script>
<template>
  <NuxtImg v-bind="$attrs" v-slot="{ isLoaded, imgAttrs, src }" class="image-wrapper" :placeholder="false">
    <USkeleton v-if="!isLoaded" class="h-full w-full" />

    <img v-else v-bind="imgAttrs" :src="src">
  </NuxtImg>
</template>