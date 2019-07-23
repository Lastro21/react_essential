import React, {Component} from 'react';
import './info.css';

class Info extends Component {
    render() {
        return (
            <div>
                <p id="first_app1" style={{color : this.props.my_color}}>First app</p>
                <p id="hello_world">Hello world!!!</p>
                <p className="first_app">sfwe2222115</p>
            </div>
        );
    }
}

export default Info;