<template>
  <div id="work-section">
    <div class="wrap">
      <img src="../assets/work.jpg" alt="" />
    </div>
    <div class="container">
      <div class="work-title">
        <h3>WORKS</h3>
        <p>実績</p>
      </div>
      <div class="slider">
        <WorkSlider />
      </div>
    </div>
  </div>
</template>

<script>
import WorkSlider from "@/components/Work_slider.vue";

export default {
  components: {
    WorkSlider
  }
};
</script>

<style scoped>
.wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  z-index: -1;
}
.wrap img {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-position: 0% 90%;
}

.container {
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.work-title {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 5.5rem;
}
.work-title h3 {
  font-size: 4.5rem;
  font-weight: bold;
  margin-top: 8.3rem;
}
.work-title p {
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
}
.slider {
  width: 100%;
  height: 100%;
  margin-bottom: 8.3rem;
}
</style>
