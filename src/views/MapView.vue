<template>
  <main class="main">
    <h1 class="main--title">{{ map.name }}</h1>
    <div class="main--container">
      <ul class="main--container_list">
        <li class="main--map_quality">
          Год создания:
          <span class="main--map_quality_value">{{ map.createdAt }}</span>
        </li>
        <li class="main--map_quality">
          Лицензия:
          <span class="main--map_quality_value">{{ map.licence }}</span>
        </li>
        <li class="main--map_quality">
          Представления карт:
          <span class="main--map_quality_value">{{ getMapViews() }}</span>
        </li>
        <li class="main--map_quality">
          Кастомизация:
          <span class="main--map_quality_value">{{
            map.castomization ? "Присутствует" : "Отсутствует"
          }}</span>
        </li>
        <li class="main--map_quality">
          Функция добавления нескольких слоёв и возможность их смены:
          <span class="main--map_quality_value">
            {{ map.layersChange ? "Присутствует" : "Отсутствует" }}
          </span>
        </li>
        <li class="main--map_quality">
          Дополнительные сервисы:
          <span class="main--map_quality_value">{{ map.services }} </span>
        </li>
        <li class="main--map_quality">
          Возможность создания тепловых карт:
          <span class="main--map_quality_value">
            {{ map.heatMap ? "Присутствует" : "Отсутствует" }}
          </span>
        </li>
        <li class="main--map_quality">
          Возможность использования кластеризации данных:
          <span class="main--map_quality_value">
            {{ map.clustering ? "Присутствует" : "Отсутствует" }}
          </span>
        </li>
        <li class="main--map_quality">
          Возможность работы с 3D-объектами:
          <span class="main--map_quality_value">
            {{ map.graphics ? "Присутствует" : "Отсутствует" }}
          </span>
        </li>
        <li class="main--map_quality">
          Возможность использования сервисов для анализа данных:
          <span class="main--map_quality_value">
            {{ map.analysData ? "Присутствует" : "Отсутствует" }}
          </span>
        </li>
        <li class="main--map_quality">
          Подключение через API:
          <span class="main--map_quality_value">
            {{ map.ApiConnection ? "Присутствует" : "Отсутствует" }}
          </span>
        </li>
        <li class="main--map_quality">
          Форматы пространственных данных:
          <span class="main--map_quality_value">{{ getMapFormats() }} </span>
        </li>
        <li class="main--map_quality">
          Ссылка на документацию:
          <span class="main--map_quality_value">{{ map.documentation }}</span>
        </li>
        <li class="main--map_quality">
          Наличие поддержки от разработчиков библиотеки для ответов на вопросы
          или наличие открытого форума для общения и передачи опыта работы с
          технологией:
          <span class="main--map_quality_value">
            {{ map.helpForDevelopers ? "Присутствует" : "Отсутствует" }}
          </span>
        </li>
        <li class="main--map_quality">
          Зависимость от сторонних библиотек или технологий:
          <span class="main--map_quality_value">
            {{ map.dependence ? "Присутствует" : "Отсутствует" }}
          </span>
        </li>
        <li class="main--map_quality">
          Совместимость с современными браузерами:
          <span class="main--map_quality_value">
            {{ map.currentBrowsers ? "Присутствует" : "Отсутствует" }}
          </span>
        </li>
      </ul>
      <!-- <div class="main--company"> -->
      <img
        :src="getImageUrl(map.src)"
        :alt="map.name"
        class="main--company__pic"
      />
      <!-- </div> -->
    </div>
  </main>
</template>

<script setup>
// import { computed } from "vue";
import { getImageUrl } from "../components/helpers";
import { useMapStore } from "../stores";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();

const router = useRouter();
const { name } = route.params;

const mapStore = useMapStore();

const map = mapStore.maps.find((map) => map.name === name);

const getMapViews = () => {
  let string = map.views.join(", ");
  return string;
};

const getMapFormats = () => {
  let string = map.dataFormats.join(", ");
  return string;
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: white;

  &--container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  &--title {
    text-align: center;
  }

  &--container_list {
    width: 60%;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &--map_quality {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }

  &--map_quality_value {
    font-weight: 200;
  }

  &--company__pic {
    width: 500px;
    height: 500px;
    object-fit: contain;
    object-position: center;
    //border: 1px solid rgba($color: #ffffff, $alpha: 0.3);
    //padding: 10px;
  }
}
</style>
