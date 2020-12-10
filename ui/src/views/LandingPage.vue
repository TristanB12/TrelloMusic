<template>
  <div>
    <main>
      <img src="../assets/headphone1.png" alt="">
      <div class="cta-container">
        <div class="slogan">
          Experience the pleasure of music with
          <h4>TrelloMusic</h4>
        </div>
        <router-link :to="{name: 'SignupPage'}">
          <button class="filled-btn">Try for free</button>
        </router-link>
        <p>or</p>
        <router-link :to="{name: 'LoginPage'}">
          <button class="empty-btn">Login</button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'LandingPage',
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