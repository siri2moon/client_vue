<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState ({
                userStore: state => state.userStore,
                chatStore: state => state.chatStore
            })
        },
        methods: {
            changeChatUser (user) {
                this.$store.dispatch('setCurrentChatUser', user)
                this.$socket.emit('request-join-room', {room: user.id})
            },
            userActiveStyle (user) {
                if (this.chatStore.currentChatUser === null) {
                    return false
                }

                if (this.chatStore.currentChatUser.id === user.id) {
                    return true
                }

                return false
            }
        },
        created () {
            this.$store.dispatch('setUserList')
        }
    }
</script>
<template>
    <ul class="nav">
        <li v-for="user in chatStore.userList" :class="[{active: userActiveStyle(user)}]"><a v-on:click="changeChatUser(user)">{{user.name}}</a></li>
    </ul>
</template>