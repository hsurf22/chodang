<template>
  <div class="faq">
    <PartHeader />
    <div>
      <b-container class="pt-10 pb-10 text-center">
        <div style="max-width: 50rem; display: inline-block">
          <h1 class="font-hand-writing-1 text-center mb-7">
            Most frequently asked<br />
            questions from the people
          </h1>

          <h3 class="font-hand-writing-1 text-center mb-4">
            <span>What is the most popular menu?</span>
          </h3>
          <h3 class="font-hand-writing-1 text-center mb-7">
            It's definitely the CD Tofu. ($15.00(M) • $16.00(L)) This dish is
            made with a combination of Red Soup, Soft Tofu, Shrimp, Clam, Beef,
            Egg and Green onion.
          </h3>

          <h3 class="font-hand-writing-1 text-center mb-4">
            <span>
              How many hours in advance do you need to make a reservation?
            </span>
          </h3>
          <h3 class="font-hand-writing-1 text-center mb-7">
            We can accommodate walk-ins, but calling one to two hours in advance
            is recommended to guarantee a table.
          </h3>

          <h3 class="font-hand-writing-1 text-center mb-4">
            <span>
              Can you make a tofu soup that is absolutely not spicy?
            </span>
          </h3>
          <h3 class="font-hand-writing-1 text-center mb-7">
            Yes. Just make sure that the tofu soup is not spicy at all when you
            order it. We will make the soup mild by using a different spice
            blend.
          </h3>

          <h3 class="font-hand-writing-1 text-center mb-4">
            <span>
              Do you have birthday cakes available for the birthday person?
            </span>
          </h3>
          <h3 class="font-hand-writing-1 text-center mb-7">
            We're sorry that we don't have birthday cakes available, but you're
            welcome to bring your own. =)
          </h3>

          <h3 class="font-hand-writing-1 text-center mb-4">
            <span> Can you tell me where you source your tofu? </span>
          </h3>
          <h3 class="font-hand-writing-1 text-center mb-7">
            We make tofu in-house. =)
          </h3>

          <h3 class="font-hand-writing-1 text-center mb-4">
            <span>
              Are your tofu restaurants located in other states besides
              California?
            </span>
          </h3>
          <h3 class="font-hand-writing-1 text-center mb-7">
            No. We only have 4 locations in California at the moment.
          </h3>
        </div>
      </b-container>
    </div>
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
