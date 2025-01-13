<template>
  <div class="container py-5">
    <h1 class="display-4 mb-4">About Me</h1>
    <div class="row">
      <div class="col-lg-8">
        <p class="lead mb-5">
          {{ aboutData.introduction }}
        </p>

        <h2 class="h3">Experience</h2>
        <div class="border-start border-3 ps-4">
          <div
            v-for="exp in aboutData.experience"
            :key="exp.company"
            class="mb-lg-5"
          >
            <h3 class="h5 mb-1">{{ exp.company }}</h3>
            <p class="text-muted mb-2">{{ exp.role }} • {{ exp.period }}</p>
            <p class="mb-0">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        aboutData: {},
      };
    },
    methods: {
      async fetch() {
        let result = await axios.get("_nuxt/data/about.json");
        if (result.status == 200) {
          this.aboutData = result.data.about;
        }
      },
    },
    async mounted() {
      this.fetch();
    },
  };
</script>

<style scoped>
  .border-start {
    border-color: #007bff !important;
  }
  @media (min-width:362px) {
    .mb-lg-5 {
      margin-bottom: 2.5rem;
    }
  }
  .h3 {
    margin-bottom: 20px;
  }
</style>
