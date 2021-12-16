import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from 'antd';
import 'antd/dist/antd.css';
import 'moment/locale/zh-cn';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';


ReactDOM.render(
    <BrowserRouter>
        <ConfigProvider locale={zhCN}>
            <App/>
        </ConfigProvider>
    </BrowserRouter>,
    document.getElementById('root')
);


render(<App/>, document.getElementById('root'));

