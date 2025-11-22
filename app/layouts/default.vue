<script setup lang="ts">
import { uk } from '@nuxt/ui/locale'
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <ClientOnly>
	  <UApp :locale="uk">
		<Loader />
		<Header />
		<UMain>
		  <UContainer>
			<slot />
			<SpeedInsights />
			<Analytics />
		  </UContainer>
		</UMain>
		<USeparator />
		<Footer />
	  </UApp>
  </ClientOnly>
</template>
