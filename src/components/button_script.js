import React, {Component} from 'react';

let test_simple_textarea = React.createRef();

class Button_script extends Component {


    alert_func(){
        let text = test_simple_textarea.current.value;
        alert("Was press button + " + text);
    }

    render() {
        return (
            <div>
                test function BTN
                <textarea ref={test_simple_textarea}></textarea>
                <button onClick={this.alert_func}> Press BTN </button>
            </div>
        );
    }
}

export default Button_script;