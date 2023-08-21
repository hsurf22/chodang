<template>
  <div class="about-us">
    <PartHeader />
    <b-container class="pt-10 pb-5">
      <h1 class="font-hand-writing-1 text-center">
        <span class="strong">Eat, Drink</span><br />
        and <span class="strong">Enjoy</span> Korean food cultures<br />
        with your friends and family!
      </h1>
    </b-container>
    <b-container class="text-center">
      <img style="max-width: 70%; opacity: 1" :src="Friends" alt="Friends" />
    </b-container>
    <b-container class="pt-7 pb-10 text-center">
      <div
        class="font-hand-writing-1 text-center description"
        style="font-size: 2rem; max-width: 60%; display: inline-block"
      >
        <span>Cho Dang Tofu & BBQ</span> was founded in 2005 in Cerritos,
        California. We are committed to providing our customers with delicious
        and authentic Korean food at a fair price. <br /><br />

        <img :src="kfood2" alt="K-Food" style="max-width: 12rem" />
        <br /><br />

        We have a wide variety of dishes to choose from, including tofu soups,
        BBQ, and other Korean specialties and we also have a
        <span>vegetarian menu</span> for those who do not eat meat or dairy.
        Also there are three different levels of spiciness for our tofu soups:
        <span>mild</span>, <span>spicy</span>, and <span>very spicy</span>. We
        want everyone to be able to enjoy our food, no matter their spice
        tolerance.<br /><br />

        <img :src="kfood1" alt="K-Food" style="max-width: 25rem" />
        <br /><br />

        If this is your <span>first time visiting</span> our restaurant, please
        let us know. We would be happy to give you more information about our
        menu and <span>help you choose the perfect dish.</span><br /><br />

        <img :src="kfood3" alt="K-Food" style="max-width: 16rem" />
        <br /><br />

        Sharing your experiences about our food on social media helps us a lot!
        <span>Please share pictures and you experiences with others.</span> We
        hope you enjoy your meal at Cho Dang Tofu & BBQ!
      </div>
    </b-container>
    <PartFooter />
  </div>
</template>

<style lang="scss"></style>

<script>
import PartHeader from "@/components/PartHeader.vue";
import PartFooter from "@/components/PartFooter.vue";
import Friends from "@/assets/img/etc/friends.svg";
import kfood1 from "@/assets/img/etc/k-food-1.svg";
import kfood2 from "@/assets/img/etc/k-food-2.svg";
import kfood3 from "@/assets/img/etc/k-food-3.svg";

export default {
  name: "ViewAboutUs",
  components: {
    PartHeader,
    PartFooter,
  },
  data: () => {
    return {
      Friends: Friends,
      kfood1: kfood1,
      kfood2: kfood2,
      kfood3: kfood3,
    };
  },
};
</script>

<style scoped lang="scss">
span {
  color: #df4636 !important;
  &.strong {
    font-size: 3rem;
  }
}
</style>
