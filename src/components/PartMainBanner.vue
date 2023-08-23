<template>
  <div class="main-banner">
    <Flicking
      :options="{
        align: 'prev',
        circular: true,
        autoInit: true,
        duration: 600,
      }"
      :plugins="plugins"
      @move-end="onMoveEnd"
    >
      <div
        class="slide-item d-flex align-item-center"
        style="
          width: 100%;
          background-image: url(/data/images/banner/banner-1.jpg);
        "
      >
        <b-container class="d-flex align-items-center">
          <BannerTextBlock />
        </b-container>
      </div>
      <div
        class="slide-item d-flex align-items-center"
        style="
          width: 100%;
          background-image: url(/data/images/banner/banner-1.jpg);
        "
      >
        <b-container class="d-flex align-items-center">
          <BannerTextBlock />
        </b-container>
      </div>
    </Flicking>
  </div>
</template>

<script>
import BannerTextBlock from "@/components/PartMainBannerText";
import { Flicking } from "@egjs/vue-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/vue-flicking/dist/flicking.css";

export default {
  name: "PartMainBanner",
  props: {
    msg: String,
  },
  components: { BannerTextBlock, Flicking },
  data: () => {
    return {
      plugins: [
        new AutoPlay({ duration: 6000, direction: "NEXT", stopOnHover: false }),
      ],
    };
  },
  methods: {
    onMoveEnd() {},
  },
  mounted() {
    this.gotoTop();
  },
};
</script>

<style scoped lang="scss">
.main-banner {
}
.slide-item {
  height: calc(100vh - 5.84rem);
  background-position: center;
  background-size: cover;
}
</style>
