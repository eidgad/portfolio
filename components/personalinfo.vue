<template>
  <article class="mb-4">
    <div class="text-muted mb-2">{{ data.date }}</div>
    <h2 class="h3 mb-2 text-dark">I'm a</h2>
    <h2 id="auto" class="h3 mb-2 hh" style="color: #14213d"></h2>
    <p class="text-dark">{{ data.intro }}</p>
  </article>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    methods: {
      auto() {
        const text = "Front-End Developer";
        let i = 0;
        let speed = 300;
        function typeWriter() {
          if (i < text.length) {
            document.getElementById("auto").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          } else {
            document.getElementById("auto").innerHTML = "";
            i = 0;
            setTimeout(typeWriter, speed);
          }
        }
        typeWriter();
      },
    },
    mounted() {
      this.auto();
    },
  };
</script>
<style>
  article {
    border-left: 4px solid #c1121f;
    padding-left: 1rem;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 1rem;
  }
  .hh {
    transition: all 2s;
    height: 50px;
  }
  .hh:hover {
    color: #c1121f !important;
  }
</style>
