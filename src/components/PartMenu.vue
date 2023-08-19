<template>
  <div class="menu py-9" v-if="menu">
    <b-container>
      <div class="text-center mb-5">
        <img width="200" :src="pattern1" alt="Korean Pattern" />
      </div>
      <h2 class="menu-title text-center font-menu text-uppercase mb-8">
        {{ menu.title }}
      </h2>
      <b-row
        v-for="(sub_menu, subMenuKey) in menu.sub_menus"
        :key="subMenuKey"
        class="pb-9"
      >
        <div class="text-center sub-menu-title font-menu text-uppercase mb-5">
          {{ sub_menu.sub_menu_title }}
        </div>
        <b-col
          v-for="(item, itemKey) in sub_menu.sub_menu_items"
          :key="itemKey"
          cols="3"
          class="menu-item text-center pb-5"
        >
          <div class="menu-item-image mb-4">
            <img :src="item.img" :alt="item.item_title" />
          </div>
          <div>
            <div class="menu-item-title font-menu-small text-capitalize">
              {{ item.item_title }}
            </div>
            <div class="menu-item-subtitle font-menu-small">
              {{ item.item_sub_title }}
            </div>
            <div class="menu-item-description font-menu-small mt-2">
              {{ item.item_description }}
            </div>
            <div class="menu-item-price font-menu-small mt-3">
              ${{ item.price }}
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="text-center mt-n8">
        <img width="200" :src="pattern2" alt="Korean Pattern" />
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import pattern1 from "@/assets/img/patterns/korean-traditional-pattern-1.png";
import pattern2 from "@/assets/img/patterns/korean-traditional-pattern-2.png";

export default {
  name: "PartMenu",
  props: {
    msg: String,
  },
  data: () => {
    return {
      menu: null,
      pattern1: pattern1,
      pattern2: pattern2,
    };
  },
  methods: {
    async getMenuData() {
      const res = await axios.get("/menu/menu.json");
      const menuData = res.data;
      this.menu = menuData.menu;
    },
  },
  mounted() {
    this.getMenuData();
  },
};
</script>

<style scoped lang="scss">
.menu {
  background-color: #121618;
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
