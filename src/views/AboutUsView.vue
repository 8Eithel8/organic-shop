<script setup>
import SectionWithDecor from '@/components/section/SectionWithDecor.vue';
import Text from '@/components/Text.vue';
import Section from '@/components/section/Section.vue';
import Cards from '@/components/card/Cards.vue';
</script>

<template>
    <main>
        <SectionWithDecor
            title="About us"
        >
            <Text class="text_large-height">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </Text>
            <Text class="text_large-height">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </Text>
        </SectionWithDecor>
        <Section
            title="What we do"
            decoration
            text=""
        >
            <Text class="text_large-height">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua.
            </Text>
            <Cards/>
        </Section>
    </main>
</template>
