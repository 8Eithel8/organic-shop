<script setup>
import 'vue3-carousel/dist/carousel.css';
import './slider.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import ImageFirst from '../../assets/image/imageFirst.svg';
import ImageSecond from '../../assets/image/imageSecond.svg';
import ImageThird from '../../assets/image/imageThird.svg';

defineProps({
    slides: {
        type: Array,
        default: [
            {
                image: ImageFirst,
            },
            {
                image: ImageSecond,
            },
            {
                image: ImageThird,
            },
            {
                image: ImageFirst,
            },
            {
                image: ImageSecond,
            },
            {
                image: ImageThird,
            },
            {
                image: ImageFirst,
            },
            {
                image: ImageSecond,
            },
            {
                image: ImageThird,
            },
            {
                image: ImageFirst,
            },
            {
                image: ImageSecond,
            },
            {
                image: ImageThird,
            },
        ]
    }
})
</script>

<template>

<carousel :items-to-show="5"  wrapAround="true" autoplay="8000">
<slide v-for="slide in slides" :key="slide" class="slider">
        <img :src="slide.image" alt="логотип"/>
</slide>

<template #addons>
    <pagination />
</template>
</carousel>
</template>

<style scoped>
.slider {
    display: flex;
    gap: 60rem;
    overflow: hidden;
}
</style>