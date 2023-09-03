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
}

.card__line {
    width: 36rem;
    height: 2rem;
    background: var(--c-background-secondary);
    margin-bottom: 11rem;
}
</style>