<template>
  <div class="contact-us">
    <PartHeader />
    <div>
      <b-container class="pt-10 pb-10">
        <h1 class="font-hand-writing-1 text-center">
          You can reach us through <br />
          Phone, e-mail or<br />
          Social Media<br />
        </h1>
        <h3 class="font-hand-writing-1 text-center mb-7">
          <span>
            For reservations,<br />
            please give us a call!
          </span>
        </h3>

        <h3 class="font-hand-writing-1 text-center mb-4">
          <span class="strong">Phone</span>
        </h3>
        <h3 class="font-hand-writing-1 text-center mb-4">
          Diamond Bar, CA
          <br />
          (909) 861-6565
        </h3>
        <h3 class="font-hand-writing-1 text-center mb-4">
          Cerritos, CA
          <br />
          (562) 924-6099
        </h3>
        <h3 class="font-hand-writing-1 text-center mb-4">
          Montrose, CA
          <br />
          (818) 249-2182
        </h3>
        <h3 class="font-hand-writing-1 text-center mb-9">
          Cypress, CA
          <br />
          (714) 886-2288
        </h3>

        <h3 class="font-hand-writing-1 text-center mb-4">
          <span class="strong">E-mail</span>
        </h3>
        <h3 class="font-hand-writing-1 text-center mb-9">
          info@chodang-tofu.com
        </h3>

        <h3 class="font-hand-writing-1 text-center mb-4">
          <span class="strong">Social Media</span>
        </h3>
        <h3 class="font-hand-writing-1 text-center">
          <a
            class="font-hand-writing-1"
            href="https://facebook.com"
            target="_blank"
          >
            Facebook
          </a>
          <br /><br />
          <a
            class="font-hand-writing-1"
            href="https://Twitter.com"
            target="_blank"
          >
            Twitter
          </a>
          <br /><br />
          <a
            class="font-hand-writing-1"
            href="https://Instagram.com"
            target="_blank"
          >
            Instagram
          </a>
          <br /><br />
          <a
            class="font-hand-writing-1"
            href="https://Tiktok.com"
            target="_blank"
          >
            Tiktok
          </a>
        </h3>
      </b-container>
    </div>
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

<style scoped lang="scss">
span {
  color: #df4636 !important;
  &.strong {
    font-size: 2.5rem;
  }
}
a {
  color: initial;
}
</style>
