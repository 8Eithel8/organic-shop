<script setup>
import Image from '../../assets/image/containers-with-products-table-with-copy-space_-1.jpg';
import ImageSecond from '../../assets/image/eucalyptus-essential-oil-soap-green-background-zero-waste-natural-organic-bathroom-tools_-1.jpg';
import ImageThird from '../../assets/image/potted-plant-near-cosmetics-bottles-jars_-1.jpg';
import CardLarge from '@/components/card/CardLarge.vue';
import CardLink from '@/components/card/CardLink.vue';
import Button from '@/components/Button.vue';
import { ref } from 'vue';

const props = defineProps({
    productToShow: {
        type: Number,
        default: 6,
    },
    isShow:
        {
            type: Boolean,
            default: true,
        },
    cards: {
        type: Object,
        default: [
            {
                image: Image,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: ImageSecond,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: ImageThird,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: Image,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: ImageSecond,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: ImageThird,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: Image,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: ImageSecond,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: ImageThird,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: ImageSecond,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: ImageThird,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: Image,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: ImageSecond,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
            {
                image: ImageThird,
                title: 'Blog Post One',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
                link: '/',
            },
        ],
    },
});

const productToShow = ref(props.productToShow)

</script>

<template>
    <ul class="cards">
        <li v-for="card in cards.slice(0, productToShow)" class="card">
            <CardLarge :data="card">
                <CardLink :to="cards.link"/>
            </CardLarge>
        </li>
    </ul>
    <Button class="button_outline" :onClick="() => productToShow+=3" v-show="isShow">Load More</Button>
</template>

<style scoped>
.cards {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 35rem;
    justify-content: space-between;
    margin-bottom: 57rem;
}
</style>