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

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
//import am5geodata_data_countries from "@amcharts/amcharts5-geodata/data/countries";

export default {
  name: "HelloWorld",
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);

    root.setThemes([am5themes_Animated.new(root)]);

    // let chart = root.container.children.push(
    //   am5map.MapChart.new(root, {
    //     panX: "rotateX",
    //     projection: am5map.geoEquirectangular(),
    //   })
    // );

    // //
    // let polygonSeries = chart.series.push(
    //   am5map.MapPolygonSeries.new(root, {
    //     geoJSON: am5geodata_data_countries,
    //   })
    // );

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        homeGeoPoint: { latitude: 2, longitude: 2 },
      })
    );

    let cont = chart.children.push(
      am5.Container.new(root, {
        layout: root.horizontalLayout,
        x: 20,
        y: 40,
      })
    );

    // Add labels and controls
    cont.children.push(
      am5.Label.new(root, {
        centerY: am5.p50,
        text: "[#888]Map[/]",
      })
    );

    let switchButton = cont.children.push(
      am5.Button.new(root, {
        themeTags: ["switch"],
        centerY: am5.p50,
        icon: am5.Circle.new(root, {
          themeTags: ["icon"],
        }),
      })
    );

    switchButton.on("active", function () {
      if (!switchButton.get("active")) {
        chart.set("projection", am5map.geoMercator());
        chart.set("panY", "translateY");
        chart.set("rotationY", 0);
        backgroundSeries.mapPolygons.template.set("fillOpacity", 0);
      } else {
        chart.set("projection", am5map.geoOrthographic());
        chart.set("panY", "rotateY");

        backgroundSeries.mapPolygons.template.set("fillOpacity", 0.1);
      }
    });

    cont.children.push(
      am5.Label.new(root, {
        centerY: am5.p50,
        text: "[#888]Globe[/]",
      })
    );

    // Create series for background fill
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    let backgroundSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {})
    );
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0,
      strokeOpacity: 0,
    });

    // Add background polygon
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180),
    });

    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );

    // Create line series for trajectory lines
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
    let lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: am5.color(0x000000),
      strokeOpacity: 0.3,
    });

    // Create point series for markers
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
    let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    pointSeries.bullets.push(function () {
      let circle = am5.Circle.new(root, {
        radius: 7,
        tooltipText: "Drag me!",
        cursorOverStyle: "pointer",
        tooltipY: 0,
        fill: am5.color(0xffba00),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2,
        draggable: true,
      });

      circle.events.on("dragged", function (event) {
        let dataItem = event.target.dataItem;
        let projection = chart.get("projection");
        let geoPoint = chart.invert({ x: circle.x(), y: circle.y() });

        dataItem.setAll({
          longitude: geoPoint.longitude,
          latitude: geoPoint.latitude,
        });
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    let paris = addCity({ latitude: 48.8567, longitude: 2.351 }, "Paris");
    let toronto = addCity(
      { latitude: 43.8163, longitude: -79.4287 },
      "Toronto"
    );
    let la = addCity({ latitude: 34.3, longitude: -118.15 }, "Los Angeles");
    let havana = addCity({ latitude: 23, longitude: -82 }, "Havana");

    let lineDataItem = lineSeries.pushDataItem({
      pointsToConnect: [paris, toronto, la, havana],
    });

    let planeSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    let plane = am5.Graphics.new(root, {
      svgPath:
        "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47",
      scale: 0.06,
      centerY: am5.p50,
      centerX: am5.p50,
      fill: am5.color(0x000000),
    });

    planeSeries.bullets.push(function () {
      let container = am5.Container.new(root, {});
      container.children.push(plane);
      return am5.Bullet.new(root, { sprite: container });
    });

    let planeDataItem = planeSeries.pushDataItem({
      lineDataItem: lineDataItem,
      positionOnLine: 0,
      autoRotate: true,
    });
    planeDataItem.dataContext = {};

    planeDataItem.animate({
      key: "positionOnLine",
      to: 1,
      duration: 10000,
      loops: Infinity,
      easing: am5.ease.yoyo(am5.ease.linear),
    });

    planeDataItem.on("positionOnLine", (value) => {
      if (planeDataItem.dataContext.prevPosition < value) {
        plane.set("rotation", 0);
      }

      if (planeDataItem.dataContext.prevPosition > value) {
        plane.set("rotation", -180);
      }
      planeDataItem.dataContext.prevPosition = value;
    });

    function addCity(coords, title) {
      return pointSeries.pushDataItem({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    }

    chart.appear(1000, 100);

    this.root = root;
  },

  beforeUnmount() {
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
