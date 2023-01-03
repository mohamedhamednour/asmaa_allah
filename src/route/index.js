import { createRouter, createWebHistory } from "vue-router";
import GetData from '../components/GetData'
import Get_id from '../components/Get_id'
import  Wa3y from '../components/Wa3y'
import Azkar2day from '../components/Azkar2day'
const routes = [
  {
    path: "/",
    name: "home",
    component: GetData,

  },
  
  { path: "/idpage", component: Get_id },
  { path: "/budcast", component: Wa3y },
  { path: "/azkar", component: Azkar2day },


 


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;