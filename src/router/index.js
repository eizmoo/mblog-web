import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Article from '@/components/Article'
import ArticleEdit from '@/components/ArticleEdit'
import ArticleList from '@/components/ArticleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
      children: [
        {
          path: 'edit',
          name: 'ArticleEdit',
          component: ArticleEdit
        },
        {
          path: 'list',
          name: 'ArticleList',
          component: ArticleList
        }
      ]
    }
  ]
})
