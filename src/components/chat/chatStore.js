/**
 * Created by BinhNX on 27/05/2017.
 */
import Vue from 'vue'
import {userListUrl, getHeader, getConversationUrl, addMessageToConversationUrl} from './../../../config/app'

const state = {
    userList: {},
    currentChatUser: null,
    conversations: []
}

const mutations = {
    SET_LIST_USER (state, userList) {
        state.userList = userList
    },
    SET_CURRENT_CHAT_USER (state, user) {
        state.currentChatUser = user
    },
    SET_CONVERSATION (state, conversations) {
        state.conversations = conversations
    },
    ADD_NEW_MESSAGE_TO_CONVERSATION (state, message) {
        state.conversations.push(message)
    }
}

const actions = {
    setUserList: ({commit}) => {
        return Vue.http.get(userListUrl, {headers: getHeader()})
            .then(response => {
                if (response.status === 200) {
                    commit('SET_LIST_USER', response.body.data)
                    return response.body.data
                }
            })
    },
    setCurrentChatUser: ({commit}, user) => {
        var postData = {
            id: user.id
        }
        Vue.http.post(getConversationUrl, postData, {headers: getHeader()})
            .then(response => {
                if(response.status === 200) {
                    commit('SET_CURRENT_CHAT_USER', user)
                    commit('SET_CONVERSATION', response.body.data)
                }
            })
    },
    addNewMessageToConversation: ({commit}, message) => {
        var postData = {
            receiver_id: state.currentChatUser.id,
            message: message
        }
        Vue.http.post(addMessageToConversationUrl, postData, {headers: getHeader()})
            .then(response => {
                if(response.status === 200) {
                    commit('ADD_NEW_MESSAGE_TO_CONVERSATION', response.body.data)
                }
            })
    },
    emitNewMessageToConversation: ({commit}, message) => {
        commit('ADD_NEW_MESSAGE_TO_CONVERSATION', message)
    }
}

export  default {
    state, mutations, actions
}
