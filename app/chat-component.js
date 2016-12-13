import db from './firebase-db'
import Vue from 'vue'
import VueFire from 'vuefire'

Vue.use(VueFire)

export default {
    template: require('html-loader!../templates/chat-component.html'),
    created: function() {
        var roomRef = 'chat/rooms/' + this.$route.params.room
        this.$bindAsArray('messages', db.ref(roomRef + '/messages'))
    },
    data: function() {
        return {
            user: JSON.parse(window.localStorage.getItem('user')),
            message: ''
        }
    },
    methods: {
        isUser: function(email) {
            return this.user.email == email
        },
        sendMessage: function() {
            this.$firebaseRefs.messages.push({
                email: this.user.email,
                name: this.user.name,
                text: this.message,
                photo: this.user.photo
            })
            this.message = ''
        }
    }
}