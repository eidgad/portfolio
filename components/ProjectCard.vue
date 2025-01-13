<template>
  <div class="card h-100" style="border: none">
    <div
      class="card-body hovering"
      style="border-left: 1px solid #c1121f; box-shadow: 1px 1px 5px #14213d"
    >
      <h3 class="card-title h5">{{ project.title }}</h3>
      <p class="card-text text-muted">
        {{ project.description }}
      </p>
      <div class="d-flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="badge bg-light text-dark"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  };
</script>
<style>
  .hovering {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 1px 1px 10px #c1221f !important;
    transition: all 2s ease;
  }
  .hovering:hover {
    box-shadow: 1px 1px 10px #14213d !important;
    transform: scale(1.05);
  }
</style>
