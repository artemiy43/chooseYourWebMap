<template>
  <main class="main">
    <div class="filters">
      <div class="filters--search_container">
        <button type="menu" class="filters--button" @click="openMenu">
          Фильтры
        </button>
        <!-- <input
          type="search"
          placeholder="google maps"
          name="search"
          class="filters--search"
          @change="mapStore.search = $event.value"
        /> -->
      </div>
      <transition name="fade">
        <div v-if="filtersOpened" class="filters--list">
          <fieldset class="filters--list_section">
            <legend class="filters--legend">Функциональность</legend>

            <div class="filters--list_section_container">
              <div>
                <input type="checkbox" id="flat_map" name="flat_map" />
                <label for="flat_map">плоская карта</label>
              </div>
              <div>
                <input type="checkbox" id="globus" name="globus" />
                <label for="globus">виртуальный глобус</label>
              </div>
            </div>

            <div class="filters--list_section_container">
              <div>
                <input type="checkbox" id="clustering" name="clustering" />
                <label for="clustering">кластеризация</label>
              </div>
              <div>
                <input type="checkbox" id="heatmap" name="heatmap" />
                <label for="heatmap">тепловые карты</label>
              </div>
            </div>

            <div class="filters--list_section_container">
              <div>
                <input type="checkbox" id="analyse" name="analyse" />
                <label for="analyse">сервисы для анализа данных</label>
              </div>

              <div>
                <input type="checkbox" id="services" name="services" />
                <label for="services"
                  >дополнительные сервисы (геолокация, маршрутизация и
                  др)</label
                >
              </div>
            </div>

            <div class="filters--list_section_container">
              <div>
                <input type="checkbox" id="3D" name="3D" />
                <label for="3D">3D-объекты</label>
              </div>

              <div>
                <input type="checkbox" id="layers" name="layers" />
                <label for="layers">смена слоёв данных</label>
              </div>
            </div>
          </fieldset>
          <fieldset class="filters--list_section">
            <legend class="filters--legend">Доступность</legend>

            <div class="filters--list_section_container_big">
              <div>
                <input type="checkbox" id="GeoJSON" name="GeoJSON" />
                <label for="GeoJSON">GeoJSON</label>
              </div>
              <div>
                <input type="checkbox" id="TopoJSON" name="TopoJSON" />
                <label for="TopoJSON">TopoJSON</label>
              </div>
              <div>
                <input type="checkbox" id="GeoRSS" name="GeoRSS" />
                <label for="GeoRSS">GeoRSS</label>
              </div>
              <div>
                <input type="checkbox" id="KML" name="KML" />
                <label for="KML">KML</label>
              </div>
              <div>
                <input type="checkbox" id="KMZ" name="KMZ" />
                <label for="KMZ">KMZ</label>
              </div>
              <div>
                <input type="checkbox" id="GML" name="GML" />
                <label for="GML">GML</label>
              </div>
              <div>
                <input type="checkbox" id="GPX" name="GPX" />
                <label for="GPX">GPX</label>
              </div>
              <div>
                <input type="checkbox" id="CZML" name="CZML" />
                <label for="CZML">CZML</label>
              </div>
              <div>
                <input type="checkbox" id="gITF" name="gITF" />
                <label for="gITF">gITF</label>
              </div>
            </div>

            <div class="filters--list_section_container_big">
              <div>
                <input type="checkbox" id="react" name="react" />
                <label for="react">react.js</label>
              </div>
              <div>
                <input type="checkbox" id="vue" name="vue" />
                <label for="vue">vue.js</label>
              </div>
              <div>
                <input type="checkbox" id="angular" name="angular" />
                <label for="angular">angular.js</label>
              </div>
              <div>
                <input type="checkbox" id="ember" name="ember" />
                <label for="ember">ember.js</label>
              </div>
              <div>
                <input type="checkbox" id="next" name="next" />
                <label for="next">next.js</label>
              </div>
              <div>
                <input type="checkbox" id="remix" name="remix" />
                <label for="remix">remix.js</label>
              </div>
              <div>
                <input type="checkbox" id="svelteKit" name="svelteKit" />
                <label for="svelteKit">svelteKit</label>
              </div>
            </div>
          </fieldset>
        </div>
      </transition>
    </div>
    <ul class="map_list">
      <li v-for="map in mapStore.maps" :key="map.id" class="map_list--element">
        <router-link :to="`/${map.name}`" class="map_list--element_link">
          <img
            :src="getImageUrl(map.src)"
            :alt="map.name"
            class="map_list--element_picture"
          />
          <span class="map_list--element_name">{{ map.name }}</span>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { useMapStore } from "../stores";
