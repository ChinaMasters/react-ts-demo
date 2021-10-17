import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const EditableTable = lazy(() => import("./EditableTable"));
const EditCell = lazy(() => import("./EditableTable/EditCell"));
const Study = lazy(() => import("./Study"));
const Context = lazy(() => import("./Context"));

const routes = [
  {
    name: "HOME",
    component: Home,
    path: "/Home",
  },
  {
    name: "About",
    component: About,
    path: "/About",
  },
  {
    name: "EditableTable",
    component: EditableTable,
    path: "/EditableTable",
  },
  {
    name: "EditCell",
    component: EditCell,
    path: "/EditCell",
  },
  {
    name: "Study",
    component: Study,
    path: "/Study",
  },
  {
    name: "Context",
    component: Context,
    path: "/Context",
  },
];

export default routes;
