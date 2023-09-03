<script setup>
import Text from '@/components/Text.vue';
import Section from '@/components/section/Section.vue';
import CardsBlog from '@/components/card/CardsBlog.vue';
import Button from '@/components/buttons/Button.vue';
</script>

<template>
    <main>
        <Section
            title="Blog"
            text=""
        >
            <Text class="text_large-size text_large-height">
                Feel free to fill out the form and reach to us. We will get back to you shortly.
            </Text>
            <CardsBlog/>
            <Button class="button_outline">Load More</Button>
        </Section>
    </main>
</template>
