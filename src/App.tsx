import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import routes from "./router";
import "./App.css";
function App() {
  return (
    <Switch>
      {routes.map((router) => (
        <Route
          key={router.path}
          path={router.path}
          component={router.component}
        ></Route>
      ))}
      {/* 设置默认路由 推荐方法一*/}
      {/* 方法一 */}
      {/* <Route path="/" component={Home} exact></Route> */}
      {/* 方法二 重定向*/}
      <Redirect path="/" to="/home" />
    </Switch>
  );
}

export default withRouter(App);
