import Vue from 'vue';
import VueRouter from 'vue-router';
import UserList from './UserList.vue';
import UserDetails from './UserDetails.vue';

import App from './App.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/users' }, //localhost:8080
  { path: '/users', component: UserList },  //localhost:8080/users
  { path: '/users/:id', component: UserDetails }  //localhost:8080/users/1
];

const router = new VueRouter({
  routes: routes
 })

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
