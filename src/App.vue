<template>
  <div id="app" :class="appClass">
    <!--
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  props: {},
  data: () => {
    return {
      appClass: "",
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.appClass = "app-mounted";
    }, 200);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Courgette&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.font-menu {
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 400;
  letter-spacing: 0.4rem;
}
.font-menu-small {
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 400;
  letter-spacing: 0.1rem;
}
.font-footer {
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 400;
  letter-spacing: 0.08rem;
}
.font-hand-writing-1,
.font-hand-writing-1 span {
  font-family: "Permanent Marker", cursive;
}
.font-hand-writing-2,
.font-hand-writing-2 span {
  font-family: "Courgette", cursive;
}
.font-hand-writing-3,
.font-hand-writing-3 span {
  font-family: "Pacifico", cursive;
}

#app {
  background-color: white;
  opacity: 0;
  transition: opacity 0.4s ease;
  &.app-mounted {
    opacity: 1;
  }
}

* {
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none !important;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.h8 {
  display: block;
  font-size: 0.938rem;
}
.h9 {
  display: block;
  font-size: 0.875rem;
}
.h10 {
  display: block;
  font-size: 0.77rem;
}
.h11 {
  display: block;
  font-size: 0.688rem;
}

.font-weight-100 {
  font-weight: 100 !important;
}
.font-weight-200 {
  font-weight: 200 !important;
}
.font-weight-300 {
  font-weight: 300 !important;
}
.font-weight-400 {
  font-weight: 400 !important;
}
.font-weight-500 {
  font-weight: 500 !important;
}
.font-weight-600 {
  font-weight: 600 !important;
}
.font-weight-700 {
  font-weight: 700 !important;
}
.font-weight-800 {
  font-weight: 800 !important;
}

.text-gray-800 {
  color: #666;
}

.mt-8 {
  margin-top: 4.5rem !important;
}
.mt-n8 {
  margin-top: -4.5rem !important;
}
.mt-n10 {
  margin-top: -6.25rem !important;
}

.mb-6 {
  margin-bottom: 3.5rem !important;
}
.mb-7 {
  margin-bottom: 4rem !important;
}
.mb-8 {
  margin-bottom: 4.5rem !important;
}
.mb-9 {
  margin-bottom: 5.625rem !important;
}
.mb-10 {
  margin-bottom: 6.25rem !important;
}
.mb-n1 {
  margin-bottom: -0.25rem !important;
}

.my-7 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.pt-7 {
  padding-top: 4rem;
}
.pt-8 {
  padding-top: 4.5rem;
}
.pt-9 {
  padding-top: 5.625rem;
}
.pt-10 {
  padding-top: 6.25rem;
}
.pt-11 {
  padding-top: 7.25rem;
}
.pb-6 {
  padding-bottom: 3rem;
}
.pb-7 {
  padding-bottom: 4rem;
}
.pb-9 {
  padding-bottom: 5.625rem;
}
.pb-10 {
  padding-bottom: 6.25rem;
}

.py-6 {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}
.py-7 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.py-9 {
  padding-top: 5.625rem;
  padding-bottom: 5.625rem;
}
.py-10 {
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
}

.hide-the-last {
  &:last-child .the-last {
    display: none;
  }
}

.clickable {
  cursor: pointer;
  user-select: none;
}
</style>
