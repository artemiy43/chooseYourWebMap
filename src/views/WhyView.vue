<template>
  <main class="main">
    <section class="section">
      <h1 class="section--title">Что такое веб-карта?</h1>
      <div class="section--container">
        <!-- <div class="map right-border" ref="chartdiv"></div> -->
        <Map />
        <div class="section--text_container">
          Веб-карта - это представление Земной поверхности и географических
          объектов на ней в браузере. Веб-карты можно разделить на статичные и
          динамические (интерактивные). Интерактивные карты используют слои, то
          есть представления определённых наборов данных в виде точек, линий,
          фигур и других объектов, с которыми пользователь сможет
          взаимодействовать.
        </div>
      </div>
    </section>
    <section class="section">
      <h1 class="section--title">Что такое ГИС?</h1>
      <div class="section--container">
        <ul class="section--text_container_table right-border">
          <li class="section--text_container_table_element">
            Географическая информационная система (ГИС) - это система, созданная
            для хранения, управления и анализа пространственных данных. ГИС
            визуализирует и анализирует пространственные данные на карте для
            дальнейшего использования в научных или прикладных целях. Для
            анализа данных вместе с веб-картами могут использоваться следующие
            географические сервисы:
          </li>
          <li class="section--text_container_table_element">
            сервис прямого и обратного геокодирования
          </li>
          <li class="section--text_container_table_element">
            сервис геолокации
          </li>
          <li class="section--text_container_table_element">
            сервис маршрутизации
          </li>
          <li class="section--text_container_table_element">
            сервис мест и организаций
          </li>
        </ul>
        <div class="section--picture gis"></div>
      </div>
    </section>
    <section class="section">
      <h1 class="section--title">Сферы применения веб-карт</h1>
      <div class="section--container">
        <div class="section--picture right-border map_picture"></div>
        <ul class="section--text_container_table">
          <li class="section--text_container_table_element">
            Геоинформационные сервисы и веб-карты применяются в различных сферах
            деятельности человека, а одними из самых известных сервисов являются
            Google Maps и Яндекс Карты. Веб-карты можно увидеть в системах для:
          </li>
          <li class="section--text_container_table_element">
            логистики и туризм
          </li>
          <li class="section--text_container_table_element">
            строительства и дизайна
          </li>
          <li class="section--text_container_table_element">
            визуализации и мониторинга природных явлений
          </li>
          <li class="section--text_container_table_element">
            визуализации различных географических статистических данных
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Map } from "../components/index";
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: rgb(0, 0, 0);
  padding-bottom: 100px;
}

.section {
  width: 100%;
  //min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;

  &--title {
    line-height: 40px;
    padding: 0;
    margin: 10px;
  }

  &--container {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    box-sizing: border-box;
    gap: 10px;
  }

  &--text_container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
    line-height: 36px;
  }

  &--text_container_list {
    margin: 0;
    padding: 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    line-height: 30px;
  }

  &--text_container_table {
    margin: 0;
    padding: 0;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    //gap: 10px;
    font-size: 18px;
    line-height: 30px;
    list-style: none;
    justify-items: center;
    align-items: center;
  }

  &--picture {
    width: 50%;
    height: 500px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &--text_container_element:first-child {
    margin-top: 40px;
  }

  &--text_container_table_element:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 100%;
    border: none;
  }

  &--text_container_element {
    margin-left: 40px;
    justify-self: start;
    align-self: flex-start;
    text-align: center;
  }

  &--text_container_table_element {
    width: 320px;
    height: 80px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    border: 1px solid rgba($color: #000000, $alpha: 0.3);
  }
}

.map {
  width: 50%;
  height: 500px;
}

.right-border {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}

.gis {
  background-image: url(../assets/GIS.png);
}

.map_picture {
  background-image: url(../assets/road-map.png);
}

@media (max-width: 1500px) {
  .section {
    &--text_container_table {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &--text_container_table_element:first-child {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 1100px) {
  .section {
    &--text_container_table_element {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
}

// @media (max-width: 900px) {
//   .section {
//     &--text_container_table_element {
//       width: 100%;
//       height: 100%;
//       box-sizing: border-box;
//     }
//   }
// }

@media (max-width: 770px) {
  .section {
    height: 100%;

    &--container {
      flex-direction: column;
    }

    &--text_container {
      width: 100%;
      justify-content: start;
      align-items: start;
      text-align: left;
      line-height: 30px;
    }

    &--text_container_list {
      width: 100%;
      justify-content: start;
      text-align: left;
      line-height: 30px;
    }

    &--text_container_table {
      width: 100%;
      justify-content: center;
      text-align: left;
      line-height: 30px;
    }

    &--picture {
      width: 100%;
      height: 500px;
    }

    &--text_container_element:first-child {
      margin-top: 20px;
    }

    &--text_container_element {
      margin-left: 20px;
    }
  }

  .map {
    width: 100%;
    height: 500px;
  }

  .right-border {
    border-right: none;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
  }
}

@media (max-width: 510px) {
  .map {
    height: 400px;
  }

  .section--picture {
    height: 400px;
  }
}

@media (max-width: 320px) {
  .map {
    height: 320px;
  }

  .section--picture {
    height: 320px;
  }
}
</style>
