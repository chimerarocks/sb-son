import Vue from 'vue'
import './filters'
import AppComponent from './components/app.component'
import store from './store'

window.jQuery = jQuery

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')

new Vue({
    el: '#app',
    components: {
        'app': AppComponent
    },
    store
})
