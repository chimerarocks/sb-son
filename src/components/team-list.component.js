import _ from 'lodash'
import event from '../event'
import store from '../store'

export default {
    template: `
    <div>
        <a class="btn btn-primary" @click.prevent="exibeNovoJogo">Novo Jogo</a>
        <br/><br/>
        <input type="text" class="form-control" v-model="filter">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="o in colunas">
                        <a href="#" @click.prevent="sortBy(o)">{{ o | ucwords}}</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="o in teamsOrdered">
                <td>
                    <img :src="o.escudo" style="heigth: 30px; width: 30px">
                    <strong>{{o.nome}}</strong>
                </td>
                <td>{{o.pontos}}</td>
                <td>{{o.gm}}</td>
                <td>{{o.gs}}</td>
                <td>{{o | saldo}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
    data(){
        return {
            order: {
                keys: ['pontos', 'gm', 'gs'],
                sort: ['desc', 'desc', 'asc']
            },
            colunas: ['nome', 'pontos', 'gm', 'gs', 'saldo'],
            filter: ''
        }
    },
    methods: {
        exibeNovoJogo() {
            this.$store.commit('show-novo-jogo')
        },
        sortBy(coluna) {
            this.order.keys = coluna
            this.order.sort = this.order.sort == 'desc' ? 'asc' : 'desc'
        }
    },
    computed: {
        teamsOrdered() {
            let colecao = _.orderBy(this.teams, this.order.keys, this.order.sort)

            return _.filter(colecao, item => {
                return item.nome.indexOf(this.filter) > -1
            })
        },
        teams() {
            // return store.state.teams
            return this.$store.state.teams
        }
    },
    created() {
        this.$store.dispatch('load-teams')
    }
}