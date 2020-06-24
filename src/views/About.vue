<template>
  <div class="about">
    <AboutBackground />
    <leftBar id="leftBar" />
    <rightBar id="rightBar" />
    <AboutSection />
    <Work />
    <Footer />
  </div>
</template>

<script>
import AboutBackground from "@/components/About_bg_2.vue";
import leftBar from "@/components/Left_bar.vue";
import rightBar from "@/components/Right_bar.vue";
import AboutSection from "@/components/About_section.vue";
import Work from "@/components/Work_section.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    AboutBackground,
    leftBar,
    rightBar,
    AboutSection,
    Work,
    Footer
  }
};
</script>

<style scoped>
/* #leftBar,
#rightBar {
  display: none;
} */
</style>
