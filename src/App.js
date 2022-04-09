import React from "react";
import { Provider } from "react-redux"
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import { renderRoutes } from "react-router-config"; // 读取路由配置转化为Route标签
import { HashRouter } from "react-router-dom";
import routes from "./routes/index";
import store from "./store";

export default function App () {
    return (
        <Provider store={store}>
            <HashRouter>
                <GlobalStyle></GlobalStyle>
                <IconStyle></IconStyle>
                {
                    renderRoutes(routes)
                }
            </HashRouter>
        </Provider>
    );
}