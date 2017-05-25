import Home from './components/Home.vue'
import Users from './components/users/Users.vue'
import UsersAll from './components/users/UsersAll.vue'
import User from './components/users/User.vue'
import UserEdit from './components/users/UserEdit.vue'
import UserNew from './components/users/UserNew.vue'

import Categories from './components/categories/Categories.vue'
import CategoriesAll from './components/categories/CategoriesAll.vue'
import Category from './components/categories/Category.vue'
import CategoryEdit from './components/categories/CategoryEdit.vue'
import CategoryNew from './components/categories/CategoryNew.vue'

export const routes = [
  { path: '/', component: Home },
  {
    path: '/users',
    component: Users,
    children: [
      { path: '', component: UsersAll },
      { path: 'new', component: UserNew },
      { path: ':id', component: User, props: true },
      { path: ':id/edit', component: UserEdit, props: true }
    ]
  },
  {
    path: '/categories',
    component: Categories,
    children: [
      { path: '', component: CategoriesAll },
      { path: 'new', component: CategoryNew },
      { path: ':id', component: Category, props: true },
      { path: ':id/edit', component: CategoryEdit, props: true }
    ]
  }
]
