<template>
  <div class="sticky-top" style="background-color: #ffffff">
    <ul class="nav">
      <li class="nav-item">
        <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link
          to="https://drive.google.com/file/d/12LmboVXgwjP2Bn3WIn2dBr1__Db3Xv7d/view?usp=sharing"
          >Resume</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .nav {
    width: 100%;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 10px;
    box-shadow: 1px 1px 5px #14213d;
  }
  a {
    text-decoration: none;
    color: #14213d !important;
  }
  li {
    padding: 5px;
  }
  .router-link-active,
  .router-link-exact-active {
    color: #c1121f !important;
  }
</style>
