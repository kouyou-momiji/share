/*
 * @Author: yanzhourong
 * @Date: 2022-06-22 16:37:45
 * @LastEditTime: 2022-07-10 22:22:56
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

/*
*  HashRouter 会通过url地址中的hash值来对地址进行匹配
*
*   BrowserRouter 直接通过url地址进行组件的跳转
*       使用过程中和普通的url地址没有区别
*
*
* 解决方案：
*   1.使用HashRouter，服务器不会去判断hash值，
*       所以使用HashRouter后请求将会由React Router处理
*   2.修改服务器的配置，将所有请求都转发到index.html
*       location / {
            root   html;
            #index  index.html index.htm;
			try_files $uri /index.html;
        }
*
*
* react router 使用步骤
*       1. 引入react-router-dom包
*       2. 在index.js中引入BrowserRouter组件
*       3. 将BrowserRouter设置为根组件
*
* */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);

