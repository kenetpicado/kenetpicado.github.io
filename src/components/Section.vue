<template>
  <div class="mb-4">
    <h4 class="fw-bolder mb-4">{{ title }}</h4>
    <slot></slot>
    <hr class="text-secondary mt-3 mb-5 w-75 mx-auto" />
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
});

</script>
