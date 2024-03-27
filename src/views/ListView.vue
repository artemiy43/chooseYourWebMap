<template>
  <main class="main">
    <div class="filters">
      <button type="menu" class="filters--button" @click="openMenu">
        Фильтры
      </button>
      <transition name="fade">
        <div v-if="filtersOpened" class="filters--list">
          <fieldset>
            <legend>Функциональность:</legend>

            <div>
              <input type="checkbox" id="scales" name="scales" checked />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Доступность:</legend>

            <div>
              <input type="checkbox" id="scales" name="scales" checked />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Поддержка:</legend>

            <div>
              <input type="checkbox" id="scales" name="scales" checked />
              <label for="scales">Scales</label>
            </div>

            <div>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Horns</label>
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
    border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
  }

  &--list_animation {
    animation: opening 1s ease-in-out 1s 1 alternate;
    transition: all 1s ease-in-out;
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
