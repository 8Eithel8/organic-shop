<script setup>
import Text from '@/components/Text.vue';
import Section from '@/components/section/Section.vue';
import CardsProducts from '@/components/card/CardsProducts.vue';
</script>

<template>
    <main>
        <Section
            title="Products"
            text=""
        >
            <Text class="text_large-size text_large-height">
                Feel free to fill out the form and reach to us. We will get back to you shortly.
            </Text>
            <CardsProducts/>
        </Section>
    </main>
</template>
