import TeamListComponent from './team-list.component'

export default {
    components: {
        'time-list': TeamListComponent
    },
    template: `
    <div class="container">
        <div class="row">
            <h3>Campeonato Braileiro - Série A - 2016</h3>
            <div v-if="view == 'tabela'">
                <time-list></time-list>
            </div>
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
            view: 'tabela',
        }
    },
    methods: {
        showView(view) {
            this.view = view
        }
    }
}