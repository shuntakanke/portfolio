<template>
<transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
  <div class="left-bar" >
    <router-link to="/" class="h1">Shun.Portfolio</router-link>
  </div>
</transition >
</template>

<script>
import gsap from 'gsap'
export default {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translateX(-69px)'
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        transform: 'translateX(0px)',
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  }
};
</script>

<style scoped>
.left-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 69px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: #fff;
}

.h1 {
  font-size: 2.7rem;
  color: black;
  margin-top: 20rem;
  text-decoration: none;
  font-weight: bold;
  transform: rotate(90deg);
}
</style>
