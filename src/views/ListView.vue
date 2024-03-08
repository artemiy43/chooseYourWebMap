<template>
  <ul class="ingredients__list">
    <li v-for="map in mapStore.maps" :key="map.id">
      {{ map.name }}
    </li>
  </ul>
</template>

<script setup>
import { useMapStore } from "../stores";
const mapStore = useMapStore();
</script>
