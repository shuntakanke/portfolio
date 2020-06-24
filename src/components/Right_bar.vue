<template>
<transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
  <div class="right-bar" >
    <router-link to="/" class="home">
      <img src="../assets/home.png" width="51px" class="home" />
    </router-link>
    <a href="#" @click="clickSmoothScroll1()">
      <img src="../assets/user.svg" width="51px" class="user" />
    </a>
    <a href="#" @click="clickSmoothScroll2()" class="work-nav">
      <img src="../assets/portfolio.svg" width="51px" class="portfolio" />
    </a>
    <a href="https://twitter.com/s_h_i_y_u_n_434">
      <img src="../assets/twitter.png" width="51px" class="twitter" />
    </a>
    <a href="https://www.instagram.com/shiyun434/">
      <img src="../assets/instagram.png" width="51px" class="instagram" />
    </a>
    <a
      href="https://mail.google.com/mail/?view=cm&to=shunta.kanke1.618@gmail.com&su=Webサイト製作の相談"
    >
      <img src="../assets/gmail.png" width="51px" class="gmail" />
    </a>
  </div>
</transition>
</template>

<script>
import gsap from 'gsap'
export default {
  methods: {
    clickSmoothScroll1 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#about-section'),
        400,
        null,
        null,
        'y'
      )
    },
    clickSmoothScroll2 () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#work-section'),
        400,
        null,
        null,
        'y'
      )
    },beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translateX(+69px)'
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
.home {
  margin: 0 auto;
  margin-bottom: 0.8rem;
}
.right-bar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 69px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: #fff;
}

.right-bar a {
  margin: 0 auto;
  margin-bottom: 0.8rem;
}
img {
  margin: 0 auto;
  margin-bottom: 2rem;
}
.home {
  margin-top: 8rem;
}
.work-nav {
  padding-left: 0.3rem;
}
.portfolio {
  margin-bottom: 5rem;
}
</style>
