<script setup>
import Button from '@/components/Button.vue';
</script>

<template>
    <section class="promo">
        <div class="promo__text-block">
            <p class="promo__subtitle">Healthy life with</p>
            <h1 class="promo__title">Nature Organic</h1>
            <p class="promo__text">Vegetables are the edible parts of a plant that is used in cooking or can be eaten now.</p>
            <Button>Explore Now</Button>
        </div>
        <div class="promo__image"></div>
    </section>
</template>

<style scoped>

.promo {
    max-width: 1366rem;
    padding: 0 0 0 140rem;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    min-height: 687rem;
}

.promo__text-block {
    margin-top: 40rem;
    align-self: center;
    z-index: 2;
}

.promo__subtitle {
    font-family: var(--font-text);
    color: var(--c-text);
    font-style: normal;
    font-weight: 400;
    font-size: 36rem;
    line-height: 48rem;
}

.promo__title {
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 700;
    font-size: 56rem;
    line-height: 74rem;
    margin: 0;
    white-space: nowrap;
}

@media (max-width: 767px) {
    .promo__title {
        width: 260rem;
        font-size: 25rem;
        line-height: 35rem;
    }
}

.promo__text {
    max-width: 450rem;
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 400;
    font-size: 20rem;
    line-height: 27rem;
    margin: 35rem 0;
}

.promo__image {
    overflow: hidden;
    background: url('../assets/image/promo-background.svg') no-repeat;
    width: 804rem;
    height: 687rem;
    position: absolute;
    right: 0;
    bottom: 0;
}

/*@media (max-width: 1023px) {*/
/*    .promo__image {*/
/*        opacity: 0.6;*/
/*        right: -130px;*/
/*    }*/
/*}*/
</style>