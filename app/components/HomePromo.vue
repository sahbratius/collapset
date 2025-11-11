<template>
  <UPageHero headline="II вайп" title="Collapset — сервер, що починає свій шлях 🌍"
    description="Це український, політичний Minecraft сервер. Створений Максимом (Robnays), та іншими людьми які мені допомогали. Зі мною можна зв'язатися через Discord або Telegram (там однакові нікнейми). Дякую всім хто відвідав цей сайт 😁"
    orientation="horizontal">
    <img src="~/assets/images/promo.svg" alt="Пам'ятник в альтадорі, що з першого вайпу" class="h-full mx-auto my-0" />
    <template #links>
      <UModal title="Як грати на нашому сервері?">
        <UButton icon="i-lucide-arrow-right" size="xl" color="primary" label="Нумо грати!" variant="outline"
          class="cursor-pointer" @click="openModal" />
        <template #body>
          <div class="select-none">
            <ProseOl>
              <ProseLi>
                Прочитайте <ULink to="/rules" target="_blank">правила</ULink> і дотримуйтеся їх!
              </ProseLi>
              <ProseLi>
                Приєднайтеся, будь ласка до нашого Discord серверу. Ви можете приєднатися, натиснувши на логотип
                діскорда або
                <ULink to="https://discord.gg/FPD7xvBkcd" target="_blank">натисніть тут</ULink>
              </ProseLi>
              <ProseLi>
                Дізнайтеся які механіки має наш сервер на цьому сайті
              </ProseLi>
              <ProseLi>
                Запустіть <ProseStrong>Minecraft Java Edition</ProseStrong> версії <ProseCode>1.20.2</ProseCode> або
                вище
                та
                приєднайтеся через це IP:
                <UInput v-model="serverIp" readonly class="w-full font-mono"
                  :ui="{ icon: { trailing: { pointer: '' } } }">
                  <template #trailing>
                    <UButton :icon="copyIcon" :variant="isCopied ? 'soft' : 'ghost'"
                      :color="isCopied ? 'green' : 'gray'" :padded="false" @click="copyIp"
                      :aria-label="isCopied ? 'Скопійовано' : 'Копіювати IP'"
                      :title="isCopied ? 'Скопійовано!' : 'Копіювати IP'" />
                  </template>
                </UInput>
              </ProseLi>
            </ProseOl>
          </div>
        </template>
      </UModal>
    </template>
  </UPageHero>
</template>
<script setup>
const isModalOpen = ref(false)
const openModal = () => isModalOpen.value = true

const toast = useToast();
const serverIp = ref('collapset.minecraftjoin.xyz');
const isCopied = ref(false);
const copyIcon = computed(() =>
  isCopied.value ? 'i-heroicons-check' : 'i-heroicons-clipboard-document'
);

const copyIp = async () => {
  if (!navigator.clipboard) {
    toast.add({
      title: 'Помилка',
      description: 'API буфера обміну недоступний.',
      icon: 'i-heroicons-exclamation-triangle',
      color: 'red'
    });
    return;
  }

  try {
    await navigator.clipboard.writeText(serverIp.value);

    isCopied.value = true;

    setTimeout(() => {
      isCopied.value = false;
    }, 2000);

    toast.add({
      title: 'Скопійовано IP!',
      icon: 'i-heroicons-clipboard-document-check',
      timeout: 2000
    });

  } catch (err) {
    console.error('Не вдалося скопіювати текст:', err);
    toast.add({
      title: 'Помилка копіювання',
      description: 'Не вдалося скопіювати IP-адресу.',
      icon: 'i-heroicons-exclamation-triangle',
      color: 'red'
    });
  }
};
</script>
