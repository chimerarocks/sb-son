import store from '../store'

export default {
    template: `
    <div>
        <h3>Times que irão para a libertadores</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="o in teamsLibertadores">
                <td>
                    <img :src="o.escudo" style="heigth: 30px; width: 30px">
                    <strong>{{o.nome}}</strong>
                </td>
            </tbody>
        </table>
        <h3>Times que serão rebaixados</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="o in teamsRebaixados">
                <td>
                    <img :src="o.escudo" style="heigth: 30px; width: 30px">
                    <strong>{{o.nome}}</strong>
                </td>
            </tbody>
        </table>
    </div>
    `,
    computed: {
        teamsLibertadores() {
            // return store.state.teams
            return this.$store.getters.teamsLibertadores
        },
        teamsRebaixados() {
            return store.getters.teamsRebaixados
        }
    }
}