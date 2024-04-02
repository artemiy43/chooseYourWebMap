import { mount } from "@vue/test-utils";
import MapAbout from "../components/MapAbout.vue";
import { expect, test, describe } from "vitest";

test("mount component", async () => {
  const wrapper = mount(MapAbout, {
    props: {
      map: {
        id: 8,
        name: "Cesium",
        src: "cesium.png",
        createdAt: 2012,
        licence: "cesium copyright",
        views: ["flatMap", "globus"],
        viewsRu: ["плоская карта", "виртуальный глобус"],
        castomization: true,
        layersChange: true,
        services: false,
        heatMap: false,
        clustering: false,
        graphics: true,
        analysData: true,
        ApiConnection: false,
        dataFormats: ["GeoJSON", "CZML", "gITF"],
        dependence: false,
        currentBrowsers: true,
        documentation: "https://cesium.com/platform/cesiumjs/",
        helpForDevelopers: true,
        frameworks: ["react", "vue"],
        recommendation:
          "Библиотека подходит для проектов со сложными 3D-сценами. Библиотека сложна в освоении и кастомизации, обладает подробной документацией.",
        github: "https://github.com/CesiumGS/cesium",
        playground: "https://jsfiddle.net/landsapi/rLv19eso/",
      },
    },
  });
  expect(wrapper.exists).toBeTruthy();
});

test("check mapAbout text", async () => {
  expect(MapAbout).toBeTruthy();

  const wrapper = mount(MapAbout, {
    props: {
      map: {
        id: 8,
        name: "Cesium",
        src: "cesium.png",
        createdAt: 2012,
        licence: "cesium copyright",
        views: ["flatMap", "globus"],
        viewsRu: ["плоская карта", "виртуальный глобус"],
        castomization: true,
        layersChange: true,
        services: false,
        heatMap: false,
        clustering: false,
        graphics: true,
        analysData: true,
        ApiConnection: false,
        dataFormats: ["GeoJSON", "CZML", "gITF"],
        dependence: false,
        currentBrowsers: true,
        documentation: "https://cesium.com/platform/cesiumjs/",
        helpForDevelopers: true,
        frameworks: ["react", "vue"],
        recommendation:
          "Библиотека подходит для проектов со сложными 3D-сценами. Библиотека сложна в освоении и кастомизации, обладает подробной документацией.",
        github: "https://github.com/CesiumGS/cesium",
        playground: "https://jsfiddle.net/landsapi/rLv19eso/",
      },
    },
  });
  expect(wrapper.text()).toContain("cesium copyright");
});
