<template>
  <div class="home">
    <PartHeader />
    <PartFooter />
    <!--
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    -->
  </div>
</template>

<script>
import PartHeader from "@/components/PartHeader.vue";
import PartFooter from "@/components/PartFooter.vue";

export default {
  name: "HomeView",
  components: {
    PartHeader,
    PartFooter,
  },
};
</script>
