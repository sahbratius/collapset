<template>
  <UHeader :links="items">
    <template #title>
      <img src="/favicon.ico" alt="Collapset logo" class="h-8 w-auto rounded-lg" />
      <span class="font-bold ml-2">Collapset</span>
    </template>

    <UNavigationMenu :items="items" />

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>

    <template #right>
      <!-- <UColorModeButton /> -->
      <UButton color="neutral" variant="ghost" to="https://youtube.com/@collapsetms?si=GrlT4KjwYytatOxd" target="_blank"
        icon="i-simple-icons-youtube" aria-label="YouTube" />
      <UButton color="neutral" variant="ghost" to="https://tiktok.com/@collapset1" target="_blank"
        icon="i-simple-icons-tiktok" aria-label="TikTok" />
      <UButton color="neutral" variant="ghost" to="https://discord.gg/FPD7xvBkcd" target="_blank"
        icon="i-simple-icons-discord" aria-label="Discord" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Головна',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'Правила',
    to: '/rules',
    active: route.path.startsWith('/rules')
  },
  {
    label: 'Донат',
    to: '/donate',
    active: route.path.startsWith('/donate')
  },
  {
    label: 'Мапа',
    to: 'http://ger-01-p.leavehosting.com:29016/',
    external: true
  },
  {
    label: 'Механіки',
    to: '/mechanics',
    active: route.path.startsWith('/mechanics')
  }
])
</script>
