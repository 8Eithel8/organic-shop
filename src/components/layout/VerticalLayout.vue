<template>
    <component :is="root" :class="`container-vertical ${modifier === '' ? '' : `container-vertical_${modifier}`}`">
        <component :is="top" class="top">
            <slot name="top"></slot>
        </component>
        <component :is="center" class="center">
            <slot></slot>
        </component>
        <component :is="bottom" class="bottom">
            <slot name="bottom"></slot>
        </component>
    </component>
</template>

<script setup>
defineProps( {
    root: {
        type: String,
        default: 'div',
    },
    modifier: {
        type: String,
        default: '',
    },
    top: {
        type: String,
        default: 'div',
    },
    center: {
        type: String,
        default: 'div',
    },
    bottom: {
        type: String,
        default: 'div',
    }
})
</script>

<style scoped>
.container-vertical {
    height: 100%;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
}
</style>