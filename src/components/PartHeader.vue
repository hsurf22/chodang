<template>
  <div class="header">
    <!-- Header Mobile start -->
    <div class="header-mobile d-block d-lg-none d-xl-none">
      <div class="header-content" :class="hideMenu ? 'hide' : ''">
        <!-- Store locations -->
        <div
          class="store-location d-flex align-items-center justify-content-end font-weight-800"
          style="color: white; padding: 0 30px; user-select: none"
        >
          <div>EN</div>
        </div>

        <!-- Menu content -->
        <div class="menu-content" style="position: relative">
          <CloseButton
            :isOpen="!isMobileMenuClosed"
            @click.native="isMobileMenuClosed = !isMobileMenuClosed"
          />

          <!-- Logo image -->
          <div
            class="main-logo clickable"
            @click="$router.push({ name: 'home' }).catch(() => {})"
          >
            <div class="inner-circle">
              <img :src="Logo" alt="Main Logo" />
            </div>
          </div>
        </div>
        <div
          class="mobile-menu-dropdown text-center"
          :class="isMobileMenuClosed ? 'closed' : ''"
        >
          <div @click="mobileChangeRoute('home')">Menu</div>
          <div @click="mobileChangeRoute('locations')">Locations</div>
          <div @click="mobileChangeRoute('about')">About us</div>
          <div @click="mobileChangeRoute('faq')">FAQ</div>
          <div @click="mobileChangeRoute('contact')">Contact us</div>
        </div>
      </div>
    </div>
    <!-- Header Mobile end -->

    <!-- Header Desktop start -->
    <div class="header-desktop d-none d-lg-block d-xl-block">
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
            -->
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
    </div>
    <!-- Header Desktop end -->
  </div>
  <!-- Header -->
</template>

<script>
import LogoImg from "@/assets/img/logo/chodang-logo-white.png";
import CloseButton from "@/components/objectCloseButton";

export default {
  name: "PartHeader",
  props: {
    msg: String,
  },
  components: {
    CloseButton,
  },
  data: () => {
    return {
      Logo: LogoImg,
      currentPageName: "",
      hideMenu: false,
      isMobileMenuClosed: true,
    };
  },
  computed: {
    currentLocation() {
      return this.$store.state.currentLocation;
    },
  },
  methods: {
    mobileChangeRoute(routeName) {
      this.isMobileMenuClosed = true;
      this.$router.push({ name: routeName }).catch(() => {});
    },
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
              this.isMobileMenuClosed = true;
            }, 250);
          } else {
            // The user is scrolling up
            //console.log("Scrolling up");
            setTimeout(() => {
              this.hideMenu = false;
              this.isMobileMenuClosed = true;
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
.header-mobile {
  .header-content {
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
    height: 38px;
  }

  .menu-content {
    position: relative;
    z-index: 10;
    background-color: #df4636;
    height: 50px;
    border-bottom: 1px solid #b2382b;
  }
  .main-logo {
    border: 3px solid #dd4535;
    border-radius: 50%;
    position: absolute;
    top: -15px;
    left: calc(50% - 38px);
    z-index: 200;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.7);

    .inner-circle {
      background-color: #dd4535;
      height: 75px;
      width: 75px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid white;
      img {
        transform: rotate(-12deg);
        width: 55px;
        filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));
      }
    }
  }

  .mobile-menu-dropdown {
    overflow: hidden;
    max-height: 341px;
    position: relative;
    background-color: black;
    transition: max-height 0.2s ease, opacity 0.6s ease;
    &.closed {
      opacity: 0.3;
      max-height: 0;
    }
    > div {
      cursor: pointer;
      display: block;
      text-transform: uppercase;
      color: white;
      font-size: 1.4rem;
      letter-spacing: -1px;
      font-family: "Raleway", sans-serif;
      font-weight: 900;
      margin: 1.2rem 0;

      &:first-child {
        margin-top: 3rem;
      }

      &:last-child {
        margin-bottom: 3rem;
      }
    }
  }
}

.header-desktop {
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
        top: -0.713rem;
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
}
</style>
