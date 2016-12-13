import Vue from 'vue'
import Vuex from 'vuex'
import {Team} from './team'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
    view: 'tabela',
    teams: []
}

const mutations = {
    update(state, team) {
        let index = state.teams.findIndex(element => team.id == element.id)
        if (index != -1) {
            state.teams[index] = team
        }
    },
    'show-team-list'(state) {
        state.view = 'tabela'
    },
    'show-novo-jogo'(state) {
        state.view = 'novo jogo'
    },
    'show-teams-zone'(state) {
        state.view = 'zona'
    },
    'set-teams'(state, teams) {
        state.teams = teams
    }
}

const actions = {
    'load-teams'(context) {
        Vue.http.get('http://localhost:8080/dist/teams.json').then(response => {
            let teams = response.data.map(element => new Team(element.id, element.nome, element.escudo))
            context.commit('set-teams', teams)
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters: {
        teamsLibertadores: state => state.teams.slice(0,6),
        teamsRebaixados: state => state.teams.slice(16,20)
    }
})