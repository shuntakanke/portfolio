<template>
  <div class="top_cover">
    <img src="../assets/top.png" class="top_img" />
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.top_cover {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60vh;
}

.top_img {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-position: 5% 80%;
}

header {
  display: none;
}
</style>
