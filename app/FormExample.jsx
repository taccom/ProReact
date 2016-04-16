import React, { Component } from 'react';
import { render } from 'react-dom';

class FormExample extends Component {
    onSubmit(event) {
        console.log("Submitted values are:",
            event.target.name.value,
            event.target.email.value
        );
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit = { e => this.onSubmit(e) }>
                <div className = "formGroup">
                    Name: <input name = "name" type = "text"/>
                </div>
                <div className = "formGroup">
                    E-mail: <input name = "email" type = "mail"/>
                </div>
                <button type = "submit">Submit</button>
            </form>
        );
    }
}

export default FormExample;