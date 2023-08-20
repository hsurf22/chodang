<template>
  <div class="footer">
    <b-container class="footer-content">
      <div class="follow-us text-center mb-3">
        <img :src="FollowUs" alt="Follow us!" />
      </div>
      <div class="social-media text-center">
        <a href="https://facebook.com" target="_blank">
          <div class="social-icon-box">
            <b-icon icon="facebook"></b-icon>
          </div>
        </a>
        <a href="https://twitter.com" target="_blank">
          <div class="social-icon-box">
            <b-icon icon="twitter"></b-icon>
          </div>
        </a>
        <a href="https://twitter.com" target="_blank">
          <div class="social-icon-box">
            <b-icon icon="instagram"></b-icon>
          </div>
        </a>
        <a href="https://twitter.com" target="_blank">
          <div class="social-icon-box">
            <img :src="Tiktok" alt="Tiktok" style="filter: invert(1)" />
          </div>
        </a>
      </div>
      <div class="text-center font-footer mt-5">
        1155 S Diamond Bar Blvd #M Diamond Bar, CA 91765<br />
        © 2020-2023 Cho Dang Tofu, Inc.
      </div>
      <div class="text-center logo-image mt-4">
        <img :src="LogoImg" alt="Cho Dang Tofu Logo" />
      </div>
    </b-container>
  </div>
</template>

<script>
import LogoImg from "@/assets/img/logo/chodang-logo-White-horizontal.png";
import Tiktok from "@/assets/img/icons/tiktok.svg";
import FollowUs from "@/assets/img/icons/follow-us.svg";

export default {
  name: "PartFooter",
  props: {
    msg: String,
  },
  data: () => {
    return {
      LogoImg: LogoImg,
      Tiktok: Tiktok,
      FollowUs: FollowUs,
    };
  },
};
</script>

<style scoped lang="scss">
.follow-us {
  img {
    rotate: -15deg;
    height: 20rem;
  }
}
.footer {
  --content-opacity: 0.8;
  --text-color: white;

  background-color: #2b2b2b;
  background-image: url(@/assets/img/backgrounds/bg3.svg);
  background-size: 0.5rem;
  padding: 5rem 0;
}
.footer-content {
  opacity: var(--content-opacity);
  color: var(--text-color);
}
.logo-image {
  img {
    max-height: 1.4rem;
  }
}
.social-media {
  --box-size: 3.5rem;
  --icon-size: 1.4rem;

  .social-icon-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--box-size);
    height: var(--box-size);
    margin: 0 0.7rem;
    border: 1px solid white;
    border-radius: 50%;
  }
  .b-icon.bi {
    vertical-align: text-bottom;
    font-size: var(--icon-size);
  }
  img {
    vertical-align: text-bottom;
    height: var(--icon-size);
  }
  a {
    color: var(--text-color);
  }
}
</style>
