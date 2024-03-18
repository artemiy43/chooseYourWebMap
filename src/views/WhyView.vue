<template>
  <main class="main">
    <section class="section">
      <h1 class="section--title">Что такое веб-карта?</h1>
      <div class="section--container">
        <div class="map right-border" ref="chartdiv"></div>
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
        <ul class="section--text_container_list right-border">
          Географическая информационная система (ГИС) - это система, созданная
          для хранения, управления и анализа пространственных данных. ГИС
          визуализирует и анализирует пространственные данные на карте для
          дальнейшего использования в научных или прикладных целях. Для анализа
          данных вместе с веб-картами могут использоваться следующие
          географические сервисы:
          <li class="section--text_container_element">
            сервис прямого и обратного геокодирования;
          </li>
          <li class="section--text_container_element">сервис геолокации;</li>
          <li class="section--text_container_element">сервис маршрутизации;</li>
          <li class="section--text_container_element">
            сервис мест и организаций.
          </li>
        </ul>
        <div class="section--picture gis"></div>
      </div>
    </section>
    <section class="section">
      <h1 class="section--title">Сферы применения веб-карт</h1>
      <div class="section--container">
        <div class="section--picture right-border map_picture"></div>
        <ul class="section--text_container_list">
          Геоинформационные сервисы и веб-карты применяются в различных сферах
          деятельности человека, а одними из самых известных сервисов являются
          Google Maps и Яндекс Карты. Веб-карты можно увидеть в системах для:
          <li class="section--text_container_element">
            логистики и туризм (например, сервисы доставок еды, такси и
            перелётов);
          </li>
          <li class="section--text_container_element">
            строительства и дизайна;
          </li>
          <li class="section--text_container_element">
            визуализации и мониторинга природных явлений (например, сервисы
            прогноза погоды);
          </li>
          <li class="section--text_container_element">
            визуализации различных географических статистических данных
            (например, населения стран).
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";

export default {
  name: "HelloWorld",
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoEquirectangular(),
      })
    );

    //
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    this.root = root;
  },

  beforeDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
}

.section {
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
}
.section--title {
  line-height: 40px;
  padding: 0;
  margin: 10px;
}
.section--container {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
}

.section--text_container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  line-height: 36px;
}

.section--text_container_list {
  margin: 0;
  padding: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  line-height: 30px;
}

.section--text_container_element:first-child {
  margin-top: 40px;
}

.section--text_container_element {
  margin-left: 40px;
  justify-self: start;
  align-self: flex-start;
}

.map {
  width: 50%;
  height: 500px;
}

.section--picture {
  width: 50%;
  height: 500px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.right-border {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.gis {
  background-image: url(../assets/GIS.png);
}

.map_picture {
  background-image: url(../assets/map.jpg);
}

// @media (max-width: 1630px) {

// }

// @media (max-width: 1050px) {

// }

@media (max-width: 770px) {
  .section {
    height: 100%;
  }
  .section--container {
    flex-direction: column;
  }

  .section--text_container {
    width: 100%;
    justify-content: start;
    align-items: start;
    text-align: left;
    line-height: 30px;
  }

  .section--text_container_list {
    width: 100%;
    justify-content: start;
    text-align: left;
    line-height: 30px;
  }

  .map {
    width: 100%;
    height: 500px;
  }

  .section--picture {
    width: 100%;
    height: 500px;
  }

  .right-border {
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .section--text_container_element:first-child {
    margin-top: 20px;
  }

  .section--text_container_element {
    margin-left: 20px;
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
