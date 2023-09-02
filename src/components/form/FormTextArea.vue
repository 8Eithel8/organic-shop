<script setup>
import DanderMessage from '@/components/DanderMessage.vue';
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
        <div class="form__field-wrapper">
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
<!--            <DanderMessage v-if="hasError"/>-->
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: rgba(45, 47, 51, 0.45);
}

.form__field {
    border-radius: 10rem;
    border: 2px solid var(--c-border);
    box-sizing: border-box;
    font-family: var(--font-text);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: var(--c-text);
    padding: 12px 0 12px 15px;
    max-width: 241rem;
}

.form__field_error {
    color: #EE3465;
    border-bottom-color: #EE3465;
}

</style>