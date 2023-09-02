<script setup>
const hasError = false;

defineProps({
    modelValue: String,
    label: String,
    value: String,
    placeholder: String,
    typeInput: {
        type: String,
        default: 'text',
    }
})

defineEmits(['update:modelValue'])
</script>

<template>
    <label class="form__label" htmlFor="surname">
        {{ label }}
            <textarea
                :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    class="form__field"
                    :class="{'form__field_error': hasError}"
                    :type="typeInput"
                    :placeholder="placeholder"
                    @keyup.enter="$emit('input-enter')"
            >
            </textarea>
    </label>
</template>

<style scoped>

.form__field:focus {
    outline: none;
}

.form__label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12rem;
    line-height: 12rem;
    color: rgba(45, 47, 51, 0.45);
    width: 100%;
}

.form__field {
    border-radius: 10rem;
    border: 2px solid var(--c-border);
    box-sizing: border-box;
    font-family: var(--font-text);
    font-style: normal;
    font-weight: 500;
    font-size: 16rem;
    line-height: 30rem;
    color: var(--c-text);
    padding: 12rem 0 12rem 15rem;
    width: 100%;
    height: 178rem;
}

.form__field_error {
    color: #EE3465;
    border-bottom-color: #EE3465;
}

</style>