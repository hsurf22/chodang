<template>
  <div class="home">
    <PartHeader />
    <b-container>
      <b-row>
        <b-col>1</b-col>
        <b-col>1</b-col>
        <b-col>1</b-col>
      </b-row>
      <b-row>
        <b-col>1</b-col>
        <b-col>1</b-col>
        <b-col>1</b-col>
      </b-row>
      <PartMainBanner />
    </b-container>

    <PartFooter />
  </div>
</template>

<script>
import PartHeader from "@/components/PartHeader.vue";
import PartFooter from "@/components/PartFooter.vue";
import PartMainBanner from "@/components/PartMainBanner.vue";

export default {
  name: "HomeView",
  components: {
    PartHeader,
    PartFooter,
    PartMainBanner,
  },
};
</script>
