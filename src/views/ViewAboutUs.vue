<template>
  <div class="about-us">
    <PartHeader />
    <div>Content of about us.</div>
    <PartFooter />
  </div>
</template>

<style lang="scss"></style>

<script>
import PartHeader from "@/components/PartHeader.vue";
import PartFooter from "@/components/PartFooter.vue";

export default {
  name: "ViewAboutUs",
  components: {
    PartHeader,
    PartFooter,
  },
};
</script>
