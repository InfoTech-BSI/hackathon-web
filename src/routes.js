
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import UnidadeSaude from "views/modulos/UnidadeSaude";
import Paciente from "views/examples/Paciente.js"

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },

  {
    path: "/user-profile",
    name: "Usuário",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Pacientes",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Cadastro ",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/unidades",
    name: "Unidades de saúde",
    icon: "ni ni-building text-blue",
    component: UnidadeSaude,
    layout: "/admin"
  },

  {
    
      path: "/pacientes",
      name: "Cadastro Paciente",
      icon: "ni ni-circle-08",
      component: Paciente,
      layout: "/admin"
    
  }
];
export default routes;
