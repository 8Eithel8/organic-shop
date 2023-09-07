<script setup>
defineProps({
    link: String,
});
</script>

<template>
    <RouterLink class="card__link" to="link">Read More</RouterLink>
    <div class="card__line"></div>
</template>

<style scoped>
.card__link {
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 400;
    font-size: 14rem;
    line-height: 19rem;
    padding-bottom: 10rem;
    text-decoration: none;
    opacity: 1;
    transition: opacity .3s ease;
}

.card__link:hover {
    opacity: .5;
    background: var(--c-background);
    transition: opacity .3s ease;
    cursor: pointer;
}

.card__line {
    width: 36rem;
    height: 2rem;
    background: var(--c-background-secondary);
    margin-bottom: 11rem;
}

.card__link:hover ~ .card__line{
    opacity: .5;
    transition: opacity .3s ease;
    cursor: pointer;
}
</style>