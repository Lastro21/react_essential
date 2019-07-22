import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getInfoApiMethod}>
                <p>Component with form</p>
                <input type="text" name="route" placeholder="Enter API route"/>
                <button>Get info from API</button>
            </form>
        );
    }
}

export default Form;