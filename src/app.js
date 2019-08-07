import Vue from 'vue'
import App from './components/App.vue'
import router from './router.js'
import store from '../store'
import net from '../net.js'
import symphony from '../src/symphony-config.js'
import socketIO from 'vue-socket.io'

Vue.config.productionTip = false
Vue.use(net)
Vue.use(symphony)
Vue.use(socketIO, Vue.$symphonyConfig.wshost)


new Vue({
    el: '#app',
    render: a => a(App),
    router,
    store
})

