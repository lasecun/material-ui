import React from 'react';
import ContainedButtons from './component/button';
import SwitchLabels from './component/switch';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Examples for Material UI
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <body>
                <Route path="/about/" component={ContainedButtons}/>
                </body>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/buttons/">Buttons</Link>
                        </li>
                        <li>
                            <Link to="/switch/">Switch</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/buttons" component={ContainedButtons}/>
                <Route path="/switch/" component={SwitchLabels}/>
            </div>
        </Router>
    );
};

export default App;
