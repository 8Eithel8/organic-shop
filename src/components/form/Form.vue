<script setup>
import Button from '@/components/buttons/Button.vue';

defineExpose({open});
defineProps({
    onSubmit: {
        type: Function,
        default: () => {},
    },
    textConfirm: String,
})
</script>

<template>
    <form class="form"
          @submit.prevent="onSubmit"
    >
        <fieldset class="form__fields">
            <slot/>
        </fieldset>
        <div class="form__buttons">
            <Button type="submit">{{ textConfirm }}</Button>
        </div>

    </form>
</template>

<style scoped>

.form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 3px;
    gap: 25px;
    max-width: 523rem;
    padding: 0;
}

.form__fields {
    border: none;
    padding: 10px 0;
    gap: 25px;
    display: flex;
    flex-wrap: wrap;
    /*flex-direction: column;*/
    width: 100%;
    outline: none;
}

.form__buttons {
    display: flex;
    gap: 20px;
    box-sizing: border-box;
    width: 100%;
}
</style>