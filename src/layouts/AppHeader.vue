<template>
  <header class="header">
    <div class="header_container">
      <router-link class="header--link" to="/"
        ><span>Главная</span></router-link
      >
      <router-link class="header--link" to="/why">
        <span>Зачем нужны веб-карты?</span>
      </router-link>
      <router-link class="header--link" to="/list">
        <span>Список современных библиотек для создания веб-карт</span>
      </router-link>
    </div>
    <div class="header_container">
      <div class="header--logo"></div>
      <div class="header--link">
        <span>Выполнил: Бондарь Артемий Алексеевич</span>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 150px;
  // background-color: rgb(189, 231, 225);
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &--link {
    background-color: transparent;
    color: white;
    width: 200px;
    height: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 30px;
    font-size: 18px;
    line-height: 30px;
    opacity: 1;
    border: 1px solid transparent;
    transition: all 1s ease-in-out;
  }
  &--link:hover {
    opacity: 0.8;
    border: 1px solid white;
  }
  &--logo {
    width: 200px;
    height: 150px;
    border-radius: 30px;
    margin-left: 20px;
    background-image: url("../assets/ITMO_University.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: white;
  }
}
.header_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
}

@media (max-width: 1050px) {
  .header--link {
    width: 120px;
    height: 95px;
    font-size: 14px;
  }
  .header--logo {
    width: 120px;
    height: 95px;
  }
}

@media (max-width: 650px) {
  .header_container {
    gap: 10px;
  }

  .header--link {
    width: 100px;
    height: 85px;
    margin: 0;
    line-height: 16px;
    font-size: 12px;
    word-wrap: break-word;
  }
  .header--logo {
    width: 100px;
    height: 85px;
    margin: 0;
  }
}

@media (max-width: 470px) {
  .header_container {
    gap: 0px;
  }

  .header--link {
    width: 80px;
    height: 65px;
    line-height: 14px;
    font-size: 10px;
    word-wrap: break-word;
  }
  .header--logo {
    width: 80px;
    height: 65px;
  }
}
</style>
