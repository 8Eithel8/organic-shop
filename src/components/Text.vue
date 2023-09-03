<script setup>
</script>

<template>
    <p class="text">
        <slot></slot>
    </p>
</template>

<style scoped>
.text {
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 400;
    font-size: 16rem;
    line-height: 21rem;
    text-align: center;
    padding-bottom: 30rem;
    z-index: 10;
    max-width: 617rem;
}

.text:last-of-type {
    padding-bottom: 0;
}

.text:first-of-type {
    padding-bottom: 30rem;
}

.text_large-size {
    font-size: 20rem;
}

.text_large-height {
    line-height: 30rem;
}

</style>