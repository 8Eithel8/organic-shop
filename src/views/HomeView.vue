<script setup>
import Promo from '@/components/Promo.vue';
import Section from '@/components/Section.vue';
import Cards from '@/components/card/Cards.vue';
import Slider from '@/components/slider/Slider.vue';
import FeedBack from '@/components/feedback/FeedBack.vue';
import Subscribe from '@/components/subcribe/Subscribe.vue';
import CardsBlog from '@/components/card/CardsBlog.vue';
</script>

<template>
  <main>
    <Promo/>
    <Section
      decoration
      title="Welcome to Nature"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua."
    >
      <Cards/>
      </Section>
    <Section
      title="Proudly presented by"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua."
    >
      <Slider/>
    </Section>
    <FeedBack/>
    <Section
      title="Subscribe to Our Newsletter"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua."
    >
        <Subscribe/>
    </Section>
    <Section
      decoration
      title="Read Our Blog"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua."
    >
        <CardsBlog/>
    </Section>
  </main>
</template>
