import React, {Component} from 'react';
import './form.css';

class Path_3 extends Component {
    render() {
        return (
            <div>
                SHOW KLASS PATH_2 because ROUTE = /path_3
                <p> {this.props.any_param} </p>
            </div>
        );
    }
}

export default Path_3;