import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import global component
import FaGlobalComponent from './components/FaGlobalComponent.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).component('fa-global-component', FaGlobalComponent).mount('#app')
