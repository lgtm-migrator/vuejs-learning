import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TableDesc from '@/components/TableDesc'
import Table from '@/components/Table'
import OfficeType from '@/components/OfficeType'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      title: 'home',
      component: Home
    }, {
      path: '/table-desc',
      name: 'TableDesc',
      title: 'Table Describe',
      component: TableDesc
    }, {
      path: '/table/:table_name',
      title: 'Table Detail',
      name: 'Table',
      component: Table
    }, {
      path: '/office-type',
      title: 'OfficeType',
      name: 'OfficeType',
      component: OfficeType
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router