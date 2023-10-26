<script setup>
  import { RouterView } from 'vue-router'
  import Navigation from './components/Navigation.vue';
</script>

<template>
  <div class="app">
    <Navigation />
    <RouterView />
  </div>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style land="scss">
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
  }

  .app {
    min-height: 100vh;
    position: relative;
    background-color: #f1f1f1;
  }

  .container {
    padding: 0 20px;
    max-width: 1140px;
    margin: 0 auto;
  }
</style>
