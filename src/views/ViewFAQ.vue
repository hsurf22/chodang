<template>
  <div class="faq">
    <PartHeader />
    <div>Content of FAQ</div>
    <PartFooter />
  </div>
</template>

<script>
import PartHeader from "@/components/PartHeader.vue";
import PartFooter from "@/components/PartFooter.vue";

export default {
  name: "ViewFAQ",
  components: {
    PartHeader,
    PartFooter,
  },
};
</script>
