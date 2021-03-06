import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currencyFilter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)
/**
 * Настройки и инициализация Firebase
 */
firebase.initializeApp({
  apiKey: "AIzaSyDhPR7dUGQv1X6Fc6-xVdNgYXgc7B9Knts",
  authDomain: "crm-bank-vuejs-app.firebaseapp.com",
  databaseURL: "https://crm-bank-vuejs-app.firebaseio.com",
  projectId: "crm-bank-vuejs-app",
  storageBucket: "crm-bank-vuejs-app.appspot.com",
  messagingSenderId: "353221728283",
  appId: "1:353221728283:web:72b9e32d57a3b75f84c0be",
  measurementId: "G-JG4VSR2CSE"
});

let app
/**
 * Манипуляции с авторизацией через Firebase
 */
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
