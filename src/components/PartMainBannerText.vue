<template>
  <div class="main-banner-text">
    <div class="p-4">
      <h3
        class="text-center text-uppercase font-weight-800"
        style="margin-bottom: 0rem"
      >
        CD Tofu
      </h3>
      <div class="h5 font-hand-writing-3 text-center mb-4">
        Our most popular Tofu
      </div>
      <div
        class="h8 text-center font-weight-800 text-gray-800 text-uppercase mb-2"
      >
        What's inside
      </div>
      <div class="h10 text-center mb-3 font-weight-400">
        Red Soup, Soft Tofu, Shrimp, Clam, Beef, Egg, Green onion
      </div>

      <div
        class="h8 text-center font-weight-800 text-gray-800 text-uppercase mb-2"
      >
        Spicy options
      </div>
      <div class="h10 text-center font-weight-400">
        None, Mild, Medium, Very Spicy
      </div>
    </div>

    <div class="menu-price font-menu-small text-center py-2">
      $15.00(M) • $16.00(L)
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PartMainBannerText",
  props: {
    msg: String,
  },
  data: () => {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    async getLocationData() {
      const res = await axios.get("/data/locations.json");
      const data = res.data;
      this.locations = data.locations;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.main-banner-text {
  max-width: 18rem;
  background-color: #333;
  color: #fff;
}
.menu-price {
  background-color: black;
}
</style>
