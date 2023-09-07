<script setup>
defineProps(
    {
        onClick: {
            type: Function,
        },
        type: {
            type: String,
            default: 'button',
        },
    },
);
</script>

<template>
    <button :type="type" class="button" @click="onClick">
        <slot></slot>
    </button>
</template>


<style scoped>
.button {
    border: none;
    border-radius: 10rem;
    background-color: var(--c-background-secondary);
    padding: 15rem 64rem 15rem 48rem;
    font-family: var(--c-text);
    font-style: normal;
    font-weight: 700;
    font-size: 18rem;
    line-height: 24rem;
    text-transform: capitalize;
    color: var(--c-text-light);
    opacity: 1;
    transition: opacity .3s ease;
    cursor: pointer;
}

.button:hover {
    opacity: .5;
    transition: opacity .3s ease;
}

.ellipse {
    border-radius: 30rem;
    padding: 15rem 45rem;
}

.button_outline {
    padding: 10rem 36rem;
    border: 2rem solid var(--c-link);
    border-radius: 10rem;
    background: transparent;
    color: var(--c-text);
}

.button_small {
    padding: 8rem 30rem;
    font-size: 16rem;
    line-height: 21rem;
    font-weight: 400;
}

</style>