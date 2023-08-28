<script setup>
import Promo from '@/components/Promo.vue';
import Section from '@/components/Section.vue';
</script>

<template>
  <main>
    <Promo/>
    <Section
      decoration
      title="Welcome to Nature"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua."
    >
    </Section>
    <Section
      title="Proudly presented by"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua."
    >
    </Section>

    <Section
      title="Subscribe to Our Newsletter"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua."
    >
    </Section>
    <Section
      decoration
      title="Read Our Blog"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua."
    >
    </Section>
  </main>
</template>
