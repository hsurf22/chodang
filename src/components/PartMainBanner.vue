<template>
  <div class="main-banner">
    <div
      class="slide-item"
      style="
        background-image: url(/data/images/banner/banner-1.jpg);
        padding: 13rem 0;
      "
    >
      <b-container>
        <BannerTextBlock />
      </b-container>
    </div>
  </div>
</template>

<script>
import BannerTextBlock from "@/components/PartMainBannerText";

export default {
  name: "PartMainBanner",
  props: {
    msg: String,
  },
  components: { BannerTextBlock },
  data: () => {
    return {};
  },
  mounted: () => {},
};
</script>

<style scoped lang="scss">
.slide-item {
  background-position: center;
  background-size: cover;
}
</style>
