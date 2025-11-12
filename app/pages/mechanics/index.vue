<template>
    <UPageSection title="Механіки нашого сервера ✨">
        <UPageColumns>
            <UBlogPost title="Класи"
                description="Ми відрізняємося від всіх українських майнкарфт політичних серверів тим, що ви можете вибрати клас і його прокачувати! Натисніть щоб більше про них дізнатися"
                image="/images/mechanics/klas-voyin.png" to="/mechanics/class" />
            <UBlogPost title="Фракції"
                description="На нашому сервері замість Towny ми використовуємо свій плагін на фракції! Щоб дізнатися як ним користуватися, натисніть тут."
                image="/images/mechanics/fractions.png" to="/mechanics/fractions" />
            <UBlogPost title="Діжки замість шалкерів"
                description="Ми вирішили що діжки будуть функціонувати так само як шалкери. Вам не доведеться іти в Енд!"
                image="/images/mechanics/barrel.jpg" />
            <UBlogPost title="Команда /sit" description="Тепер ви можете сісти!"
                image="/images/mechanics/sit.jpeg" />
            <UBlogPost title="Плагін Brewery"
                description="Ви можете варити свої улюблені напої завдяки чудовому плагіну «Brewery»! При кліку, вас перекине на інструкцію використання того плагіна"
                image="/images/mechanics/brewery.webp"
                to="https://github.com/DieReicheErethons/Brewery/wiki/Использование" target="_blank" />
            <UBlogPost title="Кастомні крафти" description="Також ми маємо кастомні крафти!"
                image="/images/mechanics/crafts.webp" to="/mechanics/crafts" />
        </UPageColumns>
    </UPageSection>
</template>
<script>
import { useHead } from 'nuxt/app';

useHead({
   title: "Collapset | Механіки",
   meta: [
      { name: "description", content: "Тут ви дізнаєтеся всі механіки, які наш сервер має на даний момент. Дізнайтеся їх тут!" },
      { property: "og:title", content: "Collapset | Механіки" },
      { property: "og:description", content: "Тут ви дізнаєтеся всі механіки, які наш сервер має на даний момент. Дізнайтеся їх тут!" },
      { property: "og:url", content: "https://collapset.vercel.app/mechanics" },
      { property: "og:type", content: "website" },
   ],
})
</script>
