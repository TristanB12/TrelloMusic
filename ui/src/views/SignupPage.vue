<template>
    <div>
        <main>
            <img src="../assets/headphone3.png" alt="">
            <div class="signup-pannel">
                <h3>TrelloMusic</h3>
                <div v-html="error" class="error"></div>
                <input type="text" v-model="email_input" placeholder="Email" class="input">
                <input type="password" v-model="password_input" placeholder="Password" class="input">
                <input type="password" v-model="confirm_password_input" placeholder="Confirm password" class="input">
                <button class="filled-btn" :class="{disabled: !can_signup}" @click="signup">Register</button>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'LoginPage',
        data() {
            return {
                email_input: '',
                password_input: '',
                confirm_password_input: '',
                can_signup: false,
                error: ''
            }
        },
        methods: {
            canSignup() {
                if (this.email_input != '' && this.password_input != '' && this.confirm_password_input != '')
                    this.can_signup = true
                else
                    this.can_signup = false
            },
            signup() {
                if (this.can_login === false)
                    return
                axios.post('http://localhost:8081/auth/signup', {
                        email: this.email_input,
                        password: this.password_input,
                        confirmPassword: this.confirm_password_input
                    })
                    .then(response => {
                        this.$store.dispatch('setToken', response.data.token)
                        this.$store.dispatch('setUser', response.data.user)
                    })
                    .catch(error => this.error = error.response.data.message)
            }
        },
        beforeUpdate () {
            this.canSignup();
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
    height: 65%;
    width: auto;
}
.signup-pannel{
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

        .signup-pannel {
            height: 80%;
            margin: auto;
        }
    }
}
</style>