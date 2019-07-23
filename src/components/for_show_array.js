import React, {Component} from 'react';
import './form.css';

class For_show_arry extends Component {
    render() {

        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
            <li>{number}<p>any_add_data</p></li>
        );

        const my_posts = this.props.custom_posts.map((item) =>
            <li><span>{item.id}</span><span>{item.message}</span><span>{item.age}</span></li>
        );

        return (
            <div>
                <p> {this.props.custom_posts[3].message} </p>
                <p>{listItems}</p>
                <br />
                <br />
                <br />

                <p>{my_posts}</p>
            </div>
        );
    }
}

export default For_show_arry;