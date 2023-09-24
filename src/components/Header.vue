<script setup>
import Logo from '@/components/logo/Logo.vue';
</script>

<template>
    <header class="header">
        <div class="header__container">
            <Logo/>
            <nav class="nav">
                <ul class="nav__links">
                    <li>
                        <RouterLink class="nav__link" to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav__link" to="/products">Products</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav__link" to="/blog">Blog</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav__link" to="/about-us">About Us</RouterLink>
                    </li>
                </ul>
                <RouterLink class="nav__link nav__link_contact" to="/contact">Contact</RouterLink>
            </nav>
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

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50rem;
}

.nav__links {
    display: flex;
    gap: 50rem;
    padding: 0;
    list-style: none;
    align-items: center;
}

/*.nav__link:hover {*/
/*    border-bottom: 2rem solid var(--c-link);*/
/*}*/

.nav__link {
    color: rgb(55, 75, 92);
    font-family: var(--font-text);
    font-size: 16px;
    font-weight: 400;
    line-height: 21rem;
    letter-spacing: 0px;
    text-align: left;
    text-decoration: none;
    padding: 7rem 0;
    border-bottom: 2rem solid transparent;
}

.nav__link_current {
    border-bottom: 2rem solid var(--c-link);
}

.nav__link_contact {
    padding: 10rem 36rem;
    border: 2rem solid var(--c-link);
    border-radius: 10rem;
}

.nav__link_contact:hover {
    background: var(--c-background-secondary);
    color: var(--c-text-light);
}

</style>