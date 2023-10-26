<script>
//   import profileData from '../data/profile.json';
  import profileData from '../../data/profile.json';

  export default {
    data() {
      return { profile: profileData }
    }
  }
</script>

<template>
    <section class="hero">
        <div class="container">
            <h1 class="text-bold">{{ profile[0].first_name }} <span class="text-light">{{ profile[0].last_name }}</span></h1>
            <span class="text-muted">{{ `${profile[0].address} | ${profile[0].email} | ${profile[0].mobile}` }}</span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .hero {
        background-image: url("../../assets/hero-bg.png");
        background-attachment: fixed;
        position: relative;
        height: 100vh;
    }
    .container {
        width: 100%;
        position: absolute;
        top: 80px;
        left: 190px;
        background-color: #fff;
        font-size: 18px;
    }
    h1 {
        margin-top: 20px;
        font-size: 48px;
        text-align: center;
    }
    .text-muted {
        display: block;
        text-align: center;
        font-weight: 400;
        color: gray;
    }
    .text-bold {
        font-weight: 500;
    }
    .text-light {
        font-weight: 200;
    }
</style>