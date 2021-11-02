import { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // 支持异步
import reducer from "./Store/reducers";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// @ts-ignore
const logger1 = (store) => (next) => (action) => {
  console.group("logger");
  console.warn("dispatching", action);

  let result = next(action);

  console.warn("next state", store.getState());
  console.groupEnd();

  return result;
};

// @ts-ignore
const logger2 = (store) => (next) => (action) => {
  console.group("logger2");
  console.warn("dispatching2", action);

  let result = next(action);

  console.warn("next state2", store.getState());
  console.groupEnd();

  return result;
};

// 1、创建 store
export const store = createStore(reducer, applyMiddleware(thunk, logger2, logger1));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
      <Suspense fallback={<div>加载中...</div>}>
        <Switch>
          <Route
            path="/"
            render={() => {
              return (
                <div className="App">
                  <App />
                </div>
              );
            }}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
