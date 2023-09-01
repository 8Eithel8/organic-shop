<script setup>
defineProps(
    {
        onClick: {
            type: Function,
        },
        type: {
            type: String,
            default: "button",
        },
        skin: {
            type: String,
            default: "dark",
        }
    }
)
</script>

<template>
    <button class="button" :class="skin" :type="type" @click="onClick">
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
}
.ellipse {
    border-radius: 30rem;
    padding: 15rem 45rem;
}

</style>