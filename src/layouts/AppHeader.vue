<template>
  <header class="header">
    <router-link class="header--link" to="/">
      <span>Главная</span>
    </router-link>
    <router-link class="header--link" to="/why">
      <span>Зачем нужны веб-карты?</span>
    </router-link>
    <router-link class="header--link" to="/list">
      <span>Список современных библиотек для создания веб-карт</span>
    </router-link>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.header {
  width: 100%;
  height: 200px;
  padding: 25px 0;
  // background-color: rgb(189, 231, 225);
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 75px;

  &--link {
    background-color: transparent;
    color: rgb(0, 0, 0);
    width: 300px;
    height: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    font-size: 24px;
    line-height: 30px;
    opacity: 1;
    border: 2px solid black;
    transition: all 1s ease-in-out;
  }
  &--link:hover {
    // opacity: 0.8;
    // border: 3px solid rgb(0, 0, 0);
    transform: translateX(-5px);
    box-shadow: 12px 12px 2px 1px $shadow-color;
    transition: all 0.5s ease-in-out;
  }
}
.header_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
}

@media (max-width: 1150px) {
  .header {
    gap: 40px;

    &--link {
      width: 200px;
      height: 100px;
      font-size: 22px;
    }
  }
}

@media (max-width: 760px) {
  .header {
    gap: 20px;

    &--link {
      width: 100%;
      height: 100%;
      font-size: 20px;
      animation: appearBorder 2s ease-in-out 1s infinite alternate;
      border-radius: 10px;
      padding: 0 5px;
    }
  }
}

@media (max-width: 500px) {
  .header {
    gap: 10px;
    flex-direction: column;

    &--link {
      width: 100%;
      height: 100%;
      font-size: 20px;
    }
  }
}
</style>
