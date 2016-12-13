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
            <div v-show="view == 'tabela'">
                <time-list></time-list>
            </div>
            <div v-show="view == 'novo jogo'">
                <jogo></jogo>
            </div>
            <div v-show="view == 'zona'">
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
    }
}