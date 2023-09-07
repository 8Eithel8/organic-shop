<script setup>
const hasError = false;

defineProps({
    modelValue: String,
    label: String,
    value: String,
    placeholder: String,
    styleInput: String,
    typeInput: {
        type: String,
        default: 'text',
    },
});

defineEmits(['update:modelValue']);
</script>

<template>
    <label class="form__label" htmlFor="surname">
        {{ label }}
        <div class="form__field-wrapper">
            <input
                    :class="styleInput, {'form__field_error': hasError}"
                    :placeholder="placeholder"
                    :type="typeInput"
                    :value="modelValue"
                    class="form__field"
                    @input="$emit('update:modelValue', $event.target.value)"
            />
        </div>
    </label>
</template>

<style scoped>

.form__field:focus {
    outline: none;
}

.form__field-wrapper {
    position: relative;
}

.form__label {
    font-family: var(--font-text);
    font-style: normal;
    font-weight: 400;
    font-size: 12rem;
    line-height: 12rem;
    color: rgba(45, 47, 51, 0.45);
}

.form__field {
    border-radius: 10rem;
    border: 2rem solid var(--c-border);
    box-sizing: border-box;
    font-family: var(--font-text);
    font-style: normal;
    font-weight: 400;
    font-size: 16rem;
    line-height: 16rem;
    color: var(--c-text);
    padding: 11rem 0 11rem 15rem;
    max-width: 241rem;
}

.form__field_outline {
    outline: none;
    border-radius: 30rem;
    box-sizing: border-box;
    font-family: var(--font-text);
    font-style: normal;
    font-size: 16rem;
    color: var(--c-text);
    padding: 15rem 45rem;
    max-width: 462rem;
    border: none;
    font-weight: 400;
    line-height: 40rem;
    text-align: start;
}

.form__field_error {
    color: #EE3465;
    border-bottom-color: #EE3465;
}

.form__field_subscribe {
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