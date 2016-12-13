import Vue from 'vue'
import {Team} from './team'

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')

new Vue({
    el: '#app',
    data: {
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
        view: 'tabela'
    },
    methods: {
        fimJogo() {
            let timeAdversario = this.novoJogo.fora.time
            let gols = +this.novoJogo.casa.gols //+ convertendo para inteiro
            let golsAdversario = +this.novoJogo.fora.gols
            this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario)
            this.showView('tabela')
        },
        criaNovoJogo() {
            let indexCasa = Math.floor(Math.random() * 20),
                indexFora = Math.floor(Math.random() * 20)

            this.novoJogo.casa.time = this.teams[indexCasa]
            this.novoJogo.casa.gols = 0
            this.novoJogo.fora.time = this.teams[indexFora]
            this.novoJogo.casa.fora = 0

            this.showView('novo jogo')
        },
        showView(view) {
            this.view = view
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
