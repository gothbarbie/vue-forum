import Home from './components/Home.vue'
import Users from './components/users/Users.vue'
import UsersAll from './components/users/UsersAll.vue'
import UserDetails from './components/users/UserDetails.vue'
import UserEdit from './components/users/UserEdit.vue'
import UserNew from './components/users/UserNew.vue'

import Categories from './components/categories/Categories.vue'
import CategoriesAll from './components/categories/CategoriesAll.vue'
import Category from './components/categories/Category.vue'
import CategoryEdit from './components/categories/CategoryEdit.vue'
import CategoryNew from './components/categories/CategoryNew.vue'

import Topics from './components/topics/Topics.vue'
import TopicsInCategory from './components/topics/TopicsInCategory.vue'
import TopicNew from './components/topics/TopicNew.vue'
import Topic from './components/topics/Topic.vue'
import TopicEdit from './components/topics/TopicEdit.vue'

export const routes = [
  { path: '/', component: Home },
  {
    path: '/users',
    component: Users,
    children: [
      { path: '', component: UsersAll },
      { path: 'new', component: UserNew },
      { path: ':id', component: UserDetails, props: true },
      { path: ':id/edit', component: UserEdit, props: true }
    ]
  },
  {
    path: '/categories',
    component: Categories,
    children: [
      { path: '', component: CategoriesAll },
      { path: 'new', component: CategoryNew },
      { path: ':id', component: Category },
      { path: ':id/edit', component: CategoryEdit, props: true }
    ]
  },
  {
    path: '/topics',
    component: Topics,
    children: [
      { path: '', component: TopicsInCategory },
      { path: 'new', component: TopicNew },
      { path: ':id', component: Topic },
      { path: ':id/edit', component: TopicEdit }
    ]
  }
]
