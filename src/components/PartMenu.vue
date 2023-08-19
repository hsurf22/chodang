<template>
  <div class="menu py-9">
    <b-container>
      <h2 class="menu-title text-center font-menu text-uppercase mb-6">
        Discover Our Menu
      </h2>
      <b-row>
        <b-col cols="3" class="menu-item text-center">
          <div class="menu-item-image mb-4">
            <img :src="TricolorJeon" alt="Tricolor Jeon" />
          </div>
          <div>
            <div class="menu-item-title font-menu-small">
              3 flavors Korean pancake
            </div>
            <div class="menu-item-subtitle font-menu-small">
              (Scallion, Kimchi, Potato curry)
            </div>
            <div class="menu-item-description">Soy sauce, Barley tea</div>
          </div>
        </b-col>
        <b-col cols="3" class="menu-item">
          <div class="menu-item-image">
            <img :src="TricolorJeon" alt="Tricolor Jeon" />
          </div>
        </b-col>
        <b-col cols="3" class="menu-item">
          <div class="menu-item-image">
            <img :src="TricolorJeon" alt="Tricolor Jeon" />
          </div>
        </b-col>
        <b-col cols="3" class="menu-item">
          <div class="menu-item-image">
            <img :src="TricolorJeon" alt="Tricolor Jeon" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import TricolorJeon from "@/assets/img/menu/tricolor-jeon.jpg";

export default {
  name: "PartMenu",
  props: {
    msg: String,
  },
  data: () => {
    return {
      TricolorJeon: TricolorJeon,
    };
  },
  methods: {
    async getMenuData() {
      const res = await axios.get("menu/menu.json");
      console.log(res.data);
      /*
      fetch("http://192.168.1.59:8080/menu.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });*/
    },
  },
  mounted() {
    this.getMenuData();
  },
};
</script>

<style scoped lang="scss">
.menu-title {
  color: white;
}
.menu {
  background-color: #121618;
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
  .menu-item-image {
    padding: 0 60px;
    > img {
      //border: 1px solid #717171;
      border-radius: 50%;
      width: 100%;
      box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
