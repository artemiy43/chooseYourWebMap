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
    },
  }),
  getters: {
    getMaps: (state) => {
      return state.maps;
    },
    getFilteredMaps: (state) => {
      let filteredMaps = state.maps;
      for (let key in state.filters) {
        //console.log(key);
        if (
          state.filters[key] === true
          // typeof state.filters[key] !== Array
        ) {
          console.log(key);
          filteredMaps = filteredMaps.filter(
            (map) => state.filters[key] == map[key]
          );
        }
      }
      return filteredMaps;
    },
  },
  actions: {},
});
