<script setup>
import Image from '../assets/image/woman-in-brown-jacket-and-black-shirt-1.jpg';
import { Carousel, Pagination, Slide } from 'vue3-carousel';

defineProps({
    feedbacks: {
        type: Array,
        default: [
            {
                image: Image,
                author: 'Jane Doe',
                text: 'Thank you for all the amazing produce and products you deliver each week… you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and',
            },
            {
                image: Image,
                author: 'May Linn',
                text: 'Thank you for all the amazing produce and products you deliver each week… you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and',
            },
            {
                image: Image,
                author: 'Li Hua',
                text: 'Thank you for all the amazing produce and products you deliver each week… you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and',
            },
        ]
    }

})
</script>

<template>
    <div class="feedback-icon"></div>
    <carousel :items-to-show="1"  wrapAround="true" autoplay="8000">
        <slide v-for="feedback in feedbacks" :key="feedback" class="slider">
            <div class="feedback">
                <img class="feedback__image" :src="feedback.image">
                <h2 class="feedback__author">{{ feedback.author }}</h2>
                <ul class="stars">
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                    <li class="star"></li>
                </ul>
                <p class="feedback__text">{{ feedback.text }} </p>
            </div>
        </slide>

        <template #addons>
            <pagination />
        </template>
    </carousel>

</template>

<style scoped>
.feedback {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20rem;
}

.feedback-icon {
    width: 59rem;
    height: 49rem;
    background: url("./icons/quote.svg") no-repeat center;
    margin: 0 auto;
}

.feedback__image {
    width: 98rem;
    height: 98rem;
    border-radius: 100%;
    overflow: hidden;
}

.feedback__author {
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 400;
    font-size: 26rem;
    line-height: 35rem;
    margin: 18rem 0;
    text-align: center;
}

.feedback__text {
    max-width: 542rem;
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 400;
    font-size: 16rem;
    line-height: 40rem;
    margin: 18rem 0;
    text-align: center;
}

.stars {
    display: flex;
    padding: 0;
    gap: 10rem;
}

.star {
    width: 20rem;
    height: 20rem;
    background: url("./icons/star.svg") no-repeat center;
    object-fit: contain;
}
</style>