<template>
  <div class="wrapper">
    <AppHeader/>
    <div class="content">
      <div class="content__inner">
        <slot/>
      </div>
      <div class="content__sidebar">
        <p>Здесь текст сайдбара с интересной информацией.</p>
        <p>История звукового и цветного кино начинается в начале XX века. Первые эксперименты с цветом в кино были проведены путём ручной раскраски кадров, как это делал Жорж Мельес. Однако с появлением длинных фильмов и массового производства в 1910-х годах, ручная раскраска была заменена механизированными процессами тонирования и окрашивания</p>
        <p>В то же время, звук в кино появился в эпоху немого кино, когда музыка исполнялась вживую в кинотеатрах. Синхронизированный звук впервые был представлен в 1920-х годах с системой Vitaphone, которая использовала отдельные звуковые диски. К началу 1930-х годов большинство полнометражных фильмов уже демонстрировались со звуком, а к середине 1930-х годов некоторые из них были и в цвете</p>
      </div>
    </div>
    <AppFooter />
</div>
</template>



<script>
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue'; 

export default {
  name: 'SideBarLayout',
  components: { AppHeader, AppFooter }
}
</script>
<style lang="scss" scoped>
  .wrapper {
    width: 100vw;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    padding: 40px 0 120px;
    flex-grow: 1;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 40px;

    &__sidebar {
      display: flex;
      flex-direction: column;
      gap: 16px;
      background: #15202C;
      border-radius: 8px;
      padding: 16px;
      height: fit-content;
      min-height: 370px;
    }
  }
</style>