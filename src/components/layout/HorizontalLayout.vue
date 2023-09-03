<template>
    <component :is="root" :class="`container-horizontal ${modifier === '' ? '' : `container-horizontal_${modifier}`}`">
        <component :is="left" class="left">
            <slot name="left"></slot>
        </component>
        <component :is="center" class="center">
            <slot></slot>
        </component>
        <component :is="right" class="right">
            <slot name="right"></slot>
        </component>
    </component>
</template>

<script setup>
defineProps({
    root: {
        type: String,
        default: 'div',
    },
    modifier: {
        type: String,
        default: '',
    },
    left: {
        type: String,
        default: 'div',
    },
    center: {
        type: String,
        default: 'div',
    },
    right: {
        type: String,
        default: 'div',
    },
});
</script>

<style scoped>
.container-horizontal {
    margin: 0 auto;
    height: 100%;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
}
</style>
