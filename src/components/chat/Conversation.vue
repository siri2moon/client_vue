<script>
    import {mapState} from 'vuex'
    import AddChatWidget from './AddChatWidget.vue'
    export  default {
        components: {
            'add-chat-widget': AddChatWidget
        },
        computed: {
            ...mapState({
                chatStore: state => state.chatStore,
                userStore: state => state.userStore
            })
        },
        sockets: {
            message (data) {
                //var message = JSON.parse(data)
                console.log(data);
            }
        },
        created () {

        }
    }
</script>
<template>
    <div class="box box-pink direct-chat direct-chat-warning" id="chat-bmhh" v-if="chatStore.currentChatUser !== null">
        <div class="box-header with-border">
            <h3 class="box-title">{{chatStore.currentChatUser.name}}</h3>
        </div><!-- /.box-header -->
        <div class="box-body" id="body-chat">
            <p v-if="chatStore.conversations.length === 0">Let start chat</p>
            <div class="direct-chat-messages" v-for="msg in chatStore.conversations">
                <!-- Message to the right - owner -->
                <div class="direct-chat-msg right" v-if="msg.sender_id === userStore.authUser.id">
                    <div class="direct-chat-info clearfix">
                        <span class="direct-chat-name pull-right">{{msg.sender.name}}</span>
                    </div> <!-- /.direct-chat-info  -->
                    <img alt="message user image" src="../../assets/img/no-avatar.png" class="direct-chat-img">
                    <!-- /.direct-chat-img  -->
                    <div class="direct-chat-text">
                        {{msg.message}}
                        <span class="direct-chat-timestamp">{{msg.created_at}}</span>

                    </div> <!-- /.direct-chat-text  -->
                </div> <!-- /.direct-chat-msg  -->

                <!-- Message. Default to the left  -->
                <div class="direct-chat-msg" v-if="msg.sender_id !== userStore.authUser.id">
                    <div class="direct-chat-info clearfix">
                        <span class="direct-chat-name pull-left">{{msg.sender.name}}</span>

                    </div> <!-- /.direct-chat-info  -->
                    <img alt="message user image" src="../../assets/img/no-avatar.png" class="direct-chat-img">
                    <!-- /.direct-chat-img  -->
                    <div class="direct-chat-text">
                        {{msg.message}}
                        <span class="direct-chat-timestamp">{{msg.created_at}}</span>
                    </div>  <!-- /.direct-chat-text  -->
                </div> <!-- /.direct-chat-msg  -->
            </div><!-- /.direct-chat-messages -->
        </div><!-- /.box-body -->
        <div class="box-footer">
            <add-chat-widget></add-chat-widget>
        </div><!-- /.box-footer-->
    </div>
</template>