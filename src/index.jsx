import React from "react";
import { BrowserRouter as Router,Route,Link,Switch }from 'react-router-dom';
import Main from "./Main";
import Contact from "./Contact";
import About from "./About";

function App(){
    return (
      <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/main">მთავარი გვერდი</Link>
                    </li>
                    <li>
                        <Link to="/contact">კონტაქტი</Link>
                    </li>
                    <li>
                        <Link to="/about">ჩვენს შესახებ</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/main">
                    <Main/>
                </Route>
            </Switch>
        </div>
      </Router>
    );
}

ReactDOM.creatRoot(document.getElementById("root")).render(<App/>);