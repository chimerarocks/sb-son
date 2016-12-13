import event from '../event'

export default {
    template: `
    <div>
        <form class="form-inline">
            <div class="form-group">
                <input type="text" class="form-control" v-model="novoJogo.casa.gols" @keyup.enter="fimJogo">
                <label class="control-label" v-if="novoJogo.casa.time">
                    {{novoJogo.casa.time.nome}}
                    <img :src="novoJogo.casa.time.escudo" style="height: 30px; width: 30px;">
                </label>
            </div>
            <span>X</span>
            <div class="form-group">
                <label class="control-label" v-if="novoJogo.fora.time">
                    <img :src="novoJogo.fora.time.escudo" style="height: 30px; width: 30px;">
                    {{novoJogo.fora.time.nome}}
                </label>
                <input type="text" class="form-control" v-model="novoJogo.fora.gols" @keyup.enter="fimJogo">
            </div>
            <button type="button" class="btn btn-primary" @click="fimJogo">Fim de jogo</button>
        </form>
    </div>
    `,
    data(){
        return {
            novoJogo: {
                casa: {
                    time: null,
                    gols: 0
                },
                fora: {
                    time: null,
                    gols: 0
                }
            }
        }
    },
    mounted() {
        event.$on('get-teams', teams => {
            this.criaNovoJogo(teams)
        })
    },
    methods: {
        fimJogo() {
            let timeAdversario = this.novoJogo.fora.time
            let gols = +this.novoJogo.casa.gols //+ convertendo para inteiro
            let golsAdversario = +this.novoJogo.fora.gols
            this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario)
            event.$emit('show-tabela')
            this.novoJogo.casa.time = null
            this.novoJogo.casa.gols = 0
            this.novoJogo.fora.time = null
            this.novoJogo.fora.gols = 0
        },
        criaNovoJogo(teams) {
            let indexCasa = Math.floor(Math.random() * 20),
                indexFora = Math.floor(Math.random() * 20)

            this.novoJogo.casa.time = teams[indexCasa]
            this.novoJogo.casa.gols = 0
            this.novoJogo.fora.time = teams[indexFora]
            this.novoJogo.fora.gols = 0
        }
    }
}