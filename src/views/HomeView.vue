<template>
  <main class="main">
    <section class="main_container_text">
      <h1 class="main_container_text--title">Choose Your Web Map</h1>
      <span class="main_container_text--text"
        >Сайт разработан для помощи разработчикам в выборе подходящим для них
        инструментов в создании веб-карт.</span
      >
    </section>
    <section class="main_container_links">
      <router-link class="main_container_links--link" to="/why">
        <span>Зачем нужны веб-карты?</span>
      </router-link>
      <router-link class="main_container_links--link" to="/list">
        <span>Список современных библиотек для создания веб-карт</span>
      </router-link>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 30px;
}
.main_container_text {
  margin: 200px 0 100px;
}
.main_container_links {
  width: 100%;
  height: 200px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &--link {
    background-color: transparent;
    color: white;
    width: 320px;
    height: 150px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 30px;
    font-size: 26px;
    line-height: 30px;
    opacity: 1;
    border: 1px solid transparent;
    transition: all 1s ease-in-out;
  }
  &--link:hover {
    opacity: 0.8;
    border: 1px solid white;
  }
  //   &--logo {
  //     width: 200px;
  //     height: 150px;
  //     border-radius: 30px;
  //     margin-left: 20px;
  //     background-image: url("../assets/ITMO_University.png");
  //     background-position: center;
  //     background-repeat: no-repeat;
  //     background-size: cover;
  //     background-color: white;
  //   }
}
// .header_container {
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   gap: 30px;
// }

@media (max-width: 1630px) {
  .main_container_text--text {
    line-height: 2;
  }
}

@media (max-width: 1050px) {
  .main_container_text {
    margin: 150px 0 100px;
  }

  .main_container_links {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &--link {
      background-color: transparent;
      color: white;
      width: 320px;
      height: 150px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      border-radius: 30px;
      font-size: 26px;
      line-height: 30px;
      opacity: 1;
      border: 1px solid transparent;
      transition: all 1s ease-in-out;
    }
  }
}

@media (max-width: 750px) {
  .main_container_text--title {
    margin-bottom: 80px;
  }

  .main_container_text {
    margin: 100px 0 100px;
  }

  .main_container_text--title {
    font-size: 40px;
  }
  .main_container_text--text {
    font-size: 26px;
  }

  .main_container_links {
    &--link {
      animation: appearBorder 2s ease-in-out 1s infinite alternate;
    }
  }
}

@media (max-width: 510px) {
  .main_container_text--title {
    margin-bottom: 60px;
  }

  .main_container_text {
    margin: 75px 0 75px;
  }

  .main_container_text--title {
    font-size: 24px;
  }

  .main_container_text--text {
    font-size: 18px;
  }

  .main_container_links {
    height: 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &--link {
      font-size: 18px;
      margin: 0;
    }
  }
}

@media (max-width: 320px) {
  .main_container_links {
    &--link {
      width: 300px;
      height: 100px;
    }
  }
}
</style>
