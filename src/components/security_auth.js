import React, {Component} from 'react';

class SecurityAuth extends Component {
    render() {
        return (
            <div>
                SHOW KLASS SecurityAuth because ROUTE = /security_auth
                <p> {this.props.any_param} </p>
                <p> //////////////////////// Здесь начинается форма //////////////////////// </p>
                <form onSubmit={this.props.sendAuthInformation}>
                    <input id="userLogin" type="text" name="userLogin" placeholder="Имя"/>
                    <input id="userPassword" type="text" name="userPassword" placeholder="Пароль"/>
                    <button>Send auth information</button>
                </form>
                <br/>
                <br/>
                <form onSubmit={this.props.getInfoFromHello}>
                    <button>Get info from Hello</button>
                </form>
                <p> //////////////////////// Здесь заканчивается форма //////////////////////// </p>
            </div>
        );
    }
}

export default SecurityAuth;