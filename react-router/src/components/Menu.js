/*
 * @Author: yanzhourong
 * @Date: 2022-07-05 23:36:15
 * @LastEditTime: 2022-07-11 00:33:16
 * @Description: 
 */
import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from "./Menu.module.css";

const Menu = () => {
    /*
    *   在使用react router时，一定不要使用a标签来创建超链接
    *       因为a标签创建的超链接，会自动向服务器发送请求重新加载页面
    *       而我们不希望这种情况发生
    *
    *   可以使用Link组件来创建超链接
    *   NavLink和Link作用相似，只是可以指定链接激活后的样式
    * */
    return (
        <div>
            <ul>
                <li>
                    {/*<Link to="/">主页</Link>*/}
                    <NavLink
                        exact
                        activeClassName={classes.active}
                        activeStyle={{textDecoration:"underline"}}
                        to="/">主页</NavLink>
                </li>
                <li>
                    {/*<Link to="/about">关于</Link>*/}
                    <NavLink
                        exact
                        activeClassName={classes.active}
                        activeStyle={{textDecoration:"underline"}}
                        to="/about">关于</NavLink>
                </li>
                <li>
                    {/*<Link to="/about">关于</Link>*/}
                    <NavLink
                        exact
                        activeClassName={classes.active}
                        activeStyle={{textDecoration:"underline"}}
                        to="/param/1">param-1</NavLink>
                </li>
                <li>
                    {/*<Link to="/about">关于</Link>*/}
                    <NavLink
                        exact
                        activeClassName={classes.active}
                        activeStyle={{textDecoration:"underline"}}
                        to="/render-component">render-component</NavLink>
                </li>
                <li>
                    {/*<Link to="/about">关于</Link>*/}
                    <NavLink
                        exact
                        activeClassName={classes.active}
                        activeStyle={{textDecoration:"underline"}}
                        to="/children-component">children-component</NavLink>
                </li>
                <li>
                    {/*<Link to="/about">关于</Link>*/}
                    <NavLink
                        exact
                        activeClassName={classes.active}
                        activeStyle={{textDecoration:"underline"}}
                        to="/redirect-component">redirect-component</NavLink>
                </li>
                <li>
                    {/*<Link to="/about">关于</Link>*/}
                    <NavLink
                        exact
                        activeClassName={classes.active}
                        activeStyle={{textDecoration:"underline"}}
                        to="/myform">myform</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
