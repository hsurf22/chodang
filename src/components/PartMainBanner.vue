<template>
  <div class="main-banner">
    <div class="banner-item banner1">
      <img :src="Banner1" alt="Tofu set 1" />
    </div>
  </div>
</template>

<script>
import BannerImg from "@/assets/img/banner/tofu-set.jpg";

export default {
  name: "PartMainBanner",
  props: {
    msg: String,
  },
  data: () => {
    return {
      Banner1: BannerImg,
      slide: true,
    };
  },
  mounted: () => {},
};
</script>

<style scoped lang="scss">
.banner1 {
  width: 100%;
  height: auto;
  background-color: black;
  img {
    width: 100%;
    height: auto;
    opacity: 70%;
  }
}
</style>
