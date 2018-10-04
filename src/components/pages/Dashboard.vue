<script>
    import {mapState} from 'vuex'
    import TopMenu from '../layouts/TopMenu'
    import Conversation from './../chat/Conversation.vue'
    export  default {
        components: {
            'top-menu': TopMenu,
            'conversation': Conversation
        },
        computed: {
            ...mapState({
                userStore: state => state.userStore
            })
        },
        created () {
            const userObj = JSON.parse(window.localStorage.getItem('authUser'))
            this.$store.dispatch('setUserObject', userObj)
        }
    }
</script>
<template>
    <div id="wrapper">
        <top-menu></top-menu>
        <div id="page-wrapper">
            <div class="row">
                <conversation></conversation>
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
</template>