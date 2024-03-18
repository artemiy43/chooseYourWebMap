<template>
  {{ map.name }}
</template>

<script setup>
import { useMapStore } from "../stores";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();

const router = useRouter();
const { name } = route.params;

const mapStore = useMapStore();

const map = mapStore.maps.find((map) => map.name === name);
</script>
