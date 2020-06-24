<template>
  <div class="container">
    <div v-if="$resize && $mq.above(992)">
      <div class="inner">
      <img class="paw-1" src="@/assets/dog.svg" />
      <img class="paw-2" src="@/assets/dog.svg" />
      <img class="paw-3" src="@/assets/dog.svg" />
      <img class="paw-4" src="@/assets/dog.svg" />
      <img class="paw-5" src="@/assets/dog.svg" />
      <img class="paw-6" src="@/assets/dog.svg" />
      <router-link to="/about" class="next">
        <h3>Next</h3>
      </router-link>
    </div>
    </div>
    <div v-else>
      <div class="inner-responsive">
      <img class="paw-1 small paw01" src="@/assets/dog.svg" />
      <img class="paw-2 small paw02" src="@/assets/dog.svg" />
      <img class="paw-3 small" src="@/assets/dog.svg" />
      <img class="paw-4 small" src="@/assets/dog.svg" />
      <img class="paw-5 small" src="@/assets/dog.svg" />
      <img class="paw-6 small" src="@/assets/dog.svg" />
      <router-link to="/about" class="next">
        <h3 class="small-text">Next</h3>
      </router-link>
    </div>
    </div>
    
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    let tl = gsap.timeline();
    tl.to(".inner", {
      duration: 2,
    });
    tl.to(".paw-1", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "bounce.out"
    });
    tl.to(
      ".paw-2",
      { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
      "<.3"
    );
    tl.to(
      ".paw-3",
      { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
      "<.3"
    );
    tl.to(
      ".paw-4",
      { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
      "<.3"
    );
    tl.to(
      ".paw-5",
      { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
      "<.3"
    );
    tl.to(
      ".paw-6",
      { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
      "<.3"
    );
    tl.to(
      "h3",
      {opacity:1, scale:1,duration:0.5, ease:"expo.out"},
      "<.3"
    );
  }
};
</script>

<style scoped>
.container {
  position: relative;
}
.inner {
  height: 8rem;
  position: absolute;
  bottom: 5%;
  left: 0%;
  display: flex;
}
img {
  transform: scale(0);
  opacity: 0;
}
.paw-1,
.paw-3,
.paw-5 {
  align-self: flex-end;
  margin-right: 3rem;
}
.paw-2,
.paw-4,
.paw-6 {
  align-self: flex-start;
  margin-right: 3rem;
}
.paw01, 
.paw02 {
  display: none;
  
}
h3 {
  color: white;
  font-size: 3.5rem;
  align-self: flex-end;
  opacity:0;
}
.next {
  text-decoration: none;
  display: flex;
}

/* media query 996px */

.inner-responsive {
  height: 6rem;
  position: absolute;
  bottom: 5%;
  left: 0%;
  display: flex;
}
img {
  transform: scale(0);
  opacity: 0;
}
.paw-1,
.paw-3,
.paw-5 {
  align-self: flex-end;
  margin-right: 2rem;
}
.paw-2,
.paw-4,
.paw-6 {
  align-self: flex-start;
  margin-right: 2rem;
}
.small {
  width:2rem;
}
h3 {
  color: white;
  font-size: 2.5rem;
  align-self: flex-end;
  opacity:0;
}
.small-text  {
  font-size: 2.1rem;
}
.next {
  text-decoration: none;
  display: flex;
}
</style>
