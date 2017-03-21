import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TableDesc from '@/components/TableDesc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/table-desc',
      name: 'TableDesc',
      component: TableDesc
    }
  ]
})
