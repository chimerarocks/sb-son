import TeamListComponent from './team-list.component'
import JogoComponent from './jogo.component'
import TeamZoneComponent from './team-zone.component'

export default {
    components: {
        'time-list': TeamListComponent,
        'jogo': JogoComponent,
        'team-zone': TeamZoneComponent
    },
    template: `
    <div class="container">
        <div class="row">
            <h3>Campeonato Braileiro - Série A - 2016</h3>
            <a class="btn btn-primary" @click.prevent="exibeNovoJogo">Novo Jogo</a>
            <a class="btn btn-primary" @click.prevent="exibeZona">Zona</a>
            <a class="btn btn-primary" @click.prevent="exibeTabela">Tabela</a>
            <br/><br/>
            <div v-show="view == 'tabela'">
                <time-list></time-list>
            </div>
            <div v-if="view == 'novo jogo'">
                <jogo></jogo>
            </div>
            <div v-if="view == 'zona'">
                <team-zone></team-zone>
            </div>
        </div>
    </div>
    `,
    computed: {
        view() {
            // return store.state.view
            return this.$store.state.view
        }
    },
    methods: {
        exibeTabela() {
            this.$store.commit('show-team-list')
        },
        exibeNovoJogo() {
            this.$store.commit('show-novo-jogo')
        },
        exibeZona() {
            this.$store.commit('show-teams-zone')
        }
    }
}