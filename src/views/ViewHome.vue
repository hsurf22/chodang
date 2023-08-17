<template>
  <div class="home">
    <PartHeader />
    <PartFooter />
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
