<template>
  <div class="footer">
    <div class="text-center logo-image">
      <img :src="LogoImg" alt="Cho Dang Tofu Logo" />
    </div>
    <div class="social-media"></div>
  </div>
</template>

<script>
import LogoImg from "@/assets/img/logo/chodang-logo-White-horizontal.png";

export default {
  name: "PartFooter",
  props: {
    msg: String,
  },
  data: () => {
    return {
      LogoImg: LogoImg,
    };
  },
};
</script>

<style scoped lang="scss">
.footer {
  background-color: #2b2b2b;
  padding: 5rem 0;
}
.logo-image {
  img {
    opacity: 0.8;
    max-height: 1.4rem;
  }
}
.social-media {
}
</style>
