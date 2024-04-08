<template>
  <MapAbout :map="map" />
</template>

<script setup>
import { MapAbout } from "../components/index";
import { useMapStore } from "../stores";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();

const { name } = route.params;

const mapStore = useMapStore();

const map = mapStore.maps.find((map) => map.name === name);
</script>
