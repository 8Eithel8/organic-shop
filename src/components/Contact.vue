<script setup>

import Form from '@/components/form/Form.vue';
import FormInput from '@/components/form/FormInput.vue';
import FormTextArea from '@/components/form/FormTextArea.vue';
</script>

<template>
    <section class="section">
        <h2 class="section__title">Send us a message</h2>
        <p class="section__text">Feel free to fill out the form and reach to us. We will get back to you shortly.</p>
        <Form textConfirm="submit">
            <FormInput placeholder="First Name"/>
            <FormInput placeholder="Last Name"/>
            <FormInput placeholder="Email" type="email"/>
            <FormInput placeholder="Phone" type="phone"/>
            <FormTextArea placeholder="Message"/>
        </Form>
    </section>
</template>

<style scoped>
.section {
    max-width: 1366rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100rem 139rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}

.section::before {
    display: block;
    position: absolute;
    content: '';
    top: 50rem;
    right: 0;
    width: 353rem;
    height: 694rem;
    background: url("../assets/image/leaf-right.png") no-repeat center;
}

.section::after {
    display: block;
    position: absolute;
    content: '';
    bottom: 50rem;
    left: 0;
    width: 281rem;
    height: 378rem;
    background: url("./icons/logo.svg") no-repeat right;
    background-size: cover;
    opacity: .1;
}

.section__title {
    font-family: var(--font-text);
    color: var(--c-text);
    font-style: normal;
    font-weight: 700;
    font-size: 36rem;
    line-height: 48rem;
    margin: 0 0 22rem 0;
}

.section__text {
    max-width: 450rem;
    font-family: var(--font-text);
    color: var(--c-text);
    font-weight: 400;
    font-size: 20rem;
    line-height: 30rem;
    margin: 0 0 82rem 0;
    text-align: center;
}
</style>