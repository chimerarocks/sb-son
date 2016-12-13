require([
    'vue', 'vue-router', './rooms-component', './rooms-create-component', './chat-component'
], function(Vue, VueRouter, RoomsComponent, RoomsCreateComponent, ChatComponent) {
    Vue.use(VueRouter)

    var appComponent = Vue.extend({})

    var router = new VueRouter()
    router.map({
        '/chat/:room': {
            component: ChatComponent
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