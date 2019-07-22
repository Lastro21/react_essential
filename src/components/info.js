import React, {Component} from 'react';

class Info extends Component {
    render() {
        return (
            <div>
                <p id="first_p" style={{color : this.props.my_color}}>First app</p>
                <p>Hello world!!!</p>
            </div>
        );
    }
}

export default Info;