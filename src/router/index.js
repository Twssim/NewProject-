import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Mypage/Home.vue' 
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:home,
    meta: {
      keepAlive:true
    },
    children:[
      {
        path: '/My',
        component: ()=> import("../components/Mypage/My.vue")
      },
    ]
  },
  {
    path:"/Review",
    component:() => import('../components/Mypage/TestPage/Review.vue'),
    meta: {
      keepAlive:true
    },
  },
  {
    path:'/Exercise',
    component:()=> import('../components/Mypage/TestPage/Exercise.vue')
  },
  {
    path:'/Collect',
    component:()=> import("../components/Instrument/Collect.vue")
  },
  {
    path:'/MistakeBook',
    component:()=> import("../components/Instrument/MistakeBook.vue")
  },
  {
    path:'/Random',
    component:()=> import("../components/Mypage/TestPage/Random.vue")
  },{
    path:'/Mytest',
    component:()=> import("../components/Instrument/MyTest")
  },
  {
    path:'/TwoSubjectsVideo',
    component:()=> import("../components/Instrument/TwoSubjectsVideo.vue")
  },
  {
    path:'/ThreeSubjectsVideo',
    component:()=> import("../components/Instrument/ThreeSubjectsVideo.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
