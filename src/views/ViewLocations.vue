<template>
  <div class="locations">
    <PartHeader />
    <div>Content of locations</div>
    <PartFooter />
  </div>
</template>

<script>
import PartHeader from "@/components/PartHeader.vue";
import PartFooter from "@/components/PartFooter.vue";

export default {
  name: "ViewLocations",
  components: {
    PartHeader,
    PartFooter,
  },
};
</script>
