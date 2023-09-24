<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import HorizontalLayout from '@/components/layout/HorizontalLayout.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <HorizontalLayout top="header" bottom="footer" center="main">
        <template v-slot:top >
            <Header/>
        </template>
        <slot>
            <RouterView />
        </slot>
        <template v-slot:bottom >
            <Footer/>
        </template>
    </HorizontalLayout>

</template>

<style scoped>
</style>
