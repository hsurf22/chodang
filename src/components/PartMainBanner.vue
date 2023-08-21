<template>
  <div class="main-banner">
    <div class="banner-item banner1">
      <img :src="Banner1" alt="Tofu set 1" />
      <div class="banner-text">
        <b-container style="height: 100%">
          <div class="text-block p-4">
            <h3
              class="text-center text-uppercase font-weight-800"
              style="margin-bottom: 0.313"
            >
              Location information
            </h3>
            <h5 class="text-center text-uppercase mb-4">Diamond Bar</h5>
            <div
              class="h8 text-center font-weight-800 text-gray-800 text-uppercase mb-2"
            >
              Business hours
            </div>
            <div class="h9 text-center mb-4">We are open from 9AM - 11PM</div>

            <div
              class="h8 text-center font-weight-800 text-gray-800 text-uppercase mb-2"
            >
              Address
            </div>
            <div class="h9 text-center">
              1155 S Diamond Bar Blvd #M
              <br />
              Diamond Bar, CA 91765
            </div>
            <div class="h9 text-center">
              (We are located inside the Diamond Bar Towne Center)
            </div>
            <a
              href="https://www.google.com/maps/place/Cho+Dang+Tofu+Restaurant/@34.0413509,-117.9333359,10.01z/data=!3m1!5s0x80c32c8dafa2d463:0x993adb89e792ccdd!4m14!1m7!3m6!1s0x80c32c8db034fbdf:0x4c4611f3bd033179!2sCho+Dang+Tofu+Restaurant!8m2!3d34.002587!4d-117.811318!16s%2Fg%2F1vfn6y4s!3m5!1s0x80c32c8db034fbdf:0x4c4611f3bd033179!8m2!3d34.002587!4d-117.811318!16s%2Fg%2F1vfn6y4s?entry=ttu"
              target="_blank"
              style="text-decoration: none; color: white"
            >
              <div class="mt-4 text-center google-maps-link">
                <img
                  class="google-maps"
                  :src="Location"
                  alt="Cho Dang Tofu Diamond Bar Google Maps link"
                />
                <div class="h11 mt-2">
                  <img
                    style="height: 0.938rem"
                    :src="GoogleMaps"
                    alt="Google Maps"
                  />
                  Click here to see the location<br />
                  on Google Maps®
                </div>
              </div>
            </a>
          </div>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import BannerImg from "@/assets/img/banner/tofu-set3.jpg";
import GoogleMaps from "@/assets/img/icons/google-maps-icon.svg";
import DiamondBar from "@/assets/img/maps/diamond-bar.png";

export default {
  name: "PartMainBanner",
  props: {
    msg: String,
  },
  data: () => {
    return {
      GoogleMaps: GoogleMaps,
      Location: DiamondBar,
      Banner1: BannerImg,
      slide: true,
    };
  },
  mounted: () => {},
};
</script>

<style scoped lang="scss">
.banner-item {
  position: relative;
  width: 100%;
  height: auto;
  > img {
    width: 100%;
    height: auto;
    opacity: 100%;
  }
  .banner-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .text-block {
    max-width: 20rem;
    background-color: rgb(18 22 24 / 91%);
    color: #fff;
    margin-top: 3.125rem;
  }
}
.google-maps-link {
  .google-maps {
    border-radius: 50%;
    height: 6.25rem;
    width: 6.25rem;
    transition: all 0.2s ease;
  }

  &:hover {
    .google-maps {
      filter: drop-shadow(0 0 0.625rem rgba(255, 255, 255, 0.5));
    }
  }
}
</style>
