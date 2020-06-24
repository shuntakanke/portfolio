<template>
  <div id="about-section">
    <div v-if="$resize && $mq.above(992)">
      <div class="container">
      <div class="about-left">
        <img src="../assets/aboutMe.jpg" width="250px" />
        <h4>菅家 俊太</h4>
        <h5>Shunta Kanke</h5>
        <h6>Web Developer</h6>
      </div>
      <div class="about-right">
        <div class="about-title">
          <h3>ABOUT</h3>
          <p>紹介</p>
        </div>
        <div class="about-description">
          <p>2019年の夏からWeb制作を行っています。</p>
          <p>企画➡︎設計➡︎デザイン➡︎コーディング➡︎公開 まで</p>
          <p>一貫して行っております。</p>
          <p>現在はGoogleのデジタルマーケティングコースで</p>
          <p>公開後のサポートのための学習をしております。</p>
          <p>お気軽にご連絡ください。</p>
        </div>
      </div>
    </div>
    </div>
    <div v-else>
      <div class="container-responsive">
      <div class="about-left-responsive">
        <img src="../assets/aboutMe.jpg" width="200px" />
        <h4 class="name-ja">菅家 俊太</h4>
        <h5 class="name-en">Shunta Kanke</h5>
        <h6 class="job">Web Developer</h6>
      </div>
      <div class="about-right-responsive">
        <div class="about-title-responsive">
          <h3>ABOUT</h3>
          <p>紹介</p>
        </div>
        <div class="about-description-responsive">
          <p>2019年の夏からWeb制作を行っています。</p>
          <p>企画➡︎設計➡︎デザイン➡︎コーディング➡︎公開 まで</p>
          <p>一貫して行っております。</p>
          <p>現在はGoogleのデジタルマーケティングコースで</p>
          <p>公開後のサポートのための学習をしております。</p>
          <p>お気軽にご連絡ください。</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#about-section {
  width: 100%;
}
.container {
  width: 960px;
  margin: 0 auto;
  display: flex;
}
.about-left {
  width: 30%;
  margin-bottom: 8.3rem;
}
.about-left img {
  margin-top: 8.3rem;
}
.about-left h4 {
  font-size: 4rem;
  font-weight: normal;
  margin-top: 2.1rem;
}
.about-left h5 {
  font-size: 3rem;
  font-weight: normal;
  margin-top: 1rem;
}
.about-left h6 {
  font-size: 2.1rem;
  font-weight: bold;
  margin-top: 1rem;
}
.about-right {
  width: 70%;
  display: flex;
  flex-direction: column;
}
.about-title {
  height: 30%;
}
.about-title h3 {
  font-size: 4.5rem;
  font-weight: bold;
  margin-top: 8.3rem;
  margin-left: 12rem;
}
.about-title p {
  margin-top: 1rem;
  margin-left: 18.5rem;
  font-size: 1.8rem;
  font-weight: bold;
}
.about-description {
  height: 70%;
  margin-top: 4.5rem;
}
.about-description p {
  margin-left: 12rem;
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 2;
}

/* media query 992px */
 .container-responsive {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
}
.about-left-responsive {
  width: 30%;
  margin-bottom: 8.3rem;
}
.about-left-responsive img {
  margin-top: 8.3rem;
}
.about-left-responsive h4 {
  font-size: 4rem;
  font-weight: normal;
  margin-top: 2.1rem;
}
.about-left-responsive h5 {
  font-size: 3rem;
  font-weight: normal;
  margin-top: 1rem;
}
.about-left-responsive h6 {
  font-size: 2.1rem;
  font-weight: bold;
  margin-top: 1rem;
}
.about-right-responsive {
  width: 70%;
  display: flex;
  flex-direction: column;
}
.about-title-responsive {
  height: 30%;
}
.about-title-responsive h3 {
  font-size: 4.5rem;
  font-weight: bold;
  margin-top: 8.3rem;
  margin-left: 12rem;
}
.about-title-responsive p {
  margin-top: 1rem;
  margin-left: 18.5rem;
  font-size: 1.8rem;
  font-weight: bold;
}
.about-description-responsive {
  height: 70%;
  margin-top: 4.5rem;
}
.about-description-responsive p {
  margin-left: 12rem;
  font-size: 2.4rem;
  font-weight: normal;
  line-height: 2;
}
</style>
