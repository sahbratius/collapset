<template>
  <UPageSection title="Донат 💰" description="Через донат ви можете розблокувати команди. Донати видаються лише на один вайп.">
    <UPricingTable :tiers="tiers" :sections="section" />
  </UPageSection>
  <!-- <div id=" paymentModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="productTitle"></h2>
        <p id="productPrice"></p>
        <p>Реквізити для оплати:</p>
        <p><strong>UA313220010000026200347356427</strong></p>
        <p>В оплаті напишіть свій нікнейм та послугу <b>можете написати в личку Robnays</b></p>
      </div>
      </div> -->
</template>
<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
   title: "Collapset | Донат",
   meta: [
      { name: "description", content: "Якщо ви хочете мати доступ до ще більше можливостей, на нашому політичному сервері, то натисніть тут!" },
      { property: "og:title", content: "Collapset | Донат" },
      { property: "og:description", content: "Якщо ви хочете мати доступ до ще більше можливостей, на нашому політичному сервері, то натисніть тут!" },
      { property: "og:url", content: "https://collapset.vercel.app/donate" },
      { property: "og:type", content: "website" },
   ],
})
  
const tiers = ref([
  {
    id: 'voyin',
    title: 'Воїн',
    price: '49₴',
    button: { label: 'Купити' }
  },
  {
    id: 'legioner',
    title: 'Легіонер',
    price: '99₴',
    button: { label: 'Купити' }
  },
  {
    id: 'landsknet',
    title: 'Ландскнехт',
    price: '149₴',
    button: { label: 'Купити' }
  },
  {
    id: 'diadoh',
    title: 'Діадох',
    price: '199₴',
    button: { label: 'Купити' }
  },
  {
    id: 'regent',
    title: 'Регент',
    price: '499₴',
    button: { label: 'Купити' }
  },
  {
    id: 'imperator',
    title: 'Імператор',
    price: '699₴',
    button: { label: 'Купити' }
  },
])
const section = ref([
  {
    title: 'Команди що розблоковуються',
    features: [
      {
        title: '/afk - бути в АФК',
        tiers: { voyin: true, legioner: true, landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/ext - погасити себе',
        tiers: { voyin: true, legioner: true, landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/feed - стати ситим',
        tiers: { voyin: true, legioner: true, landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/сlear - очистити свій інвертар',
        tiers: { voyin: true, legioner: true, landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/suicide - зробити собі суїцид',
        tiers: { voyin: true, legioner: true, landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/hat - вдягнути предмет на голову',
        tiers: { voyin: true, legioner: true, landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/workbench - скористатися верстаком',
        tiers: { voyin: true, legioner: true, landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/near - гравці, що знаходяться неподалік від вас',
        tiers: { legioner: true, landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: "/heal - повністю вилікуватися",
        tiers: { legioner: true, landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/repair - відремонтувати предмет, що тримаєте в руці',
        tiers: {landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/ec - віртуальна скриня Енду',
        tiers: { landsknet: true, diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/tpa - запрошення на телепортацію',
        tiers: { diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/tpahere - запрошення на телепортацію до себе',
        tiers: { diadoh: true, regent: true, imperator: true, }
      },
      {
        title: '/ffly - політ в фракції',
        tiers: { regent: true, imperator: true, }
      },
      {
        title: 'Дозвіл на те, щоб сховатися',
        tiers: { regent: true, imperator: true, }
      },
      {
        title: '/seen - дізнатися інформацію про гравця, коли ввостанє приєднався',
        tiers: { imperator: true, }
      },
      {
        title: '/head - дати голову гравця',
        tiers: { imperator: true, }
      },
      {
        title: '/pos - точне місцезнаходження гравця',
        tiers: { imperator: true, }
      },
    ]
  }
])
</script>
