<template>
  <div id="app">
    <div class="header">

    </div>

    <div class="tabs">
      <button @click="selectedComponent='SummaryTable'" :class="{ active: selectedComponent === 'SummaryTable' }">Сводная таблица</button>
      <button @click="selectedComponent='DataView'" :class="{ active: selectedComponent === 'DataView' }">Просмотр данных</button>
      <button @click="selectedComponent='WaypointSettings'" :class="{ active: selectedComponent === 'WaypointSettings' }">Настройка ворот</button>
      <button @click="selectedComponent='MarkSettings'" :class="{ active: selectedComponent === 'MarkSettings' }">Настройка меток</button>
    </div>
    <div>
      <component :is="selectedComponent" />
    </div>
  </div>

</template>

<script>
  import SummaryTable from './components/SummaryTable.vue';
  import DataView from './components/DataView.vue';
  import WaypointSettings from './components/WaypointSettings.vue';
  import MarkSettings from './components/MarkSettings.vue';

  const tom = { name: 'Tm', age: 36 };

  export default {

    components: {
      SummaryTable,
      DataView,
      WaypointSettings,
      MarkSettings
    },
    data() {
      return { 
        selectedOption: 'summary', 
        selectedComponent: 'SummaryTable'
      }
    },

    // тут делается всякое в момент монтирования компонента в приложение
    mounted() {

    },
    // тут всякие методы которые можно вставить в разметку
    methods: {

    }
  }
</script>

<style scoped>
  .header {
    width: 100vw;
    height: 5vh;
    background-color: var(--primary-color-0);
  }

  .tabs {
    display: flex;
    background-color: var(--primary-color-0);
    justify-content: center;
  }

  button {
    padding-left: 20px;
    padding-right: 20px;
    height: 5vh; /* Высота кнопки 20% от высоты экрана */
    border: none;
    background-color: var(--primary-color-0);
    color: var(--inv-text-color);
    cursor: pointer;
    border-radius: 10px;
    font-size: 16px;
  }

  button.active {
    background-color: var(--primary-color-2);
  }

  button:hover {
    background-color: var(--primary-color-1)
  }
</style>
