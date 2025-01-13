<template>
  <div class="container py-5">
    <h1 class="display-4 mb-5">
      <span class="l1">E</span><span class="l2">I</span><span class="l3">D</span
      ><span class="l4">&nbsp;</span><span class="l5">M</span
      ><span class="l6">O</span><span class="l7">H</span
      ><span class="l8">A</span><span class="l9">M</span
      ><span class="l10">E</span><span class="l11">D</span>
    </h1>
    <div class="img-container">
      <img class="eid" src="../public/eid.png" alt="me" />
    </div>
    <div class="row">
      <div class="col-lg-8">
        <personalinfo :data="data" class="mb-lg-4" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            intro: "",
            date: "",
          },
        ],
      };
    },
    methods: {
      date() {
        this.data.date = new Date().toString();
      },
      text() {
        this.data.intro =
          "passionate about creating clean, efficient, and user-friendly applications.";
      },
    },
    mounted() {
      setInterval(this.date, 1000);
      this.text();
    },
  };
</script>
<style scope>
  .container {
    margin: 0.4rem auto;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 1px 1px 5px #14213d;
  }
  .img-container {
    display: inline-block;
    width: 200px;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 400px;
    border-bottom-left-radius: 300px;
    border-bottom-right-radius: 500px;
    margin-left: 150px;
    border: 5px solid transparent;
    animation: borderr 2s ease infinite;
  }
  .eid {
    box-sizing: border-box;
    box-shadow: 5px 1px 10px #14213d;
    background-color: #14213d;
    width: 200px;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 400px;
    border-bottom-left-radius: 300px;
    border-bottom-right-radius: 500px;
    display: inline-block;
  }

  @keyframes borderr {
    0% {
      border-left: 5px solid #c1121f;
    }
    25% {
      border-top: 5px solid #c1121f;
    }
    100% {
      border: 5px solid transparent;
    }
  }
  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  h1 {
    display: inline-block;
    transition: all 2s;
    margin-top: 50px;
  }
  h1 > span {
    display: inline-block;
    animation: jump 4s infinite;
    font-size: 4rem;
  }
  @media (min-width: 362px) {
    h1 > span {
      font-size: 3rem;
    }
  }

  h1 > .l1 {
    animation-delay: 0s;
  }
  h1 .l2 {
    animation-delay: 0.2s;
  }
  h1 .l3 {
    animation-delay: 0.4s;
  }
  h1 .l4 {
    animation-delay: 0.6s;
  }
  h1 .l5 {
    animation-delay: 0.8s;
  }
  h1 .l6 {
    animation-delay: 1s;
  }
  h1 .l7 {
    animation-delay: 1.2s;
  }
  h1 .l8 {
    animation-delay: 1.4s;
  }
  h1 .l9 {
    animation-delay: 1.6s;
  }
  h1 .l10 {
    animation-delay: 1.8s;
  }
  h1 .l11 {
    animation-delay: 2s;
  }
  h1:hover {
    color: #c1121f;
  }
</style>
