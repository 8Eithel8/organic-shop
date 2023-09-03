<script setup>
import Image from '../../assets/image/card-img.png';

defineProps({
    image: {
        type: String,
        default: Image,
    },
    title: {
        type: String,
        default: 'Organic Food',
    },
    text: {
        type: String,
        default: 'Lorem ipsum dolor sit  amet, consectetur',
    },
});
</script>

<template>
    <div class="card">
        <img :src="image" class="card__image">
        <h3 class="card__title">{{ title }}</h3>
        <p class="card__text">{{ text }}</p>
    </div>
</template>

<style scoped>
.card {
    width: 240rem;
    border: 1rem dashed var(--c-card-border);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 52rem 40rem 21rem 40rem;
    border-radius: 10rem;
    opacity: 1;
    transition: opacity 0.3s ease;
}

.card:hover {
    opacity: .8;
    background: var(--c-background);
    transition: opacity 0.3s ease;
    cursor: pointer;
}

.card__title {
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 700;
    font-size: 18rem;
    line-height: 24rem;
    margin: 27rem 0 14rem;
    text-align: center;
}

.card:hover :is(.card__title, .card__text) {
    color: var(--c-text-secondary);
    transition: color 0.3s ease;
}

.card__text {
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 400;
    font-size: 14rem;
    line-height: 19rem;
    margin: 0;
    text-align: center;
    padding-bottom: 30rem;
}
</style>