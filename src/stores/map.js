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
      let filteredMaps = [];
      state.maps.map((mappp) => {
        for (let key in state.filters) {
          if (
            state.filters[key] === mappp[key] &&
            state.filters[key] === true
          ) {
            const mapExist = filteredMaps.findIndex(
              (item) => item.name === mappp.name
            );
            if (!mapExist) {
              filteredMaps.push(mappp);
            }

            const itemIndex = resultValues.findIndex((el) => el === item);
            ~itemIndex
              ? resultValues.splice(itemIndex, 1)
              : resultValues.push(item);
            // console.log(key);
            // console.log("keyy");
            // console.log(state.maps[0][key]);

            //let filteredMapss = state.maps.filter((map) => map[key] === true);

            // filteredMapss.map((map) => {
            //   const mapExist = filteredMaps.find((item) => item.id === map.id);
            //   if (!mapExist) {
            //     filteredMaps.push(map);
            //   }
            // });
          }
          if (typeof key === Array && state.filters.key.length !== 0) {
            state.filters.key.map((filter) => {
              let filteredMapss = state.maps.filter((map) =>
                map.key.includes(filter)
              );
              filteredMapss.map((map) => {
                const mapExist = filteredMaps.find(
                  (item) => item.id === map.id
                );
                if (!mapExist) {
                  filteredMaps.push(map);
                }
              });
            });
          }
        }
      });
      // for (let key in state.filters) {
      //   if (state.filters[key] === true) {

      //     // console.log(key);
      //     // console.log("keyy");
      //     // console.log(state.maps[0][key]);

      //     let filteredMapss = state.maps.filter((map) => map[key] === true);
      //     filteredMapss.map((map) => {
      //       const mapExist = filteredMaps.find((item) => item.id === map.id);
      //       if (!mapExist) {
      //         filteredMaps.push(map);
      //       }
      //     });
      //   }
      //   if (typeof key === Array && state.filters.key.length !== 0) {
      //     state.filters.key.map((filter) => {
      //       let filteredMapss = state.maps.filter((map) =>
      //         map.key.includes(filter)
      //       );
      //       filteredMapss.map((map) => {
      //         const mapExist = filteredMaps.find((item) => item.id === map.id);
      //         if (!mapExist) {
      //           filteredMaps.push(map);
      //         }
      //       });
      //     });
      //   }
      // }
      return filteredMaps;
    },
  },
  actions: {},
});
