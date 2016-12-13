define('rooms-component', [
    'blueimp-md5', 'vue', 'vuefire', './firebase-db', 'bootstrap'
], function (md5, Vue, VueFire, db) {
    Vue.use(VueFire)
    return {
        template: `
        <div class="col-md-4" v-for="o in rooms">
            <div class="panel panel-primary">
                <div class="panel-heading">
                     {{o.name}}
                </div>
                <div class="panel-body">
                    {{ o.description }}
                    <br/>
                    <a href="javascript:void(0)" @click="openModal(o)">Entrar</a>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalLoginEmail" tabindex="-1" role="dialog" aria-labelledby="modalLoginEmail">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="exampleModalLabel">Entre com as informações</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" name="email" v-model="email" placeholder="E-mail">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" v-model="name" placeholder="Nome">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary" @click="login">Login</button>
                    </div>
                </div>
            </div>
        </div>
    `,
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
})




