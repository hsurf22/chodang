<template>
  <div class="home">
    <PartHeader />

    <PartMainBanner />

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
