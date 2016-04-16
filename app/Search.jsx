import React, { Component } from 'react';
import { render } from 'react-dom';

class Search extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            selection: "A"
        }
    }
    handleChange(event) {
        this.setState({ selection: event.target.value });
    }
    render() {
        return (
            <div>
                <select value={ this.state.selection } onChange = { event => this.handleChange(event) }>
                    <option value="A">Mobile</option>
                    <option value="B">Work</option>
                    <option value="C">Home</option>
                </select>
            </div>
        );
    }
}

export default Search;
