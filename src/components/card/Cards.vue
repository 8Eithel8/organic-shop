<script setup>
import Card from '@/components/card/Card.vue';
import Image from '../../assets/image/card-img.png';

defineProps({
    cards: {
        type: Object,
        default: [
            {
                image: Image,
                title: 'Organic Food',
                text: 'Lorem ipsum dolor sit  amet, consectetur',
            },
            {
                image: Image,
                title: 'Organic Food',
                text: 'Lorem ipsum dolor sit  amet, consectetur1',
            },
            {
                image: Image,
                title: 'Organic Food',
                text: 'Lorem ipsum dolor sit  amet, consectetur2',
            },
            {
                image: Image,
                title: 'Organic Food',
                text: 'Lorem ipsum dolor sit  amet, consectetur3',
            },
        ],
    },
});
</script>

<template>
    <ul class="cards">
        <li v-for="card in cards" class="card">
            <Card :image="card.image" :text="card.text" :title="card.title"/>
        </li>
    </ul>
</template>

<style scoped>
.cards {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 35rem;
    justify-content: space-between;
}
</style>