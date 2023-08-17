<template>
  <div class="header">
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
          <!-- Logo image -->
          <div class="main-logo">
            <img :src="Logo" alt="Main Logo" />
          </div>

          <ul class="d-flex justify-content-start">
            <li>Menu</li>
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
import LogoImg from "@/assets/img/chodang-logo-white.png";

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
.store-location {
  background-color: #333333;
  ul {
    padding-left: 175px;
    margin-bottom: 0;
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
  padding-left: 150px;
  .main-logo {
    position: relative;
    img {
      filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
      position: absolute;
      top: -13px;
      left: -140px;
      height: 70px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
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
