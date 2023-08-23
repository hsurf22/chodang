<template>
  <div class="locations">
    <PartHeader />
    <div class="page-title text-center pt-20 pb-10">
      <h1 class="font-hand-writing-1">
        Our locations<br />
        and information
      </h1>
    </div>
    <div>
      <b-row
        v-for="(location, locationKey) in locations"
        :key="locationKey"
        style="border-top: 5px solid white"
      >
        <!-- ================================================ -->
        <!-- Location image -->
        <!-- ================================================ -->
        <b-col cols="6">
          <img
            class="location-image"
            :src="location.image"
            :alt="location.name"
          />
        </b-col>
        <b-col
          class="location-description d-flex flex-column justify-content-center align-items-center py-5"
          cols="6"
        >
          <!-- ================================================ -->
          <!-- Location name -->
          <!-- ================================================ -->
          <h1 class="font-hand-writing-1 text-center" style="color: #df4636">
            {{ location.name }}
          </h1>
          <h5 class="font-hand-writing-2 text-center my-4">
            {{ location.address1 }}<br />
            {{ location.address2 }}
          </h5>
          <div class="d-flex justify-content-center align-items-center">
            <a :href="location.google_maps_url" target="_blank">
              <div class="h10 text-uppercase font-weight-800">
                <b-icon icon="pin-map"></b-icon> Get directions
              </div>
            </a>
            <div
              style="
                height: 1.5rem;
                width: 0;
                border-left: 1px solid white;
                margin: 0 1rem;
              "
            ></div>
            <div class="h10 text-uppercase font-weight-800">
              <b-icon icon="phone"></b-icon> {{ location.phone }}
            </div>
          </div>
          <div class="text-center mt-4 font-menu-small font-weight-800">
            {{ location.sun }}<br />
            {{ location.mon }}<br />
            {{ location.tue }}<br />
            {{ location.wed }}<br />
            {{ location.thu }}<br />
            {{ location.fri }}<br />
            {{ location.sat }}
          </div>
          <div
            class="font-menu-small h10 font-weight-600 d-flex align-items-center justify-content-center mt-5"
          >
            <div class="mx-2">
              <b-icon
                v-if="location.delivery"
                icon="check-square-fill"
              ></b-icon>
              <b-icon v-else icon="square"></b-icon>
              DELIVERY
            </div>
            <div class="mx-2">
              <b-icon
                v-if="location.carryout"
                icon="check-square-fill"
              ></b-icon>
              <b-icon v-else icon="square"></b-icon>
              CARRYOUT
            </div>
            <div class="mx-2">
              <b-icon v-if="location.dine_in" icon="check-square-fill"></b-icon>
              <b-icon v-else icon="square"></b-icon>
              DINE-IN
            </div>
            <div class="mx-2">
              <b-icon
                v-if="location.online_order"
                icon="check-square-fill"
              ></b-icon>
              <b-icon v-else icon="square"></b-icon>
              ONLINE ORDER
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <PartFooter />
  </div>
</template>

<script>
import axios from "axios";
import PartHeader from "@/components/PartHeader.vue";
import PartFooter from "@/components/PartFooter.vue";

export default {
  name: "ViewLocations",
  components: {
    PartHeader,
    PartFooter,
  },
  data: () => {
    return {
      locations: null,
    };
  },
  methods: {
    async getLocationsData() {
      const res = await axios.get("/data/locations.json");
      const data = res.data;
      this.locations = data.locations;
    },
  },
  mounted() {
    this.getLocationsData();
    this.gotoTop();
  },
};
</script>

<style scoped lang="scss">
.locations {
  --text-color: #1d1d1d;

  a {
    color: var(--text-color);
  }
}
.page-title {
  color: var(--text-color);
}
.location-image {
  width: 105%;
}
.location-description {
  color: var(--text-color);
  background-image: url(@/assets/img/backgrounds/bg-texture-3.jpg);
  background-size: cover;
}
</style>
