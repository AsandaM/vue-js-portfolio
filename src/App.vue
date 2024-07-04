<template>
  <div id="app">
      <NavBarComp />
      <spinner-comp v-if="loading"></spinner-comp>
      <template v-else>
        <main class="main-content">
        <transition name="flip" mode="out-in">
          <router-view />
        </transition>
      </main>
      <FooterComp />
    </template>
  </div>
</template>

<script>
import NavBarComp from "./components/NavbarComp.vue";
import FooterComp from "./components/FooterComp.vue";
import SpinnerComp from "./components/SpinnerComp.vue";

export default {
  components: {
    NavBarComp,
    FooterComp,
    SpinnerComp
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
body {
  
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #d6dbd8 63%, #1a3a33 40%);
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  background-color: #d6dbd8;
}

.main-content {
  flex: 1;
  padding: 1rem;
  text-align: left;
}

footer {
  background-color: #1a3a33;
  color: white;
  text-align: center;
  padding: 20px 0;
}

footer p {
  color: #00000080;
}

.svg-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
}

.flip-enter-active, .flip-leave-active {
  transition: transform 1s ease;
}

.flip-enter, .flip-leave-to {
  transform: rotateY(180deg);
}
</style>
