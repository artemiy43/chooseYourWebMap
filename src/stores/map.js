import { defineStore } from "pinia";
import maps from "@/mocks/maps.json";

export const useMapStore = defineStore("map", {
  state: () => ({
    maps: maps,
    filters: {
      views: [],
      layersChange: false,
      services: false,
      heatMap: false,
      clustering: false,
      graphics: false,
      analysData: false,
      ApiConnection: false,
      helpForDevelopers: false,
      dataFormats: [],
      frameworks: [],
      russian: false,
      foreign: false,
      commercialRestrictions: false,
      openSource: false,
    },
  }),
  getters: {
    getFilteredMaps: (state) => {
      let filteredMaps = state.maps;
      for (let key in state.filters) {
        if (
          state.filters[key] === true &&
          Array.isArray(state.filters[key]) === false
        ) {
          filteredMaps = filteredMaps.filter(
            (map) => state.filters[key] == map[key]
          );
        }
        if (
          Array.isArray(state.filters[key]) === true &&
          state.filters[key].length !== 0
        ) {
          for (let element in state.filters[key]) {
            filteredMaps = filteredMaps.filter((map) =>
              map[key].includes(state.filters[key][element])
            );
          }
        }
      }
      return filteredMaps;
    },
  },
  actions: {
    addDataFormat(format, checked) {
      const formatIndex = this.filters.dataFormats.findIndex(
        (item) => item === format
      );
      if (checked === true) {
        this.filters.dataFormats.push(format);
      } else {
        this.filters.dataFormats.splice(formatIndex, 1);
      }
    },
    addFramework(framework, checked) {
      const formatIndex = this.filters.frameworks.findIndex(
        (item) => item === framework
      );
      if (checked === true) {
        this.filters.frameworks.push(framework);
      } else {
        this.filters.frameworks.splice(formatIndex, 1);
      }
    },
    addView(view, checked) {
      const viewIndex = this.filters.views.findIndex((item) => item === view);
      if (checked === true) {
        this.filters.views.push(view);
      } else {
        this.filters.views.splice(viewIndex, 1);
      }
    },
  },
});
