import Vue from 'vue'
import {Team} from './team'
import _ from 'lodash'

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')

let appComponent = Vue.extend({
    template: `
    <div class="container">
        <div class="row">
            <h3>Campeonato Braileiro - Série A - 2016</h3>
            <a class="btn btn-primary" @click.prevent="criaNovoJogo">Novo Jogo</a>
            <br/><br/>
            <div v-if="view == 'tabela'">
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
            <!--<div v-if="view == 'novo jogo'">-->
            <div v-else>
                <form class="form-inline">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="novoJogo.casa.gols" @keyup.enter="fimJogo">
                        <label class="control-label">
                            {{novoJogo.casa.time.nome}}
                            <img :src="novoJogo.casa.time.escudo" style="height: 30px; width: 30px;">
                        </label>
                    </div>
                    <span>X</span>
                    <div class="form-group">
                        <label class="control-label">
                            <img :src="novoJogo.fora.time.escudo" style="height: 30px; width: 30px;">
                            {{novoJogo.fora.time.nome}}
                        </label>
                        <input type="text" class="form-control" v-model="novoJogo.fora.gols" @keyup.enter="fimJogo">
                    </div>
                    <button type="button" class="btn btn-primary" @click="fimJogo">Fim de jogo</button>
                </form>
            </div>
        </div>
    </div>
    `,
    data(){
        return {
            order: {
                keys: ['pontos', 'gm', 'gs'],
                sort: ['desc', 'desc', 'asc']
            },
            colunas: ['nome', 'pontos', 'gm', 'gs', 'saldo'],
            novoJogo: {
                casa: {
                    time: null,
                    gols: 0
                },
                fora: {
                    time: null,
                    gols: 0
                }
            },
            teams: [
                new Team('Palmeiras', require('./assets/palmeiras_60x60.png')),
                new Team('Flamengo', require('./assets/flamengo_60x60.png')),
                new Team('Atlético-MG', require('./assets/atletico_mg_60x60.png')),
                new Team('Santos', require('./assets/santos_60x60.png')),
                new Team('Botafogo', require('./assets/botafogo_60x60.png')),
                new Team('Atlético-PR', require('./assets/atletico-pr_60x60.png')),
                new Team('Corinthians', require('./assets/corinthians_60x60.png')),
                new Team('Grêmio', require('./assets/gremio_60x60.png')),
                new Team('Fluminense', require('./assets/fluminense_60x60.png')),
                new Team('Ponte Preta', require('./assets/ponte_preta_60x60.png')),
                new Team('Chapecoense', require('./assets/chapecoense_60x60.png')),
                new Team('São Paulo', require('./assets/sao_paulo_60x60.png')),
                new Team('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
                new Team('Sport', require('./assets/sport_60x60.png')),
                new Team('Curitiba', require('./assets/coritiba_60x60.png')),
                new Team('Internacional', require('./assets/internacional_60x60.png')),
                new Team('Vitória', require('./assets/vitoria_60x60.png')),
                new Team('Figueirense', require('./assets/figueirense_60x60.png')),
                new Team('Santa Cruz', require('./assets/santa_cruz_60x60.png')),
                new Team('América-MG', require('./assets/america_mg_60x60.png'))
            ],
            view: 'tabela',
            filter: ''
        }
    },
    methods: {
        fimJogo() {
            let timeAdversario = this.novoJogo.fora.time
            let gols = +this.novoJogo.casa.gols //+ convertendo para inteiro
            let golsAdversario = +this.novoJogo.fora.gols
            this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario)
            this.showView('tabela')
            this.novoJogo.casa.time = null
            this.novoJogo.casa.gols = 0
            this.novoJogo.fora.time = null
            this.novoJogo.fora.gols = 0
        },
        criaNovoJogo() {
            let indexCasa = Math.floor(Math.random() * 20),
                indexFora = Math.floor(Math.random() * 20)

            this.novoJogo.casa.time = this.teams[indexCasa]
            this.novoJogo.casa.gols = 0
            this.novoJogo.fora.time = this.teams[indexFora]
            this.novoJogo.fora.gols = 0

            this.showView('novo jogo')
        },
        showView(view) {
            this.view = view
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
    },
    filters: {
        saldo(time) {
            return time.gm - time.gs
        },
        ucwords(word) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
    }
})

new Vue({
    el: '#app',
    components: {
        'app': appComponent
    }
})
