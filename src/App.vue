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
* {
  font-family: "Roboto", sans-serif;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

h8 {
  display: block;
  font-size: 15px;
}
h9 {
  display: block;
  font-size: 14px;
}
h10 {
  display: block;
  font-size: 11px;
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

.mb-n1 {
  margin-bottom: -0.25rem !important;
}
</style>
