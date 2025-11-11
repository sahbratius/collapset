<template>
  <br />
  <MDC :value="value" />
</template>
<script setup>
const value = `
# Всі наші крафти
В цій таблиці ми згадаємо всі кастомні крафти, які є на нашому сервері.

|Предмет|Рецепт|
|-|-|
|Кольчужний шолом|![Image](/images/mechanics/crafts/1.webp)|
|Кольчужний нагрудник|![Image](/images/mechanics/crafts/2.webp)|
|Кольчужні наголінники|![Image](/images/mechanics/crafts/3.webp)|
|Кольчужні чоботи|![Image](/images/mechanics/crafts/4.webp)|
|Блок світла 15 рівня|![Image](/images/mechanics/crafts/5.webp)|
|Незерський кварт|![Image](/images/mechanics/crafts/6.webp)|
|Отруйна стріла|![Image](/images/mechanics/crafts/7.webp)|
|Камінь енду|![Image](/images/mechanics/crafts/8.webp)|

`
</script>