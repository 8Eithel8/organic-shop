<script setup>

// const isOpen = ref(false);


</script>

<template>
    <div class="badge">
<!--        <p v-show="isOpen" class="badge__message">Может содержать только латинские символы и '-', '_' </p>-->
<!--        <button class="transparent"  @click.stop="isOpen = !isOpen" ></button>-->
    </div>
</template>

<style scoped>

.badge {
   position: absolute;
    content: '';
    top: 0;
    right: 0;
    z-index: 30;
}

.badge__message {
    background: #EE3465;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    padding: 6rem 10rem;
    position: absolute;
    top: -15rem;
    right: 40rem;
    width: max-content;
    max-width: 350rem;
}

.badge__icon {
    color: #EE3465;
}

.transparent {
    background: transparent;
    border: none;
    cursor: pointer;
}
</style>