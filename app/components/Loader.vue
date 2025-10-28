<template>
  <div v-if="isLoading" :class="{
    'fixed inset-0 z-[9999] backdrop-blur-sm flex items-center justify-center transition-opacity duration-300': true,
    'bg-zinc-950/75': true
  }" aria-modal="true" role="dialog" aria-busy="true">

    <div :class="{ 'p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-2xl': true }">

      <div class="flex flex-col items-center">

        <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
          ЗАВАНТАЖЕННЯ
        </h3>

        <UProgress :value="progressValue" :max="100" class="w-80" color="primary" indicator />

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const isLoading = ref(false);
const progressValue = ref(0);
const nuxtApp = useNuxtApp();

onMounted(() => {
  let interval: NodeJS.Timeout | null = null;

  nuxtApp.hook('page:start', () => {
    isLoading.value = true;
    progressValue.value = 0;

    interval = setInterval(() => {
      if (progressValue.value < 90) {
        progressValue.value += Math.random() * 5;
        if (progressValue.value > 90) progressValue.value = 90;
      }
    }, 100);
  });

  nuxtApp.hook('page:finish', () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    progressValue.value = 100;

    setTimeout(() => {
      isLoading.value = false;
      progressValue.value = 0;
    }, 500);
  });

  nuxtApp.hook('page:error', () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    isLoading.value = false;
  });
});
</script>