<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/header/Header.vue';
import VerticalLayout from '@/components/layout/VerticalLayout.vue';
import Footer from '@/components/footer/Footer.vue';
</script>

<template>
    <VerticalLayout top="header" bottom="footer" center="main">
        <template v-slot:top >
            <Header/>
        </template>
        <slot>
            <RouterView />
        </slot>
        <template v-slot:bottom >
            <Footer/>
        </template>
    </VerticalLayout>

</template>

<style scoped>
</style>
