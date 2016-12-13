import Vue from 'vue'

Vue.filter('saldo', time => time.gm - time.gs)
Vue.filter('ucwords', word => word.charAt(0).toUpperCase() + word.slice(1))
