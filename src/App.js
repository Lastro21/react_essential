import React, {Component} from 'react';
import './App.css';

import Info from "./components/info";
import Form from "./components/form";
import User from "./components/user";
import Path_1 from "./components/path_1";
import Path_2 from "./components/path_2";

import Button_script from "./components/button_script";

import Path_3 from "./components/path_3";
import SecurityAuth from "./components/security_auth";
import For_show_array from "./components/for_show_array";

import {BrowserRouter, NavLink, Route} from "react-router-dom";


const one_path = "test";

const posts = [
    {id:1, message: "message 1", age: 31},
    {id:2, message: "message 2", age: 32},
    {id:3, message: "message 3", age: 33},
    {id:4, message: "message 4", age: 34},
    {id:5, message: "message 5", age: 35}
];

class App extends Component {

    state = {
        name: undefined,
        age: undefined,
        error: undefined,
        color: undefined,
        any_custom_param: "My_custom_param from global state!!!"
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

    sendAuthFunc = async (e) => {

        e.preventDefault();

        var userLogin = e.target.elements.userLogin.value;
        var userPassword = e.target.elements.userPassword.value;

        console.log("Работает!!!!!!!!!!!");
        console.log(userLogin);
        console.log(userPassword);

        const api_security = await fetch(`http://localhost:8080/authenticate`,{ method: 'post', headers: {'Content-Type':'application/json'}, body: JSON.stringify({username: 'tokkpasha_2', password: 'password_2'})}).then(response => response.json());
        console.log(api_security.token);
    };

    sendHelloFunc = async (e) => {

        e.preventDefault();

        console.log("Работает!!!!!!!!!!! sendHelloFunc");

        const api_security = await fetch(`http://localhost:8080/hello`,{ method: 'post', headers: {'Content-Type':'application/json', 'Authorization':'Meta eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b2trcGFzaGFfMiIsImV4cCI6MTU2NTI4MTYxNSwiaWF0IjoxNTY1Mjc4MDE1fQ.NCsoBtar8_Hx-lpxZJRNuYGIDGMb0nlkdYdjRadFvypUZ60Oq6HaxXVshf4dg5H2Oo32LsCMlqw-xvKWJVjnFw'}}).then(response => response.json());
        console.log(api_security);

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
                    <NavLink to="/path_1"> Link path_1 </NavLink>

                    <Route path="/path_3" render={ () => <Path_3 any_param={this.state.any_custom_param} /> } />

                    <Route path="/security_auth" render={ () => <SecurityAuth any_param={this.state.any_custom_param} sendAuthInformation={this.sendAuthFunc} getInfoFromHello={this.sendHelloFunc} /> } />

                    <For_show_array custom_posts={posts} />

                    <Button_script />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
