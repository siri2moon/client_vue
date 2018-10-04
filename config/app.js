export const apiDomain = 'http://api.demovue.dev/'
export const loginUrl = apiDomain + 'oauth/token'
export const userUrl = apiDomain + 'api/user'
export const userListUrl = apiDomain + 'api/v1/users'
export const getConversationUrl = apiDomain + 'api/v1/messages/get-conversation-by-user'
export const addMessageToConversationUrl = apiDomain + 'api/v1/messages/add-message'

export const getHeader = function () {
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + tokenData.access_token
    }
    return headers
}
