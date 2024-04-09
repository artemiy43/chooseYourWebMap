<template>
  <main class="main">
    <div class="filters">
      <div class="filters--search_container">
        <button
          type="menu"
          class="filters--button"
          data-test="filters"
          @click="openMenu"
        >
          <img
            src="../assets/filter4.png"
            alt="фильтры"
            class="filters--button_icon"
          />
          Фильтры
        </button>
      </div>
      <div v-if="filtersOpened" class="filters--list">
        <fieldset class="filters--list_section">
          <legend class="filters--legend">Функциональность</legend>

          <div class="filters--list_section_container">
            <div>
              <input
                id="flatMap"
                type="checkbox"
                name="flatMap"
                :checked="mapStore.filters.views.includes('flatMap')"
                @input="mapStore.addView('flatMap', $event.target.checked)"
              />
              <label for="flatMap">плоская карта</label>
            </div>
            <div>
              <input
                id="globus"
                type="checkbox"
                name="globus"
                :checked="mapStore.filters.views.includes('globus')"
                @input="mapStore.addView('globus', $event.target.checked)"
              />
              <label for="globus">виртуальный глобус</label>
            </div>
          </div>

          <div class="filters--list_section_container">
            <div>
              <input
                id="clustering"
                type="checkbox"
                name="clustering"
                :checked="mapStore.filters.clustering"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="clustering">кластеризация</label>
            </div>
            <div>
              <input
                id="heatMap"
                type="checkbox"
                name="heatMap"
                :checked="mapStore.filters.heatMap"
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
                id="analysData"
                type="checkbox"
                name="analysData"
                :checked="mapStore.filters.analysData"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="analysData">сервисы для анализа данных</label>
            </div>

            <div>
              <input
                id="services"
                type="checkbox"
                name="services"
                :checked="mapStore.filters.services"
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
                id="graphics"
                type="checkbox"
                name="graphics"
                :checked="mapStore.filters.graphics"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="graphics">3D-объекты</label>
            </div>

            <div>
              <input
                id="layersChange"
                type="checkbox"
                name="layersChange"
                :checked="mapStore.filters.layersChange"
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
                id="ApiConnection"
                type="checkbox"
                name="ApiConnection"
                :checked="mapStore.filters.ApiConnection"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="ApiConnection"
                >необходимость получения API ключа при использовании</label
              >
            </div>

            <div>
              <input
                id="helpForDevelopers"
                type="checkbox"
                name="helpForDevelopers"
                :checked="mapStore.filters.helpForDevelopers"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="helpForDevelopers"
                >поддержка и/или открытый форум от разработчиков</label
              >
            </div>
          </div>

          <div class="filters--list_section_container">
            <div>
              <input
                id="russian"
                type="checkbox"
                name="russian"
                :checked="mapStore.filters.russian"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="russian">От российских разработчиков</label>
            </div>

            <div>
              <input
                id="foreign"
                type="checkbox"
                name="foreign"
                :checked="mapStore.filters.foreign"
                @input="
                  mapStore.filters[$event.target.name] = $event.target.checked
                "
              />
              <label for="foreign">От иностранных разработчиков</label>
            </div>
          </div>
        </fieldset>
        <fieldset class="filters--list_section">
          <legend class="filters--legend">Доступность</legend>

          <fieldset class="filters--list_section_container_big">
            <legend class="filters--legend">Форматы данных</legend>
            <div v-for="dataFormat in dataFormats" :key="dataFormat">
              <input
                :id="dataFormat"
                type="checkbox"
                :name="dataFormat"
                :checked="mapStore.filters.dataFormats.includes(dataFormat)"
                @input="
                  mapStore.addDataFormat(dataFormat, $event.target.checked)
                "
              />
              <label :for="dataFormat">{{ dataFormat }}</label>
            </div>
          </fieldset>

          <fieldset class="filters--list_section_container_big">
            <legend class="filters--legend">Фреймворки</legend>
            <div v-for="framework in frameworks" :key="framework">
              <input
                :id="framework"
                type="checkbox"
                :name="framework"
                :checked="mapStore.filters.frameworks.includes(framework)"
                @input="mapStore.addFramework(framework, $event.target.checked)"
              />
              <label :for="framework">{{ framework + ".js" }}</label>
            </div>
          </fieldset>
        </fieldset>
      </div>
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
  background-color: #6b99df;
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
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
    display: flex;
    flex-direction: row;
    box-sizing: content-box;
    justify-content: center;
  }

  &--list_section {
    width: calc(50% - 40px);
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    border-radius: 10px;
    min-inline-size: min-content;
    box-sizing: border-box;
  }

  &--legend {
    padding: 8px;
    font-size: 18px;
  }

  &--list_section_container {
    width: calc(50% - 40px);
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
    margin: 0;
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
    text-align: center;
  }
}

.map_list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
  padding-bottom: 80px;
  justify-items: center;

  &--element {
    width: 350px;
    height: 400px;
    background-color: rgba($color: #ffffff, $alpha: 1);
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
    transform: translateX(-5px);
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

@media (max-width: 1010px) {
  .filters {
    margin-bottom: 20px;

    &--list_section {
      gap: 10px;
    }

    &--list_section_container {
      width: calc(50% - 40px);
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
