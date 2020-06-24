<template>
  <div class="container">
    <div v-if="$resize && $mq.above(992)">
      <div class="inner">
        <h1 id="title" class="title">
          <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            :css="false"
          >
            <span>Hello world.</span>
          </transition>
        </h1>
      </div>
    </div>
    
    <div v-else>
      <div class="inner-responsive">
        <h2 id="title" class="title-responsive">
          <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            :css="false"
          >
            <span>Hello world.</span>
          </transition>
        </h2>
      </div>
    </div>
    
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  methods: {
    beforeEnter(el) {
      el.style.display = "block";
      el.style.transform = "translate(0, 100%)";
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        transform: "translate(0, 0)",
        ease: "expo.out",
        onComplete: done
      });
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: white;
  text-align: center;
  font-size: 4rem;
  margin-top: 0.5rem;
  font-weight: bold;
}
.title {
  display: flex;
  overflow: hidden;
}


.title.-visible span {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.title span {
  transition: transform ease-out 0.3s ;
}
.container {
  position: relative;
}
.inner {
  width: 40rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
}


// media query 960px

h2 {
  color: white;
  text-align: center;
  font-size: 2.8rem;
  margin-top: 0.5rem;
  font-weight: bold;
}
.title-responsive {
  display: flex;
  overflow: hidden;
}


.title-responsive.-visible span {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
.title-responsive span {
  transition: transform ease-out 0.3s ;
}
.container {
  position: relative;
}
.inner-responsive {
  width: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
}

</style>
