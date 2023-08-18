<template>
  <div class="home">
    <PartHeader />
    <PartMainBanner />
    <PartMenu />
    <PartFooter />
  </div>
</template>

<script>
import PartHeader from "@/components/PartHeader.vue";
import PartMainBanner from "@/components/PartMainBanner.vue";
import PartMenu from "@/components/PartMenu.vue";
import PartFooter from "@/components/PartFooter.vue";

export default {
  name: "HomeView",
  components: {
    PartHeader,
    PartFooter,
    PartMainBanner,
    PartMenu,
  },
};
</script>
