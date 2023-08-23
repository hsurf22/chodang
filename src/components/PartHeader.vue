<template>
  <div class="header">
    <div class="header-content" :class="hideMenu ? 'hide' : ''">
      <!-- Store locations -->
      <div class="store-location">
        <ul class="container d-flex justify-content-start">
          <li
            @click="updateLocation('diamond-bar')"
            class="clickable"
            :class="currentLocation == 'diamond-bar' ? 'active' : ''"
          >
            California
          </li>
          <!--
        <li
          @click="updateLocation('cerritos')"
          class="clickable"
          :class="currentLocation == 'cerritos' ? 'active' : ''"
        >
          Cerritos
        </li>
        <li
          @click="updateLocation('montrose')"
          class="clickable"
          :class="currentLocation == 'montrose' ? 'active' : ''"
        >
          Montrose
        </li>
        <li
          @click="updateLocation('cypress')"
          class="clickable"
          :class="currentLocation == 'cypress' ? 'active' : ''"
        >
          Cypress
        </li>
        --></ul>
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
      hideMenu: false,
    };
  },
  computed: {
    currentLocation() {
      return this.$store.state.currentLocation;
    },
  },
  methods: {
    updateRoute(path) {
      this.currentPageName = path;
      this.$router.push({ name: path }).catch(() => {});
    },
    updateLocation(locationName) {
      this.$store.commit("setCurrentLocation", locationName);
    },
    menuActionOnScroll() {
      var scrollTop = document.documentElement.scrollTop;
      var lastScrollTop = scrollTop;

      // Listen for scroll events
      window.addEventListener("scroll", () => {
        // Get the current scroll position
        scrollTop = document.documentElement.scrollTop;

        // Check if the scroll position has changed
        if (scrollTop !== lastScrollTop) {
          // If the scroll position has changed, check the direction
          if (scrollTop > lastScrollTop) {
            // The user is scrolling down
            //console.log("Scrolling down");
            setTimeout(() => {
              this.hideMenu = true;
            }, 250);
          } else {
            // The user is scrolling up
            //console.log("Scrolling up");
            setTimeout(() => {
              this.hideMenu = false;
            }, 250);
          }

          // Update the last scroll position
          lastScrollTop = scrollTop;
        }
      });
    },
  },
  mounted() {
    this.currentPageName = this.$route.name;

    // Set initial value for location
    if (!this.currentLocation) {
      this.$store.commit("setCurrentLocation", "diamond-bar");
    }

    this.menuActionOnScroll();
  },
};
</script>

<style scoped lang="scss">
.header {
  //padding-top: 5.7rem;
}
.header-content {
  border-bottom: 1px solid #b2382b;
  //opacity: 0.4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;

  transition: top 0.6s ease;

  &.hide {
    top: -100px;
  }
}
.store-location {
  margin-bottom: -1px;
  background-color: #333333;
  ul {
    padding-left: 11.2rem;
    margin-bottom: 0;
    li {
      padding: 0.188rem 1.063rem;
      font-weight: 800;
      font-size: 0.68rem;
      text-transform: uppercase;
      color: white;
      //background-color: #df4636;

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
