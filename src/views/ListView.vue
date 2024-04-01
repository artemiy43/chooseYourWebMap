<template>
  <main class="main">
    <div class="filters">
      <div class="filters--search_container">
        <button
          type="menu"
          class="filters--button"
          @click="openMenu"
          data-test="filters"
        >
          <img
            src="../assets/filter4.png"
            alt="фильтры"
            class="filters--button_icon"
          />
          Фильтры
        </button>
      </div>
      <!-- <transition name="fade"> -->
      <div v-if="filtersOpened" class="filters--list">
        <fieldset class="filters--list_section">
          <legend class="filters--legend">Функциональность</legend>

          <div class="filters--list_section_container">
            <div>
              <input
                type="checkbox"
                id="flatMap"
                name="flatMap"
                @input="mapStore.addView('flatMap', $event.target.checked)"
              />
              <label for="flatMap">плоская карта</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="globus"
                name="globus"
                @input="mapStore.addView('globus', $event.target.checked)"
              />
              <label for="globus">виртуальный глобус</label>
            </div>
          </div>

          <div class="filters--list_section_container">
            <div>
              <input
                type="checkbox"
                id="clustering"
                name="clustering"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="clustering">кластеризация</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="heatMap"
                name="heatMap"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="heatMap">тепловые карты</label>
            </div>
          </div>

          <div class="filters--list_section_container">
            <div>
              <input
                type="checkbox"
                id="analysData"
                name="analysData"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="analysData">сервисы для анализа данных</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="services"
                name="services"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="services"
                >дополнительные сервисы (геолокация, маршрутизация и др)</label
              >
            </div>
          </div>

          <div class="filters--list_section_container">
            <div>
              <input
                type="checkbox"
                id="graphics"
                name="graphics"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="graphics">3D-объекты</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="layersChange"
                name="layersChange"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="layersChange">смена слоёв данных</label>
            </div>
          </div>

          <div class="filters--list_section_container">
            <div>
              <input
                type="checkbox"
                id="ApiConnection"
                name="ApiConnection"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="ApiConnection">подключение по API или CDN</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="helpForDevelopers"
                name="helpForDevelopers"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="helpForDevelopers"
                >поддержка и/или открытый форум от разработчиков</label
              >
            </div>
          </div>
        </fieldset>
        <fieldset class="filters--list_section">
          <legend class="filters--legend">Доступность</legend>

          <div class="filters--list_section_container_big">
            <div v-for="dataFormat in dataFormats" :key="dataFormat">
              <input
                type="checkbox"
                :id="dataFormat"
                :name="dataFormat"
                @input="
                  mapStore.addDataFormat(dataFormat, $event.target.checked)
                "
                :checked="mapStore.filters.dataFormats.includes(dataFormat)"
              />
              <label :for="dataFormat">{{ dataFormat }}</label>
            </div>
          </div>

          <div class="filters--list_section_container_big">
            <div v-for="framework in frameworks" :key="framework">
              <input
                type="checkbox"
                :id="framework"
                :name="framework"
                @input="mapStore.addFramework(framework, $event.target.checked)"
                :checked="mapStore.filters.frameworks.includes(framework)"
              />
              <label :for="framework">{{ framework + ".js" }}</label>
            </div>
          </div>
        </fieldset>
      </div>
      <!-- </transition> -->
    </div>
    <h2 class="count">
      {{ mapStore.getFilteredMaps.length + " из " + mapStore.maps.length }}
    </h2>
    <ul class="map_list">
      <li
        v-for="map in mapStore.getFilteredMaps"
        :key="map.id"
        class="map_list--element"
      >
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
import { getImageUrl, frameworks, dataFormats } from "../components/helpers";
const filtersOpened = ref(false);
const mapStore = useMapStore();

const openMenu = () => {
  filtersOpened.value = !filtersOpened.value;
};

// const getImageUrl = (path) => {
//   const publicUrl = "@/assets";
//   return `${publicUrl}${path}`;
//   // return `${publicUrl}/${path}`;
// };

// function getImageUrl(name) {
//   const url = new URL(`/src/assets/${name}`, import.meta.url).href;
//   return url;
// }
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

input {
  width: 40px;
  height: 20px;
  margin: 0.5rem;
}

.count {
  color: #000;
  font-size: 26px;
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
  //height: 100%;
  background-color: #6b99df;
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 10px;
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
    height: 65px;
    background-color: transparent;
    color: rgb(255, 255, 255);
    font-size: 24px;
    margin-left: 20px;
    border-radius: 10px;
    border: 1px solid rgba($color: #ffffff, $alpha: 0.8);
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    text-align: center;
    gap: 15px;
  }

  &--button:hover {
    cursor: pointer;
    border: 2px solid rgba($color: #000000, $alpha: 0.8);
  }

  &--list {
    width: 100%;
    height: 100%;
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

  // &--list_animation {
  //   animation: opening 1s ease-in-out 1s 1 alternate;
  //   transition: all 0.5s ease-in-out;
  // }

  &--legend {
    padding: 8px;
    font-size: 18px;
  }

  &--list_section_container {
    width: calc(50% - 40px);
    //height: 100%;
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
    box-sizing: border-box;
  }

  &--list_section_container_big {
    width: calc(50% - 40px);
    //height: 100%;
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
    border: 2px solid rgba($color: #000000, $alpha: 0.2);
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

// .fade-enter-active {
//   transition: all 0.5s ease;
// }

// .fade-leave-active {
//   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
// }

// .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
//   opacity: 0;
// }

@media (max-width: 1010px) {
  .filters {
    margin-bottom: 20px;

    &--list_section {
      gap: 10px;
    }

    &--list_section_container {
      width: calc(50% - 40px);
      //height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
      border-radius: 5px;
      text-align: left;
      padding: 5px;
      font-size: 18px;
      line-height: 20px;
      box-sizing: content-box;
    }

    &--list_section_container_big {
      width: calc(50% - 40px);
      //height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: start;
      border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
      border-radius: 5px;
      text-align: left;
      padding: 5px;
      box-sizing: content-box;
      font-size: 18px;
      line-height: 20px;
    }
  }
}

@media (max-width: 770px) {
  .filters {
    &--list_section_container {
      width: 100%;
      //height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
      border-radius: 5px;
      text-align: left;
      padding: 5px;
      font-size: 18px;
      line-height: 20px;
      box-sizing: content-box;
    }

    &--list_section_container_big {
      width: 100%;
      //height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: start;
      border: 1px solid rgba($color: #ffffff, $alpha: 0.2);
      border-radius: 5px;
      text-align: left;
      padding: 5px;
      box-sizing: content-box;
      font-size: 18px;
      line-height: 20px;
    }
  }
}

@media (max-width: 530px) {
  .filters {
    &--list {
      flex-direction: column;
    }
    &--list_section {
      width: 100%;
      margin: 0;
      box-sizing: border-box;
    }
  }

  input {
    width: 30px;
    height: 20px;
    margin: 0.2rem;
  }
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