import { ref } from "vue";
import { getImageUrl } from "../components/helpers";
const filtersOpened = ref(false);
const mapStore = useMapStore();

const openMenu = () => {
  filtersOpened.value = !filtersOpened.value;
};

// function getImageUrl(path) {
//   const publicUrl = "/src/assets";
//   return `${publicUrl}${path}`;
//   // return `${publicUrl}/${path}`;
// }
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

input {
  width: 40px;
  height: 20px;
  margin: 0.5rem;
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
}

.filters {
  width: 100%;
  height: 100%;
  background-color: #423030;
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  box-sizing: border-box;

  &--search_container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 30px;
  }

  &--search {
    width: 400px;
    height: 60px;
    border-radius: 5px;
    background-color: rgba($color: #2b2a2a, $alpha: 0.5);
    border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
    color: white;
    padding: 20px;
    font-size: 22px;
    line-height: 20px;
  }

  &--button {
    width: 200px;
    height: 80px;
    background-color: #ffffff;
    color: black;
    font-size: 24px;
    margin-left: 20px;
    border-radius: 10px;
  }

  &--list {
    width: 100%;
    height: 500px;
    background-color: transparent;
    // border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
    display: flex;
    flex-direction: row;
  }

  &--list_section {
    width: 50%;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    border-radius: 10px;
    min-inline-size: min-content;
  }

  &--list_animation {
    animation: opening 1s ease-in-out 1s 1 alternate;
    transition: all 1s ease-in-out;
  }

  &--legend {
    padding: 8px;
    font-size: 18px;
  }

  &--list_section_container {
    width: calc(50% - 40px);
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
    border-radius: 5px;
    text-align: left;
    padding: 10px;
    font-size: 20px;
    line-height: 24px;
  }

  &--list_section_container_big {
    width: calc(50% - 40px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
    border-radius: 5px;
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 24px;
  }
}

.map_list {
  width: 100%;
  //height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
  padding-bottom: 80px;
  justify-items: center;
  //align-content: center;
  // justify-content: center;
  // align-items: center;

  &--element {
    //width: calc(80% - 20px);
    width: 350px;
    height: 400px;
    background-color: rgba($color: #ffffff, $alpha: 1);
    //background-color: transparent;
    border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    color: #0f0f0f;
  }

  &--element:hover {
    box-shadow: 12px 12px 2px 1px rgba(104, 89, 89, 0.4);
    transition: all 0.5s ease-in-out;
  }

  &--element_link {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    color: black;
  }

  &--element_picture {
    width: 80%;
    height: 300px;
    object-fit: contain;
    object-position: center;
    margin-bottom: 30px;
  }

  &--element_name {
    font-size: 22px;
    line-height: 28px;
  }
}

.fade-enter-active {
  transition: all 0.6s ease;
}

.fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 1200px) {
  .map_list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 750px) {
  .map_list {
    grid-template-columns: 1fr;

    &--element {
      width: 320px;
    }
  }
}

@media (max-width: 375px) {
  .map_list {
    grid-template-columns: 1fr;

    &--element {
      width: 300px;
    }
  }
}
</style>
