<template>
  <div>
      <Nuxt-layout>
        <NuxtPage />
      </Nuxt-layout>
  </div>
</template>
<script></script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  li {
    background-color: transparent !important;
  }
  a {
    cursor: pointer !important;
    color: #14213d !important;
    background-color: transparent !important;
    text-decoration: none;
  }
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
