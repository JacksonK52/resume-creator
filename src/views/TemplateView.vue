<script>
  import templatesData from '../data/templates.json';
  import { RouterLink } from 'vue-router';

  export default {
    data() {
      return { templates: templatesData }
    }
  }
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="template in templates" :key="template.id">
      <p>{{ template.title }}</p>
      <RouterLink class="link" to="/templates/resume-one">Resume One</RouterLink>
    </div>
  </div>
</template>

<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
