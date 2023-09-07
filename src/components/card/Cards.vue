<script setup>
import Card from '@/components/card/Card.vue';

defineProps({
    cards: {
        type: Object,
        default: [
            {
                title: 'Organic Food',
                text: 'Lorem ipsum dolor sit  amet, consectetur',
            },
            {
                title: 'Organic Food',
                text: 'Lorem ipsum dolor sit  amet, consectetur1',
            },
            {
                title: 'Organic Food',
                text: 'Lorem ipsum dolor sit  amet, consectetur2',
            },
            {
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
            <Card :text="card.text" :title="card.title"/>
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