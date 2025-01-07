<template>
  <div class="container py-5">
    <section class="mb-5">
      <h2 class="h2 mb-4" style="text-align: center">Featured Projects</h2>
      <template>
        <div class="row g-4">
          <div
            v-for="project in projects"
            :key="project.id"
            class="col-md-6 item"
          >
            <ProjectCard :project="project" />
          </div>
        </div>
      </template>
    </section>

    <section>
      <h2 class="h2 mb-4" style="text-align: center">Technologies</h2>

      <template>
        <div class="d-flex flex-wrap justify-content-center gap-lg-4 wh">
          <div
            v-for="(tech, index) in technologies"
            :key="index"
            class="slide badge bg-transparent text-dark p-2 wh d-flex flex-column justify-content-center align-items-center text-center"
          >
            <img :src="tech.loc" :alt="tech.name" class="logos" />
            {{ tech.name }}
          </div>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        projects: [],
        technologies: [],
      };
    },
    async mounted() {
      axios
        .get("_nuxt/data/db.json")
        .then((res) => {
          this.projects = res.data.projects;
          this.technologies = res.data.technologies;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  };
</script>
<style>
  .container {
    box-shadow: none !important;
    border-radius: 0 !important;
  }
  .width-height {
    width: 250px;
    height: 250px;
  }
  .logos {
    width: 100px;
    height: 100px;
    margin: 0 auto 10px auto;
    border-radius: 0 !important;
    animation: lighter 3s ease infinite;
  }
  @keyframes lighter {
    0% {
      filter: drop-shadow(0 0 0rem #ffffff);
    }
    33% {
      filter: drop-shadow(0 0 0.5rem #14213d);
    }
    67% {
      filter: drop-shadow(0 0 0rem #14213d);
    }
    100% {
      filter: drop-shadow(0 0 0rem #ffffff);
    }
  }
  .logos:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 5px #14213d;
    transition: all 2s ease-in-out;
    border-radius: 50% !important;
  }
  section {
    border-radius: 5px;
    box-shadow: 1px 1px 5px #14213d;
    padding: 20px;
    min-height: 500px;
  }
</style>
