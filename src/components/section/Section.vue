<script setup>
defineProps({
    title: {
        type: String,
        default: "Документы",
    },
    text: {
        type: String,
        default: "Документы",
    },
    decoration: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <section class="section">
        <div class="section__decoration" v-show="decoration"></div>
        <h2 class="section__title">{{ title }}</h2>
        <p class="section__text">{{ text }}</p>
        <slot></slot>
    </section>
</template>

<style scoped>
.section {
    max-width: 1366rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100rem 139rem;
    margin: 0 auto;
}

.section:last-of-type {
    padding: 16rem 139rem 100rem 139rem;
}

.section__decoration {
    width: 60rem;
    height: 48rem;
    background: url("../icons/decoration.svg") no-repeat center;
}

.section__title {
    font-family: var(--font-text);
    color: var(--c-text);
    font-style: normal;
    font-weight: 400;
    font-size: 36rem;
    line-height: 48rem;
    margin: 15rem 0 19rem 0;
}

.section__text {
    max-width: 568rem;
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 400;
    font-size: 16rem;
    line-height: 21rem;
    margin: 0 0 82rem 0;
    text-align: center;
}
</style>