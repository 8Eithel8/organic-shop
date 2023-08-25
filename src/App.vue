<script setup>
import { RouterView } from 'vue-router'
import HorizontalLayout from './components/layout/HorizontalLayout.vue';
// import Header from '@/components/Header.vue';
// import Footer from '@/components/Footer.vue';
</script>

<template>
    <HorizontalLayout class="page" left="header" right="footer" center="main">
        <template v-slot:top>
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
.page {

}
</style>