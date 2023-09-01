<script setup>
import Logo from '@/components/logo/Logo.vue';
</script>

<template>
    <header class="header">
        <div class="header__container">
            <Logo/>
            <div class="header__block">
                <ul class="header__links">
                    <li><RouterLink class="header__link" to="/">Home</RouterLink></li>
                    <li><RouterLink class="header__link" to="/news">Products</RouterLink></li>
                    <li><RouterLink class="header__link" to="/docs">Blog</RouterLink></li>
                    <li><RouterLink class="header__link" to="/docs">About Us</RouterLink></li>
                </ul>
                <RouterLink class="header__link header__link_contact" to="/docs">Contact</RouterLink>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
}

@media (max-width: 759px) {
    .header {
        padding: 16rem;
    }
}

.header__container {
    max-width: 1366rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 19rem 117rem 0 140rem;
    align-items: center;
}

/*@media (max-width: 1263px) {*/
/*    .header__container {*/
/*        max-width: 788rem;*/
/*    }*/
/*}*/

.header__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50rem;
}

.header__links {
    display: flex;
    gap: 50rem;
    padding: 0;
    list-style: none;
    align-items: center;
}

/*.header__link:hover {*/
/*    border-bottom: 2rem solid var(--c-link);*/
/*}*/

.header__link {
    color: rgb(55, 75, 92);
    font-family: var(--font-text);
    font-size: 16px;
    font-weight: 400;
    line-height: 21rem;
    letter-spacing: 0px;
    text-align: left;
    text-decoration: none;
    padding: 7rem 0;
    border-bottom: 2rem solid  transparent;
}

.header__link_current {
    border-bottom: 2rem solid var(--c-link);
}

.header__link_contact {
    padding: 10rem 36rem;
    border: 2rem solid var(--c-link);
    border-radius: 10rem;
}

.header__link_contact:hover {
    background: var(--c-background-secondary);
    color: var(--c-text-light);
}

</style>