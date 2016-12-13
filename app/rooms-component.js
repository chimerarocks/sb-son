import md5 from 'blueimp-md5'
import Vue from 'vue'
import VueFire from 'vuefire'
import db from './firebase-db'
import {} from 'bootstrap'

Vue.use(VueFire)

export default {
    template: require('html-loader!../templates/rooms-component.html'),
    firebase: {
        rooms: db.ref('chat/rooms')
    },
    data: function() {
        return {
            name: '',
            email: '',
            room: null
        }
    },
    methods: {
        login: function() {
            var user = {
                name: this.name,
                email: this.email,
                photo: 'http://www.gravatar.com/avatar/' + md5(this.email) + '.jpg'
            }
            window.localStorage.setItem('user', JSON.stringify(user))
            $('#modalLoginEmail').modal('hide')
            this.$route.router.go('/chat/' + this.room._id)
        },
        openModal: function(room) {
            this.room = room
            $('#modalLoginEmail').modal('show')
        }
    }
}