<script setup>
  import Card from '@/components/card/Card.vue';
  import Image from '../../assets/image/containers-with-products-table-with-copy-space_-1.jpg';
  import ImageSecond from '../../assets/image/eucalyptus-essential-oil-soap-green-background-zero-waste-natural-organic-bathroom-tools_-1.jpg';
  import ImageThird from '../../assets/image/potted-plant-near-cosmetics-bottles-jars_-1.jpg';
  import CardBlog from '@/components/card/CardBlog.vue';

  defineProps({
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
          ]
      }
})
</script>

<template>
  <ul class="cards">
      <li class="card" v-for="card in cards">
          <CardBlog :image="card.image" :title="card.title" :text="card.text"/>
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