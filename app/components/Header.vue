<template>
  <UHeader>
    <template #title>
      <img
        src="/favicon.ico"
        alt="Collapset logo" class="h-8 w-auto rounded-lg" />
      Collapset
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <ToolTips />
    </template>
  </UHeader>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed < NavigationMenuItem[] > (() => [
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
    to: 'http://143.20.155.101:25790'
  },
  {
    label: 'Механіки',
    to: '/mechanics',
    active: route.path.startsWith('/mechanics')
  }
])
</script>