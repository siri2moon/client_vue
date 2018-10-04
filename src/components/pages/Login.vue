
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please Sign In</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" v-on:submit.prevent="handleLoginSubmit()">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus v-model="login.email">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" name="password" type="password" value="" v-model="login.password">
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me">Remember Me
                                    </label>
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <button class="btn btn-lg btn-success btn-block">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {loginUrl, userUrl, getHeader} from '../../../config/app'
    import {clientId, clientSecret} from '../../env'
    export default {
        data () {
            return {
                login: {
                    email: 'binh.nx@neo-lab.vn',
                    password: 'xuanbinh'
                }
            }
        },
        methods: {
            handleLoginSubmit () {
                const postData = {
                    grant_type: 'password',
                    client_id: clientId,
                    client_secret: clientSecret,
                    username: this.login.email,
                    password: this.login.password,
                    scope: ''
                }
                const authUser = {}
                this.$http.post(loginUrl, postData)
                    .then(response => {
                        if (response.status === 200) {
                            authUser.access_token = response.data.access_token
                            authUser.refresh_token = response.data.refresh_token
                            window.localStorage.setItem('authUser', JSON.stringify(authUser))
                            this.$http.get(userUrl, {headers: getHeader()})
                                .then(response => {
                                    authUser.email = response.body.email
                                    authUser.name = response.body.name
                                    authUser.id = response.body.id
                                    window.localStorage.setItem('authUser', JSON.stringify(authUser))
                                    this.$router.push({name: 'dashboard'})
                                })
                        }
                    })
            }
        }
    }
</script>
