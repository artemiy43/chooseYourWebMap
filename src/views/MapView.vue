<template>
  <MapAbout :map="map" />
</template>

<script setup>
// import { computed } from "vue";
import { MapAbout } from "../components/index";
// import { getImageUrl } from "../components/helpers";
import { useMapStore } from "../stores";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();

//const router = useRouter();
const { name } = route.params;

const mapStore = useMapStore();

const map = mapStore.maps.find((map) => map.name === name);

// const getMapViews = () => {
//   let string = map.viewsRu.join(", ");
//   return string;
// };

// const getMapFormats = () => {
//   let string = map.dataFormats.join(", ");
//   return string;
// };

// const getMapFrameworks = () => {
//   if (map.frameworks.length === 0) {
//     return "Отсутствуют";
//   } else {
//     let string = map.frameworks.join(", ");
//     return string;
//   }
// };
</script>
