<template>
  <hooper :autoPlay="true" :playSpeed="3500" id="slider">
    <slide>
      <img src="../assets/portfolio.png" />
    </slide>
    <slide>
      <img src="../assets/daytra.png" />
    </slide>
    <slide>
      <img src="../assets/blog.png" />
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";

import "hooper/dist/hooper.css";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperNavigation
  }
};
</script>

<style scoped>
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
.hooper {
  height: 100%;
}
#slider {
  z-index: -1;
}
</style>
