var db = require('./firebase-db')
var Vue = require('vue')
var VueRouter = require('vue-router')
var VueFire = require('vuefire')

Vue.use(VueRouter)
Vue.use(VueFire)

var appComponent = Vue.extend({})

var router = new VueRouter()

router.map({
    '/chat/:room': {
        component: require('./chat-component')
    },
    '/rooms': {
        component: require('./rooms-component')
    },
    '/rooms-create': {
        component: require('./rooms-create-component')
    }
})

router.start(appComponent, '#app')
