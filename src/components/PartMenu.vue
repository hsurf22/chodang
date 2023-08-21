<template>
  <div class="menu">
    <div v-if="menu">
      <div class="page-edge"></div>

      <div class="text-center pt-11 mb-8">
        <img
          style="max-width: 15rem"
          :src="pattern"
          alt="Korean signature pattern"
        />
      </div>

      <b-container>
        <!-- ================================================ -->
        <!-- Main title -->
        <!-- ================================================ -->
        <h2 class="menu-title text-center font-menu text-uppercase mb-8">
          {{ menu.title }}
        </h2>

        <!-- ***************************************************************************************************************************** -->
        <!-- Sub Menu start -->
        <!-- ***************************************************************************************************************************** -->
        <b-row
          v-for="(sub_menu, subMenuKey) in menu.sub_menus"
          :key="subMenuKey"
          class="pb-9 hide-the-last"
        >
          <!-- ================================================ -->
          <!-- Sub menu title -->
          <!-- ================================================ -->
          <div class="text-center sub-menu-title font-menu text-uppercase mb-5">
            {{ sub_menu.sub_menu_title }}
          </div>

          <!-- ************************************************************************* -->
          <!-- Item Block start -->
          <!-- ************************************************************************* -->
          <b-col
            v-for="(item, itemKey) in sub_menu.sub_menu_items"
            :key="itemKey"
            cols="3"
            class="menu-item text-center pb-9"
          >
            <!-- ================================================ -->
            <!-- Item image -->
            <!-- ================================================ -->
            <div class="menu-item-image mb-4">
              <img :src="item.img" :alt="item.item_title" />
            </div>

            <!-- ================================================ -->
            <!-- TEXT Information block -->
            <!-- ================================================ -->
            <div>
              <!-- ================================================ -->
              <!-- Item title -->
              <!-- ================================================ -->
              <div class="menu-item-title font-menu-small text-capitalize">
                {{ item.item_title }}
              </div>

              <!-- ================================================ -->
              <!-- Item subtitle -->
              <!-- ================================================ -->
              <div class="menu-item-subtitle font-menu-small">
                {{ item.item_sub_title }}
              </div>

              <!-- ================================================ -->
              <!-- Item description -->
              <!-- ================================================ -->
              <div class="menu-item-description font-menu-small mt-2">
                {{ item.item_description }}
              </div>

              <!-- ================================================ -->
              <!-- Item price -->
              <!-- ================================================ -->
              <div
                class="menu-item-price font-menu-small mt-4"
                style="line-height: 2rem"
              >
                {{ item.price }}
              </div>
            </div>
          </b-col>
          <!-- ************************************************************************* -->
          <!-- Item Block end -->
          <!-- ************************************************************************* -->

          <!-- ================================================ -->
          <!-- Sub menu divider -->
          <!-- ================================================ -->
          <div class="text-center the-last">
            <img
              style="max-width: 50%; filter: grayscale(1) opacity(25%)"
              :src="divider"
              alt="Divider"
            />
          </div>
        </b-row>
        <!-- ***************************************************************************************************************************** -->
        <!-- Sub Menu end -->
        <!-- ***************************************************************************************************************************** -->
      </b-container>

      <div class="page-edge bottom"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import divider from "@/assets/img/patterns/divider.svg";
import pattern from "@/assets/img/patterns/korean-traditional-pattern.svg";

export default {
  name: "PartMenu",
  props: {
    msg: String,
  },
  data: () => {
    return {
      menu: null,
      divider: divider,
      pattern: pattern,
    };
  },
  methods: {
    async getMenuData() {
      const res = await axios.get("/data/menu.json");
      const data = res.data;
      this.menu = data.menu;
    },
  },
  mounted() {
    this.getMenuData();
  },
};
</script>

<style scoped lang="scss">
.page-edge {
  opacity: 1;
  height: 7rem;
  background-image: url(@/assets/img/patterns/edge-pattern.svg);
  background-position: center -1.8rem;
  background-repeat: repeat-x;

  &.bottom {
    transform: rotate(180deg);
  }
}

.menu {
  min-height: 100rem;
  background-color: #323a3e;
  background-image: url(@/assets/img/backgrounds/bg2.svg);
  background-size: 3rem;
}
.menu-title {
  color: white;
}
.sub-menu-title {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
}
.menu-item {
  color: white;
  .menu-item-title {
    font-size: 1.3rem;
    font-weight: 600;
  }
  .menu-item-subtitle {
    font-size: 1rem;
  }
  .menu-item-description {
    font-size: 0.8rem;
    font-weight: 400;
  }
  .menu-item-price {
    font-size: 1.6rem;
    font-weight: 400;
  }
  .menu-item-image {
    padding: 0 3.75rem;
    > img {
      border-radius: 50%;
      width: 100%;
      box-shadow: 0.25rem 0.25rem 0.375rem rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
