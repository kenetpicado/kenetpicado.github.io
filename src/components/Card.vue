<template>
  <div class="card mb-5">
    <div :id="`carousel${images}`" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="img in [1, 2, 3]" :class="[ img == 1 ? 'active' : '']">
          <img :src="`/images/${images}-${img}.png`" class="d-block w-100" />
        </div>
      </div>
      <button class=" carousel-control-prev" type="button" :data-bs-target="`#carousel${images}`" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" :data-bs-target="`#carousel${images}`" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="card-body">
      <h5 class="card-title fw-bolder">
        {{ title }}
      </h5>
      <p class="card-text">
        <slot></slot>
      </p>
    </div>
    <div class="card-footer">
      <span class="badge bg-dark">
        {{ technology }}
      </span>
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  technology: {
    type: String,
    required: true,
  },
});

</script>