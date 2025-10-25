<script setup lang="ts">
import { uk } from '@nuxt/ui/locale'
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
  <UApp :locale="uk">
    <UBanner id="second wipe" title="II вайп буде 25 жовтня о 19:00 за київським часом!" close />
    <Header />
    <UMain>
      <UContainer>
        <slot />
        <SpeedInsights/>
      </UContainer>
    </UMain>
    <USeparator />
    <Footer />
  </UApp>
</template>