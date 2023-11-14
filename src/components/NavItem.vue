<template>
  <li className="nav-item">
    <a className="nav-link active text-dark" aria-current="page" :href="href">
      {{ title }}
    </a>
  </li>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>