import {Team} from '../team'
import _ from 'lodash'

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
            teams: [
                new Team('Palmeiras', require('../assets/palmeiras_60x60.png')),
                new Team('Flamengo', require('../assets/flamengo_60x60.png')),
                new Team('Atlético-MG', require('../assets/atletico_mg_60x60.png')),
                new Team('Santos', require('../assets/santos_60x60.png')),
                new Team('Botafogo', require('../assets/botafogo_60x60.png')),
                new Team('Atlético-PR', require('../assets/atletico-pr_60x60.png')),
                new Team('Corinthians', require('../assets/corinthians_60x60.png')),
                new Team('Grêmio', require('../assets/gremio_60x60.png')),
                new Team('Fluminense', require('../assets/fluminense_60x60.png')),
                new Team('Ponte Preta', require('../assets/ponte_preta_60x60.png')),
                new Team('Chapecoense', require('../assets/chapecoense_60x60.png')),
                new Team('São Paulo', require('../assets/sao_paulo_60x60.png')),
                new Team('Cruzeiro', require('../assets/cruzeiro_60x60.png')),
                new Team('Sport', require('../assets/sport_60x60.png')),
                new Team('Curitiba', require('../assets/coritiba_60x60.png')),
                new Team('Internacional', require('../assets/internacional_60x60.png')),
                new Team('Vitória', require('../assets/vitoria_60x60.png')),
                new Team('Figueirense', require('../assets/figueirense_60x60.png')),
                new Team('Santa Cruz', require('../assets/santa_cruz_60x60.png')),
                new Team('América-MG', require('../assets/america_mg_60x60.png'))
            ],
            filter: ''
        }
    },
    methods: {
        exibeNovoJogo() {
            this.$parent.showView('novo jogo')
            this.$parent.$children[1].criaNovoJogo(this.teams)
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
        }
    }
}