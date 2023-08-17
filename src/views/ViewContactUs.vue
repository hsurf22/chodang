<template>
  <div class="contact-us">
    <PartHeader />
    <div>Content of Contact us</div>
    <PartFooter />
  </div>
</template>

<script>
import PartHeader from "@/components/PartHeader.vue";
import PartFooter from "@/components/PartFooter.vue";

export default {
  name: "ViewContactUs",
  components: {
    PartHeader,
    PartFooter,
  },
};
</script>
