<template>
  <div class="menu">
    <b-container>
      <b-row>
        <b-col class="menu-item">
          <img :src="TricolorJeon" alt="Tricolor Jeon" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
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
  mounted: () => {},
};
</script>

<style scoped lang="scss">
.menu {
  background-color: gray;
}
.menu-item {
  > img {
    border-radius: 50%;
    //height: 100px;
  }
}
</style>
