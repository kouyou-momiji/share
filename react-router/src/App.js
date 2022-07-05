/*
 * @Author: yanzhourong
 * @Date: 2022-07-05 23:36:15
 * @LastEditTime: 2022-07-05 23:48:02
 * @Description: 
 */
import {Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="App">
            <Menu/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/about.html" component={About}/>
        </div>
    );
}

export default App;
