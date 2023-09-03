<script setup>

import Button from '@/components/buttons/Button.vue';
</script>

<template>
  <form class="subscribe">
      <input class="subscribe__field" type="email" placeholder="Enter your email address"/>
      <Button class="ellipse" type="submit">Subscribe</Button>
  </form>
</template>

<style scoped>
.subscribe__field {
    outline: none;
    border-radius: 30rem;
    padding: 15rem 45rem;
    border: none;
    max-width: 462rem;
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 400;
    font-size: 16rem;
    line-height: 40rem;
    text-align: start;
}
</style>