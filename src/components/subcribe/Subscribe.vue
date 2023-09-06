<script setup>
import Button from '@/components/Button.vue';
import Form from '@/components/form/Form.vue';
import FormInput from '@/components/form/FormInput.vue';
</script>

<template>
    <form class="subscribe">
        <input class="subscribe__field" placeholder="Enter your email address" type="email"/>
        <Button class="ellipse" type="submit">Subscribe</Button>
    </form>
    <Form class="form_row" styleSubmit="ellipse" textConfirm="Subscribe">
        <FormInput class="form__field_outline" placeholder="Enter your email address"/>
    </Form>
</template>

<style scoped>
.subscribe__field {
    outline: none;
    border-radius: 30rem;
    padding: 15rem 45rem;
    border: none;
    max-width: 462rem;
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 400;
    font-size: 16rem;
    line-height: 40rem;
    text-align: start;
}
</style>