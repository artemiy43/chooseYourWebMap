<template>
  <main class="main">
    <h1 class="main--title">{{ map.name }}</h1>
    <div class="main--container">
      <ul class="main--container_list">
        <li class="main--map_quality">
          <a :href="map.documentation" target="_blank"
            ><button class="main--map_quality_value main--link">
              Перейти к документации
            </button></a
          >
        </li>
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
          <span class="main--map_quality_value"
            >{{
              map.services
                ? "Геокодирование, Построение маршрутов, Матрица расстояний, Поиск по организациям"
                : "Отсутствуют"
            }}
          </span>
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
        <!-- <li class="main--map_quality">
          Ссылка на документацию:
          <span class="main--map_quality_value">{{ map.documentation }}</span>
        </li> -->
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
        <li class="main--map_quality">
          Интеграции с фронтенд фреймворками:
          <span class="main--map_quality_value">{{ getMapFrameworks() }} </span>
        </li>
        <li class="main--map_quality">
          Рекомендации:
          <span class="main--map_quality_value">{{ map.recommendation }} </span>
        </li>
      </ul>
      <div class="main--company">
        <img
          :src="getImageUrl(map.src)"
          :alt="map.name"
          class="main--company__pic"
        />
        <div class="main--company_links">
          <a
            class="main--company_links_github main--company_links_element"
            :href="map.github"
            target="_blank"
            >Github</a
          >
          <a
            class="main--company_links_playground main--company_links_element"
            :href="map.playground"
            target="_blank"
            >Jsfiddle playground example</a
          >
        </div>
      </div>
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
  let string = map.viewsRu.join(", ");
  return string;
};

const getMapFormats = () => {
  let string = map.dataFormats.join(", ");
  return string;
};

const getMapFrameworks = () => {
  if (map.frameworks.length === 0) {
    return "Отсутствуют";
  } else {
    let string = map.frameworks.join(", ");
    return string;
  }
};

// const getMapServices = () => {
//   let string = map.services.join(", ");
//   return string;
// };
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: rgb(0, 0, 0);
  padding-bottom: 60px;

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
    gap: 15px;
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

  &--link {
    background-color: rgb(112, 167, 240);
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }

  &--link:hover {
    box-shadow: 9px 9px 2px 1px rgba(104, 89, 89, 0.4);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  &--company {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &--company_links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  &--company_links_element:hover {
    box-shadow: 9px 9px 2px 1px rgba(104, 89, 89, 0.4);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  &--company_links_github {
    margin-right: 25px;
    width: 200px;
    height: 75px;
    background-color: rgb(49, 53, 58);
    color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
  }

  &--company_links_playground {
    margin-right: 25px;
    width: 200px;
    height: 75px;
    background-color: rgb(135, 188, 253);
    color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
    line-height: 20px;
  }
}

@media (max-width: 1100px) {
  .main {
    &--container {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

    &--container_list {
      padding: 0;
    }

    &--company__pic {
      width: 300px;
      height: 300px;
    }
  }
}

@media (max-width: 600px) {
  .main {
    &--company_links {
      flex-direction: column;
    }

    &--company_links_github {
      margin-right: 0;
      margin-bottom: 15px;
    }

    &--company_links_playground {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
}
</style>
