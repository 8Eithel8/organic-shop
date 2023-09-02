<script setup>
import DanderMessage from '@/components/DanderMessage.vue';
const hasError = false;

defineProps({
    modelValue: String,
    label: String,
    value: String,
})

defineEmits(['update:modelValue'])
</script>

<template>
    <label class="form__label" htmlFor="surname">
        {{ label }}
        <div class="form__field-wrapper">
            <input
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    class="form__input-file"
                    :class="{'form__field_error': hasError}"
                    type="file"
                    @keyup.enter="$emit('input-enter', surname)"
                    accept=".jpg, .jpeg, .png"
            />
            <p class="form__title-file">Выбрать изображение</p>
            <DanderMessage v-if="hasError"/>
        </div>
    </label>
</template>

<style scoped>

.form__field:focus {
    outline: none;
}

.form__field-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 12px;
    box-sizing: border-box;
    width: 110px;
    height: 110px;
    margin-top: 17rem;
    border: 1px solid rgba(45, 47, 51, 0.1);
    border-radius: 8px;
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
    border: none;
    border-bottom: 1px solid rgba(45, 47, 51, 0.1);
    box-sizing: border-box;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #2D2F33;
    padding: 15px 15px 15px 0;
    width: 100%;
}

.form__title-file {
    font-family: 'PT Root UI';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: rgba(45, 47, 51, 0.5);
}

.form__input-file {
    outline:0;
    opacity:0;
    pointer-events:none;
    user-select:none;
}

.form__field_error {
    color: #EE3465;
    border-bottom-color: #EE3465;
}

</style>