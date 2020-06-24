<template>
  <header>
    <div class="container">
      <div class="left">
        <router-link to="/" class="h1">Shun Portfolio</router-link>
      </div>
      <div @click="toggleModal">
        <transition name="fade" mode="out-in">
          <div v-if="isOpen">
            <img src="@/assets/bar.svg" class="bar" />
          </div>
        </transition>
        <transition name="fade" mode="out-in">
          <div v-if="isClose">
            <img src="@/assets/close.svg" class="close" />
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      isClose: false
    };
  },
  methods: {
    toggleModal() {
      (this.isOpen = !this.isOpen), (this.isClose = !this.isClose);
    }
  }
};
</script>

<style scoped>
header {
  height: 70px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 300;
}
.container {
  max-width: 1180px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.h1 {
  font-size: 2.7rem;
  color: white;
  margin-left: 1.4rem;
  text-decoration: none;
  font-weight: bold;
}
img {
  height: 3.3rem;
  margin-right: 1.4rem;
}
.close {
  color: white;
  font-size: 1.6rem;
  padding-right: 0.3rem;
}
</style>
