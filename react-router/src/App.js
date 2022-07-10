/*
 * @Author: yanzhourong
 * @Date: 2022-07-05 23:36:15
 * @LastEditTime: 2022-07-11 00:32:53
 * @Description: 
 */
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Param from "./components/Param";
import RenderComponent from "./components/RenderComponent";
import ChildrenComponent from "./components/ChildrenComponent";
import RedirectComponent from "./components/RedirectComponent";
import MyForm from "./components/MyForm";

function App() {
    const isLogin = false
    return (
        <div className="App">
            <Menu/>

            {/* <Switch> */}
                <Route exact path="/" component={Home}/>
                <Route exact strict path="/about" component={About}/>
                <Route exact path={["/param/:id", "/myparam/:id"]} component={Param} />
                <Route path="/render-component" render={routeProps => <RenderComponent {...routeProps}/>} />
                <Route path="/children-component" children={<ChildrenComponent/>} />
                {/* <Route path="/children-component">
                    <ChildrenComponent/>
                </Route> */}
                {/* <Route path="/children-component" children={routeProps => <ChildrenComponent {...routeProps}/>} /> */}
                {/* <Route path="/children-component">
                    {routeProps => <ChildrenComponent {...routeProps}/>}
                </Route> */}
                <Route path="/redirect-component">
                    {isLogin ? <RedirectComponent/> : <Redirect to={'/'}/>}
                </Route>
                <Redirect from="/abc" to={'/redirect-component'}/>
                <Route exact path="/myform" component={MyForm}/>
            {/* </Switch> */}
        </div>
    );
}

export default App;
