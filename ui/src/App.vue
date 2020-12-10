<template>
  <div id="app">
    <HeaderBar />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';

  export default {
    components: {
      HeaderBar,
    },
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap');

body {
  overflow-x: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Maven Pro', sans-serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.filled-btn {
  font-family: 'Maven Pro', sans-serif;
  font-weight: 500;
  padding: .3em .7em;
  border: 2px solid #8854D0;
  border-radius: 0.2em;
  background-color: #A55EEA;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #8854D0;
  }
}

.empty-btn {
  font-family: 'Maven Pro', sans-serif;
  font-weight: 500;
  padding: .3em .7em;
  border: 2px solid #A55EEA;
  border-radius: 0.2em;
  background-color: white;
  color: #A55EEA;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #A55EEA;
    color: white;
    border: 2px solid #A55EEA;
  }
}

.input {
  font-family: 'Maven Pro', sans-serif;
  color: black;
  padding: .3em 0em;
  border: none;
  border-bottom: 3px solid #A55EEA;
  outline: none;

  &::placeholder {
    color: black;
  }
}

.error {
  color: red;
  font-size: 18px;
  font-weight: 400;
}
</style>
