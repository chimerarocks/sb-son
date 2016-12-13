import TeamListComponent from './team-list.component'
import JogoComponent from './jogo.component'
import event from '../event'

export default {
    components: {
        'time-list': TeamListComponent,
        'jogo': JogoComponent
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
    },
    mounted() {
        event.$on('show-tabela', () => {
            this.showView('tabela')
        })
        event.$on('show-jogo', () => {
            this.showView('novo jogo')
        })
    }
}