<template>
  <div class="container py-5">
    <h1 class="display-4 mb-4">About Me</h1>
    <div class="row">
      <div class="col-lg-8">
        <p class="lead mb-4">
          {{ about.introduction }}
        </p>
        <h2 class="h3 mt-5 mb-4">Experience</h2>
        <div class="border-start border-2 ps-4 bl">
          <div v-for="exp in about.experience" :key="exp.company" class="mb-4">
            <h3 class="h5">{{ exp.company }}</h3>
            <p class="text-muted">{{ exp.role }} • {{ exp.period }}</p>
            <p>{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        about: {
          introduction:
            "I'm a Front-End developer who want to learn more and more to be the best version of myself and make a real effect.",
          experience: [
            {
              company: "Freelancer",
              role: "Junior Developer",
              period: "2020 - Present",
              description:
                "Leading development of web applications using modern technologies like JS & PY.",
            },
            // Add more experience...
          ],
        },
      };
    },
  };
</script>
<style>
  .bl {
    border-left: 4px solid #c1121f !important;
    padding-left: 1rem;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 1rem;
  }
</style>
