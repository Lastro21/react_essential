import React, {Component} from 'react';
import './form.css';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getInfoApiMethod}>
                <p id="with_form">Component with form</p>
                <input id="input_form" type="text" name="route" placeholder="Enter API route"/>
                <button>Get info from API</button>
            </form>
        );
    }
}

export default Form;