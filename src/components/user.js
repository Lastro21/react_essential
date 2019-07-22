import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <div>
                {this.props.name &&
                <div>

                    <p>Name: {this.props.name}</p>
                    <p>Age: {this.props.age}</p>

                </div>
                }
                <p>{this.props.error}</p>
            </div>


        );
    }
}

export default User;