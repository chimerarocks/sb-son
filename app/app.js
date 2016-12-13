require([
    'vue', 'vue-router', './rooms-component', './rooms-create-component'
], function(Vue, VueRouter, RoomsComponent, RoomsCreateComponent) {
    Vue.use(VueRouter)

    var appComponent = Vue.extend({})

    var router = new VueRouter()

    router.map({
        '/chat/:room': {
            component: require('./chat-component')
        },
        '/rooms': {
            component: RoomsComponent
        },
        '/rooms-create': {
            component: RoomsCreateComponent
        }
    })

    router.start(appComponent, '#app')
})