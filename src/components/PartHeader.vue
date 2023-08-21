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
          <div
            class="main-logo clickable"
            @click="$router.push({ name: 'home' }).catch(() => {})"
          >
            <img :src="Logo" alt="Main Logo" />
          </div>

          <ul class="d-flex justify-content-start">
            <li
              :class="currentPageName == 'home' ? 'active' : ''"
              class="clickable"
              @click="updateRoute('home')"
            >
              Menu
            </li>
            <li
              :class="currentPageName == 'locations' ? 'active' : ''"
              class="clickable"
              @click="updateRoute('locations')"
            >
              Locations
            </li>
            <li
              :class="currentPageName == 'about' ? 'active' : ''"
              class="clickable"
              @click="updateRoute('about')"
            >
              About us
            </li>
            <li
              :class="currentPageName == 'faq' ? 'active' : ''"
              class="clickable"
              @click="updateRoute('faq')"
            >
              FAQ
            </li>
            <li
              :class="currentPageName == 'contact' ? 'active' : ''"
              class="clickable"
              @click="updateRoute('contact')"
            >
              Contact us
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoImg from "@/assets/img/logo/chodang-logo-white.png";

export default {
  name: "PartHeader",
  props: {
    msg: String,
  },
  data: () => {
    return {
      Logo: LogoImg,
      currentPageName: "",
    };
  },
  methods: {
    updateRoute(path) {
      this.currentPageName = path;
      this.$router.push({ name: path }).catch(() => {});
    },
  },
  mounted() {
    this.currentPageName = this.$route.name;
  },
};
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid #565656;
}
.store-location {
  background-color: rgba(51, 51, 51, 0.95);
  ul {
    padding-left: 10.938rem;
    margin-bottom: 0;
    li {
      padding: 0.188rem 1.063rem;
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
  padding-left: 9.375rem;
  .main-logo {
    position: relative;
    img {
      filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
      position: absolute;
      top: -0.813rem;
      left: -9.375rem;
      height: 4.375rem;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      padding: 1.438rem 1.25rem;
      font-weight: 800;
      font-size: 1rem;
      color: white;
      text-transform: uppercase;
      &.active {
        background-color: rgba(255, 255, 25, 0.22);
      }
    }
  }
}
</style>
