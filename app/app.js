/**
 * Created by joaopedrodslv@gmail.com on 12/12/2016.
 */

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

var appComponent = Vue.extend({})

Vue.component('chat', chatComponent)
/*
var chat = new Vue({el: '#app'})
 */
var router = new VueRouter()

router.map({
    '/chat': {
        component: chatComponent
    }
})

router.start(appComponent, '#app')