<template>
  <div class="header">
    <!-- Logo image -->
    <img class="main-logo" :src="Logo" alt="Main Logo" />

    <!-- Store locations -->
    <div class="store-location">
      <ul class="container d-flex justify-content-start">
        <li class="active">Diamond Bar</li>
        <li>Cerritos</li>
        <li>Montrose</li>
        <li>Cypress</li>
      </ul>
    </div>

    <!-- Menu content -->
    <div class="menu-content">
      <div class="container">
        <div class="main-menu">
          <ul class="d-flex justify-content-start">
            <li>Locations</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoImg from "@/assets/img/chodang-logo.png";

export default {
  name: "PartHeader",
  props: {
    msg: String,
  },
  data: () => {
    return {
      Logo: LogoImg,
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  .main-logo {
    max-height: 110px;
    position: absolute;
    left: 20px;
  }
}
.store-location {
  padding-left: 40px;
  background-color: #333333;
  ul {
    li {
      padding: 3px 17px;
      font-weight: 800;
      font-size: 0.68rem;
      text-transform: uppercase;
      color: white;
      &.active {
        background-color: #df4636;
      }
    }
  }
}
.menu-content {
  background-color: #df4636;
}
.main-menu {
  ul {
    li {
      padding: 23px 20px;
      font-weight: 800;
      font-size: 1rem;
      color: white;
      text-transform: uppercase;
    }
  }
}
</style>
