import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '@/components/UserLogin.vue';
import HelloWorld from '@/components/HelloWorld.vue'; 

// Define the routes
const routes = [
  { path: '/login', component: UserLogin, name: 'Login' },
  { path: '/dashboard', component: HelloWorld, name: 'Dashboard' },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// Export the router instance
export default router;
