<template>
  <div>
    <HeaderBar />
    <main>
      <img src="../assets/headphone1.png" alt="">
      <div class="cta-container">
        <div class="slogan">
          Experience the pleasure of music with
          <h4>TrelloMusic</h4>
        </div>
        <button class="filled-btn">Try for free</button>
        <p>or</p>
        <button class="empty-btn">Login</button>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
  export default {
    name: 'LandingPage',
    components: {
      HeaderBar,
    },
  }
</script>

<style lang="scss" scoped>
main {
  width: 80%;
  margin: auto;
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 92vh;
  grid-template-areas:
    "img cta";
}
img {
  grid-area: img;
  position: absolute;
  bottom: 0;
  max-height: 800px;
  height: 90%;
  width: auto;
}
.cta-container {
  grid-area: cta;
  height: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .slogan {
    font-size: 40px;
    text-align: center;
  }
  button {
    font-size: 1.6em;
  }
  p {
    font-size: 32px;
    font-weight: 600;
  }
}

@media screen and (max-width: 950px){
  img {
    display: none;
  }
  main {
    display: block;
    height: 90vh;

    .cta-container {
      height: 80%;
      margin: auto;
    }
  }
}
</style>