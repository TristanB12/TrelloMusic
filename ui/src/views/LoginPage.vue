<template>
    <div>
        <HeaderBar />
        <main>
            <img src="../assets/headphone2.png" alt="">
            <div class="login-pannel">
                <h3>TrelloMusic</h3>
                <input type="text" placeholder="Email" class="input">
                <input type="password" placeholder="Password" class="input">
                <button class="filled-btn">Login</button>
            </div>
        </main>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
    export default {
        name: 'LoginPage',
        components: {
            HeaderBar,
        },
    }
</script>

<style lang="scss" scoped>
main {
    width: 80%;
    margin-right: auto;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 92vh;
    column-gap: 50%;
    grid-template-areas:
    "img cta";
}
img {
    grid-area: img;
    position: absolute;
    bottom: 0;
    max-height: 800px;
    height: 75%;
    width: auto;
}
.login-pannel{
    grid-area: cta;
    height: 50%;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h3 {
        font-size: 45px;
        font-weight: 800;
        text-align: center;
    }
    button {
        font-size: 1.6em;
    }
    input {
        font-size: 20px;
        width: 80%;
    }
}

@media screen and (max-width: 950px){
    img {
        display: none;
    }
    main {
        display: block;
        margin: auto;
        height: 90vh;

        .login-pannel {
            height: 80%;
            margin: auto;
        }
    }
}
</style>