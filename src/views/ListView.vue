<template>
  <ul class="ingredients__list">
    <li v-for="map in mapStore.maps" :key="map.id">
      <span>{{ map.name }}</span>
      <router-link :to="`/${map.name}`"> ссылочка</router-link>
    </li>
  </ul>
</template>

<script setup>
import { useMapStore } from "../stores";
const mapStore = useMapStore();
</script>
