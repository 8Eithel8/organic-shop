<script setup>
  defineProps({
      data: Object,
  })
</script>

<template>
<div class="card">
    <img class="card__image" :src="data.image">
    <div class="card__container">
        <h3 class="card__title">{{ data.title }}</h3>
        <p class="card__text">{{ data.text }}</p>
        <slot></slot>
    </div>
</div>
</template>

<style scoped>
  .card {
      width: 278rem;
      opacity: 1;
      transition: opacity 0.3s ease;
  }

  .card:hover {
      opacity: .5;
      background: var(--c-background);
      transition: opacity 0.3s ease;
      cursor: pointer;
  }

  .card__image {
      width: 278rem;
      height: 195rem;
      object-fit: cover;
      object-position: center;
      border-top-left-radius: 20rem;
      border-top-right-radius: 20rem;
  }

  .card__container {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .card__title {
      font-family: var(--font-text);
      color: var(--c-text-secondary);
      font-weight: 400;
      font-size: 18rem;
      line-height: 24rem;
      margin: 18rem 0 9rem;
      text-align: center;
  }

.card__text {
      font-family: var(--font-text);
      color: var(--c-text);
      font-weight: 400;
      font-size: 14rem;
      line-height: 19rem;
      margin: 0;
      text-align: center;
      padding-bottom: 10rem;
  }

</style>