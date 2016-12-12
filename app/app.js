/**
 * Created by joaopedrodslv@gmail.com on 12/12/2016.
 */

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAC_Af6dKSoix70CQfBnCM_msIbK8XtqJY",
    authDomain: "realtime-vue-firebase.firebaseapp.com",
    databaseURL: "https://realtime-vue-firebase.firebaseio.com",
    storageBucket: "realtime-vue-firebase.appspot.com",
    messagingSenderId: "894581905276"
};
var firebaseApp = firebase.initializeApp(config);

var chatComponent = Vue.extend({
    template: `
            <style type="text/css">
                .chat
                {
                    padding: 0;
                }
                .chat li
                {
                    margin-bottom: 10px;
                    padding-bottom: 10px;
                }
                .chat li.left .chat-body
                {
                    margin-left: 70px;
                }
                .chat li.right .chat-body
                {
                    text-align: right;
                    margin-right: 70px;
                }
                .panel-body
                {
                    overflow-y: scroll;
                    height: 600px;
                }
            </style>
            <div class="panel panel-primary">
                <div class="panel-heading">Chat</div>
                <div class="panel-body">
                    <ul class="chat list-unstyled">
                        <li v-for="o in chat.messages"
                                class="clearfix"
                                :class="{left: !isUser(o.email), right: isUser(o.email)}">
                            <span :class="{'pull-left': !isUser(o.email), 'pull-right': isUser(o.email)}">
                                <img :src="o.photo" class="img-circle">
                            </span>
                            <div class="chat-body">
                                <strong>{{o.name}}</strong>
                                <p>{{o.text}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="panel-footer">
                    <div class="input-group">
                        <input type="text" class="form-control input-md" placeholder="Digite sua mensagem">
                        <span class="input-group-btn">
                            <button class="btn btn-success btn-md">Enviar</button>
                        </span>
                    </div>
                </div>
            </div>
        `,
    data: function() {
        return {
            user: {
                email: 'eu@gmail.com',
                name: 'Eu'
            },
            chat: {
                messages: [
                    {
                        email: 'fulano@gmail.com',
                        text: 'Olá, eu sou o Fulano, como você está?',
                        name: 'Fulano',
                        photo: 'http://placehold.it/50/000FFF/fff&text=00'
                    },
                    {
                        email: 'eu@gmail.com',
                        text: 'Estou bem, sou rocks.',
                        name: 'Eu',
                        photo: 'http://placehold.it/50/000FFF/fff&text=EU'
                    }
                ]
            }
        }
    },
    methods: {
        isUser: function(email) {
            return this.user.email == email
        }
    }
})

var db = firebaseApp.database()
var roomsComponent = Vue.extend({
    template: `
        <div class="col-md-4" v-for="o in rooms">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    {{ o.name }}
                </div>
                <div class="panel-body">
                    {{ o.description }}
                    <br/>
                    <a href="javascript:void(0)" @click="goToChat(o)">Entrar</a>
                </div>
            </div>
        </div>
    `,
    data: function() {
        return {
            rooms: [
                {id: '001', name: 'PHP', description: 'Entusiasta do PHP'},
                {id: '002', name: 'Java', description: 'Developer experts'},
                {id: '003', name: 'C#', description: 'Os caras do C#'},
                {id: '004', name: 'C++', description: 'Fissurados por programação'},
                {id: '005', name: 'Javascript', description: 'Olha a web aí!'},
                {id: '006', name: 'Vue.js', description: 'Chat dos caras do data-binding'},
            ]
        }
    },
    methods: {
        goToChat: function(room) {
            this.$route.router.go('/chat/' + room.id)
        }
    }
})

var rooms = [
    {id: '001', name: 'PHP', description: 'Entusiasta do PHP'},
    {id: '002', name: 'Java', description: 'Developer experts'},
    {id: '003', name: 'C#', description: 'Os caras do C#'},
    {id: '004', name: 'C++', description: 'Fissurados por programação'},
    {id: '005', name: 'Javascript', description: 'Olha a web aí!'},
    {id: '006', name: 'Vue.js', description: 'Chat dos caras do data-binding'},
]

var roomsCreateComponent = Vue.extend({
    template: `
        <ul>
            <li v-for="o in rooms">
                {{o.name}}
            </li>
        </ul>
    `,
    firebase: {
        rooms: db.ref('chat/rooms')
    },
    ready: function () {
        var chatRef = db.ref('chat')
        var roomsChildren = chatRef.child('rooms')
        rooms.forEach(function(room){
            roomsChildren.child(room.id).set({
                name: room.name,
                description: room.description
            })
        })
    }
})

var appComponent = Vue.extend({})

var router = new VueRouter()

router.map({
    '/chat/:room': {
        component: chatComponent
    },
    '/rooms': {
        component: roomsComponent
    },
    '/rooms-create': {
        component: roomsCreateComponent
    }
})

router.start(appComponent, '#app')