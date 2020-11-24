import Vue from 'vue';
import Router from 'vue-router';
import Person from './components/Person.vue';
import Ping from './components/Ping.vue';
import HelloWorld from './components/HelloWorld.vue'
import PersonForm from './components/PersonForm.vue';
import Login from './components/Login.vue';
import Logout from './components/Logout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/persons',
      name: 'Person',
      component: Person,
    },
    {
      path: '/persons/form',
      name: 'PersonForm',
      component: PersonForm,
      beforeEnter: (to, from, next) => {
        
        console.log("beforeEnter ...")
        next()
        //if (to.name !== 'Ping' ) next({ name: 'Ping' })
        //else next()
      }
    },
    {
      path: '/persons/form/:id',
      name: 'PersonForme',
      component: PersonForm
  },

  {
    path: '/login',
    name: 'LoginForm',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },

  ],
});
