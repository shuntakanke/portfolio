<template>
  <div class="top_bg">
    <TopCaption />
    <TopFootprint />
  </div>
</template>

<script>
import TopCaption from "@/components/Top_caption.vue";
import TopFootprint from "@/components/Top_footprint.vue";

export default {
  components: {
    TopCaption,
    TopFootprint
  }
};
</script>

<style scoped>
.top_bg {
  background-image: url("../assets/top.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  overflow: hidden;
}
</style>
