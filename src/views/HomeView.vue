<script setup>
import Promo from '@/components/Promo.vue';
import Section from '@/components/section/Section.vue';
import Cards from '@/components/card/Cards.vue';
import Slider from '@/components/slider/Slider.vue';
import FeedBack from '@/components/feedback/FeedBack.vue';
import Subscribe from '@/components/subcribe/Subscribe.vue';
import CardsBlog from '@/components/card/CardsBlog.vue';
import Text from '@/components/Text.vue';
</script>

<template>
  <main>
    <Promo/>
    <Section
      decoration
      title="Welcome to Nature"
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
        </Text>
      <Cards/>
      </Section>
    <Section
      title="Proudly presented by"
    >
      <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
      </Text>
      <Slider/>
    </Section>
    <FeedBack/>
    <Section
      title="Subscribe to Our Newsletter"
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
        </Text>
        <Subscribe/>
    </Section>
    <Section
      decoration
      title="Read Our Blog"
    >
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.
        </Text>
        <CardsBlog product-to-show="3" :isShow="false"/>
    </Section>
  </main>
</template>
