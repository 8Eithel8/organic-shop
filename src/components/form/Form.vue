<script setup>
import Button from '@/components/Button.vue';

defineExpose({ open });
defineProps({
    onSubmit: {
        type: Function,
        default: () => {},
    },
    textConfirm: String,
    styleSubmit: String,
    buttonStile: String,
});

</script>

<template>
    <form class="form"
          @submit="onSubmit"
    >
        <fieldset class="form__fields">
            <slot/>
        </fieldset>
        <Button class="form__button" :class="styleSubmit" type="submit">{{ textConfirm }}</Button>
    </form>
</template>

<style scoped>

.form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 3rem;
    gap: 25rem;
    max-width: 523rem;
    padding: 0;
    z-index: 10;
}

.form_row {
    flex-direction: row;
}

.form__fields {
    border: none;
    padding: 0;
    gap: 25rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 523rem;
    outline: none;
    align-items: center;
}

.form__button {
    align-self: end;
    padding: 11rem 53rem 11rem 44rem;
}

.center {
    align-self: center;
}
</style>