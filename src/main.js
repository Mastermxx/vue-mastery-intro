import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Less from './less/style.less'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
