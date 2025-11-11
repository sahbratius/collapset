<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © MC сервер "Collapset" {{ new Date().getFullYear() }}</p>
    </template>

    <template #right>
      <UButton color="neutral" variant="ghost" to="https://youtube.com/@collapsetms?si=GrlT4KjwYytatOxd" target="_blank"
        icon="i-simple-icons-youtube" aria-label="YouTube" />
      <UButton color="neutral" variant="ghost" to="https://tiktok.com/@collapset1" target="_blank"
        icon="i-simple-icons-tiktok" aria-label="TikTok" />
      <UButton color="neutral" variant="ghost" to="https://discord.gg/FPD7xvBkcd" target="_blank"
        icon="i-simple-icons-discord" aria-label="Discord" />
    </template>
  </UFooter>
</template>
