<script>
    export default {
        data () {
            return {
                message: null
            }
        },
        methods: {
            handleAddChat () {
                if (this.message !== null) {
                    this.$socket.emit('demo-channel', {message: this.message})
//                    this.$store.dispatch('addNewMessageToConversation', this.message)
//                            .then(response => {
//                                this.message = null
//                                var element = document.getElementById('body-chat')
//                                element.scrollIntoView(false)
//                            })
                }
            }
        }
    }
</script>
<template>
    <div id="add-chat-widget">
        <form v-on:submit.prevent="handleAddChat()">
            <div class="input-group">
                <input name="content" type="text" class="form-control msg" placeholder="Type Message ..."
                       id="message" v-model="message">
                <span class="input-group-btn">
                    <button class="btn btn-pink btn-flat send-msg" type="submit" id="btn-submit-chat">Send</button>
                </span>
            </div>
        </form>
    </div>
</template>