import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin ,LayoutPlugin, CardPlugin, NavbarPlugin,NavPlugin ,DropdownPlugin,ButtonPlugin,ButtonGroupPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(CardPlugin)
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(NavPlugin)
Vue.use(DropdownPlugin)
Vue.use(ButtonGroupPlugin)
Vue.use(ButtonPlugin)




new Vue({
  render: h => h(App),
}).$mount('#app')
