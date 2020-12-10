<template>
    <div>
        <HeaderBar />
        <main>
            <img src="../assets/headphone2.png" alt="">
            <div class="login-pannel">
                <h3>TrelloMusic</h3>
                <div v-html="error" class="error"></div>
                <input type="text"  v-model="email_input" placeholder="Email" class="input">
                <input type="password" v-model="password_input" placeholder="Password" class="input">
                <button class="filled-btn" :class="{disabled: !can_login}" @click="login" >Login</button>
            </div>
        </main>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
import axios from 'axios'

    export default {
        name: 'LoginPage',
        components: {
            HeaderBar,
        },
        data() {
            return {
                email_input: '',
                password_input: '',
                error: '',
                can_login: false
            }
        },
        methods: {
            canLogin() {
                if (this.email_input != '' && this.password_input != '')
                    this.can_login = true
                else
                    this.can_login = false
            },
            login() {
                if (this.can_login === false)
                    return
                axios.post('http://localhost:8081/auth/login', {
                        email: this.email_input,
                        password: this.password_input
                    })
                    .then(response => console.log(response.data.user))
                    .catch(error => this.error = error.response.data.message)
            }
        },
        beforeUpdate () {
            this.canLogin();
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