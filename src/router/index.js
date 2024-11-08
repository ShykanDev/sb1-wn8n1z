import { createRouter, createWebHashHistory } from 'vue-router';
import { useUserLogin } from '../stores/UserLogin';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta:{
        loginRequired: false,
      }
    },
    {
      path: '/exnovio',
      name: 'exnovio',
      component: () => import('../views/ExBoyfriend.vue'),
      meta:{
        loginRequired: false,
      }
    },
    {
      path: '/exnovia',
      name: 'exnovia',
      component: () => import('../views/ExGirlfriend.vue'),
      meta:{
        loginRequired: false,
      }
    },
    {
      path: '/comentarios',
      name: 'comments',
      component: () => import('../views/CommentsSectionView.vue'),
      meta:{
        loginRequired: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta:{
        loginRequired: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginViewV2.vue'),
      meta:{
        loginRequired: false,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta:{
        loginRequired: false,
      }
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: () => import('../views/CookiesView.vue'),
      meta:{
        loginRequired: false,
      }}
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach((to, from, next) => {
  const storeUser = useUserLogin();

  if (to.meta.loginRequired && !storeUser.getUser ) {
    next('/login');
  } else {
    next();
  }
});

export default router;