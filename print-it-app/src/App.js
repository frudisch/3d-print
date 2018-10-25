import React, {Component} from 'react';
import './App.css';
import Test from "./component/test/Test";
import {Provider} from "styletron-react";
import {Client as Styletron} from "styletron-engine-atomic";

const engine = new Styletron();

class App extends Component {
    render() {
        return (
            <Provider value={engine}>
                <div className="App">
                    <Test/>
                </div>
            </Provider>
        );
    }
}

export default App;
