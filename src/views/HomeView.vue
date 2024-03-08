<template>
  <main class="main">
    <section class="main_container_text">
      <h1>Choose Your Web Map</h1>
      <span
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
  // background-color: rgb(189, 231, 225);
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

@media (max-width: 1050px) {
  //   .header--link {
  //     width: 120px;
  //     height: 95px;
  //     font-size: 14px;
  //   }
  //   .header--logo {
  //     width: 120px;
  //     height: 95px;
  //   }
}

@media (max-width: 650px) {
  //   .header_container {
  //     gap: 10px;
  //   }

  //   .header--link {
  //     width: 100px;
  //     height: 85px;
  //     margin: 0;
  //     line-height: 16px;
  //     font-size: 12px;
  //     word-wrap: break-word;
  //   }
  //   .header--logo {
  //     width: 100px;
  //     height: 85px;
  //     margin: 0;
  //   }
}

@media (max-width: 470px) {
  //   .header_container {
  //     gap: 0px;
  //   }

  //   .header--link {
  //     width: 80px;
  //     height: 65px;
  //     line-height: 14px;
  //     font-size: 10px;
  //     word-wrap: break-word;
  //   }
  //   .header--logo {
  //     width: 80px;
  //     height: 65px;
  //   }
}
</style>
