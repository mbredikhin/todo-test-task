import Vue from 'vue';
import VueRouter from 'vue-router';
import Board from '@/views/Board.vue';
import Editor from '@/views/Editor.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Board },
  { path: '/editor/:id', component: Editor },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
