<template>
  <div id="app">
    <!--
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap");

* {
  font-family: "Roboto", sans-serif;
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
  font-size: 0.688rem;
}

.font-weight-100 {
  font-weight: 100;
}
.font-weight-200 {
  font-weight: 200;
}
.font-weight-300 {
  font-weight: 300;
}
.font-weight-400 {
  font-weight: 400;
}
.font-weight-500 {
  font-weight: 500;
}
.font-weight-600 {
  font-weight: 600;
}
.font-weight-700 {
  font-weight: 700;
}
.font-weight-800 {
  font-weight: 800;
}

.text-gray-800 {
  color: #666;
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
.mb-n1 {
  margin-bottom: -0.25rem !important;
}

.pb-6 {
  padding-bottom: 3rem;
}
.pb-7 {
  padding-bottom: 3.5rem;
}
.pb-9 {
  padding-bottom: 5.625rem;
}
.pb-10 {
  padding-bottom: 6.25rem;
}
.py-9 {
  padding-top: 5.625rem;
  padding-bottom: 5.625rem;
}
.py-10 {
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
}

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
</style>
