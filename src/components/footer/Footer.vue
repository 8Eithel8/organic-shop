<script setup>
import LogoFooter from '@/components/logo/LogoFooter.vue';
import Copyright from '@/components/Copyright.vue';
</script>
<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__block">
                <LogoFooter/>
                <p class="footer__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor
                </p>
                <div>
                    <div class="footer__line"></div>
                    <Copyright/>
                </div>
            </div>
            <div>
                <h4 class="footer__title">Information</h4>
                <div class="footer__line"></div>
                <ul class="footer__links">
                    <li><RouterLink class="footer__link" to="/news">About Us</RouterLink></li>
                    <li><RouterLink class="footer__link" to="/docs">Products</RouterLink></li>
                    <li><RouterLink class="footer__link" to="/">Contact Us</RouterLink></li>
                    <li><RouterLink class="footer__link" to="/">Terms of Service</RouterLink></li>
                    <li><RouterLink class="footer__link" to="/">About Us</RouterLink></li>
                    <li><RouterLink class="footer__link" to="/">Products</RouterLink></li>
                    <li><RouterLink class="footer__link" to="/">Terms of Service</RouterLink></li>
                    <li><RouterLink class="footer__link" to="/">Terms of Service</RouterLink></li>
                </ul>
            </div>
            <div>
                <h4 class="footer__title">Follow Us</h4>
                <div class="footer__line"></div>
                <ul class="footer__social-links">
                    <li><a class="footer__social-link footer__social-link_fb" href="/"></a></li>
                    <li><a class="footer__social-link footer__social-link_in" href="/"></a></li>
                    <li><a class="footer__social-link footer__social-link_tw" href="/"></a></li>
                    <li><a class="footer__social-link footer__social-link_inst" href="/"></a></li>
                </ul>
            </div>


        </div>
    </footer>
</template>


<style scoped>
.footer {
    background: url("../../assets/back-footer.svg") repeat;
    background-size: cover;
}

.footer__container {
    max-width: 1366rem;
    margin: 0 auto;
    padding: 120rem 117rem 20rem 140rem;
    display: grid;
    grid-template-columns: 319rem 1fr 1fr;
    gap: 180rem;
}

@media (max-width: 1263px) {
    .footer__container {
        max-width: 788rem;
    }
}

.footer__block {
    display: flex;
    flex-direction: column;
    gap: 32rem;
}

.footer__text {
    color: var(--c-text-light);
    font-family: var(--font-text);
    font-size: 14rem;
    font-weight: 400;
    line-height: 25rem;
    max-width: 319rem;
}

.footer__line {
    width: 88rem;
    height: 2rem;
    background: var(--c-background-secondary);
    margin-bottom: 11rem;
}

.footer__title {
    color: var(--c-text-light);
    font-family: var(--font-text);
    font-size: 16rem;
    font-weight: 700;
    line-height: 25rem;
    padding: 14rem 0;
}

.footer__links {
    display: flex;
    flex-direction: column;
    gap: 10rem;
    padding: 17rem 0 0 0;
    margin: 0;
    flex-flow: column wrap;
    height: 150rem;
}

.footer__social-links {
    display: flex;
    gap: 20rem;
    padding: 0;
}

.footer__link {
    color: var(--c-text-light);
    font-family: var(--font-text);
    font-size: 14rem;
    font-weight: 400;
    line-height: 25rem;
    text-decoration: none;
    padding-right: 70rem;
}

.footer__social-link {
    display: block;
    width: 30rem;
    height: 30rem;
}

.footer__social-link_fb {
    background: url("../../assets/facebook.svg") no-repeat center;
}

.footer__social-link_in {
    background: url("../../assets/in.svg") no-repeat center;
}

.footer__social-link_tw {
    background: url("../../assets/tw.svg") no-repeat center;
}

.footer__social-link_inst {
    background: url("../../assets/inst.svg") no-repeat center;
}
</style>