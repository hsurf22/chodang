<template>
  <div class="header">
    <div>
      <img :src="Logo" alt="Main Logo" />
      <div>
        <div>menu</div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoImg from "@/assets/img/logo.png";

export default {
  name: "PartHeader",
  props: {
    msg: String,
  },
  data: () => {
    return {
      Logo: LogoImg,
    };
  },
};
</script>

<style scoped lang="scss"></style>
