import { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
    <Suspense fallback={<div>加载中...</div>}>
      <Switch>
        <Route
          path="/"
          render={(routerProps) => {
            return (
              <div className="App">
                <App />
              </div>
            );
          }}
        />
      </Switch>
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
