import { defineStore } from "pinia";
import maps from "@/mocks/maps.json";

export const useMapStore = defineStore("map", {
  state: () => ({
    maps: maps,
    search: "",
  }),
  getters: {
    getMaps: (state) => {
      return state.maps;
    },
    getFilteredMaps: (state) => {
      let filteredMiscs = [];
      return filteredMiscs;
    },
  },
  actions: {},
});
