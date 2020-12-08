
<template>
  <div class="header-container">
      <div id="headerBar">
        <h1>TrelloMusic</h1>
        <nav>
          <ul class="nav-links">
            <li>Home</li>
            <li>Login</li>
            <li>Sign up</li>
          </ul>
        </nav>
        <div class="burger" @click="activeNavigation">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Headerbar',
    methods: {
      activeNavigation() {
        const nav = document.querySelector('.nav-links')
        const burger = document.querySelector('.burger')

        nav.classList.toggle('nav-active')
        burger.classList.toggle('toggle')
      }
    },
  }
</script>

<style lang="scss" scoped>
.header-container {
  background-color: #8854D0;
  height: 8vh;
}
#headerBar {
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  h1 {
    color: white;
    align-self: center;
  }
}

nav {
  width: 30%;
  align-self: center;

  ul {
    display: flex;
    justify-content: space-between;

    li {
      color: white;
      list-style: none;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.burger {
  display: none;
  align-self: center;

  div {
    width: 28px;
    height: 4px;
    background: white;
    margin: 6px;
    transition: all 0.3s ease-out;
  }
}
@media screen and (max-width: 1024px){
  nav {
    width: 50%;
  }
}

@media screen and (max-width: 768px){
  .nav-links {
    position: absolute;
    right: 0px;
    top: 8vh;
    height: 92vh;
    width: 40vw;
    background-color: #8854D0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .burger {
    display: block;
    cursor: pointer;
  }
  .nav-active {
    transform: translateX(0);
  }
  .toggle {
    .line1 {
      transform: rotate(-45deg) translate(-8px, 6px);
    }
    .line2 {
      opacity: 0;
    }
    .line3 {
      transform: rotate(45deg) translate(-8px, -6px);
    }
  }
}

</style>