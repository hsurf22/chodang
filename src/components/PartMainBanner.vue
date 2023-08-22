<template>
  <div class="main-banner">
    <Flicking
      :options="{
        align: 'prev',
        circular: true,
        autoInit: true,
        duration: 1000,
      }"
      :plugins="plugins"
      @move-end="onMoveEnd"
    >
      <div
        class="slide-item"
        style="
          width: 100%;
          background-image: url(/data/images/banner/banner-1.jpg);
          padding: 7rem 0;
        "
      >
        <b-container>
          <BannerTextBlock />
        </b-container>
      </div>
      <div
        class="slide-item"
        style="
          width: 100%;
          background-image: url(/data/images/banner/banner-1.jpg);
          padding: 7rem 0;
        "
      >
        <b-container>
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
        new AutoPlay({ duration: 6000, direction: "NEXT", stopOnHover: true }),
      ],
    };
  },
  methods: {
    onMoveEnd() {},
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
