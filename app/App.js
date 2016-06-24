import React from 'react';
import 'jquery';
import 'tether';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

// This is our parent component. It wraps every viewable
// component with bootstrap's container class. This is a 
// requirement for using bootstrap's CSS components.
export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}
