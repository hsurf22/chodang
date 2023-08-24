<template>
  <div class="object-close-button" :class="isOpen ? 'closed' : ''">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "ObjectCloseButton",
  props: {
    isOpen: Boolean,
  },
  data: () => {
    return {};
  },
};
</script>

<style scoped lang="scss">
.object-close-button {
  cursor: pointer;
  display: inline-block;
  position: relative;
  height: 50px;
  padding: 15px;

  div {
    width: 25px;
    height: 0px;
    transition: all 0.3s ease;
    border-bottom: 3px solid white;
  }

  div:nth-child(1) {
    transform: translateY(0px);
  }
  div:nth-child(2) {
    transform: translateY(5px);
  }
  div:nth-child(3) {
    transform: translateY(10px);
  }

  &.closed {
    div:nth-child(1) {
      transform: rotate(45deg) translateY(5px) translatex(5px);
    }
    div:nth-child(2) {
      transform: rotate(-45deg) translatey(3px) translateX(-3px);
    }
    div:nth-child(3) {
      opacity: 0;
    }
  }
}
</style>
