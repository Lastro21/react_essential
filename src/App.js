import React, {Component} from 'react';
import './App.css';

import Info from "./components/info";
import Form from "./components/form";
import User from "./components/user";
import Path_1 from "./components/path_1";
import Path_2 from "./components/path_2";
import {BrowserRouter, Route} from "react-router-dom";


const one_path = "test";

class App extends Component {

    state = {
        name: undefined,
        age: undefined,
        error: undefined,
        color: undefined
    };

    gettingInfoFromOutAPI = async (e) => {

        e.preventDefault();

        var two_part = e.target.elements.route.value;


        try {
            const api_url = await fetch(`http://localhost:8090/${one_path}/${two_part}`).then(response => response.json());
            console.log(api_url.name);
            console.log(api_url.age);

            this.setState({
                color: "blue"
            });

            if (two_part.length > 0) {
                this.setState({
                    name: api_url.name,
                    age: api_url.age,
                    error: undefined,
                    // color: "blue"
                });
            } else {
                this.setState({
                    name: undefined,
                    age: undefined,
                    error: "Error: empty input.",
                    // color: "blue"
                });
            }

            console.log();

        } catch (e) {
            console.log("Not answer from server. Reason: " + e);
        }


    };

    render() {
        return (
            <BrowserRouter>
                <div id="mainWrapper">
                    <Info my_color={this.state.color}/>
                    <Form getInfoApiMethod={this.gettingInfoFromOutAPI}/>
                    <User name={this.state.name} age={this.state.age} error={this.state.error}/>
                    <Route path="/path_1" component={Path_1} />
                    <Route path="/path_2" component={Path_2} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
