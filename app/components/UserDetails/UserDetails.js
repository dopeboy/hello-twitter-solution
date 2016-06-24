import React from 'react';
import './UserDetails.scss';

export default class UserDetails extends React.Component {
    state = {
    }

    constructor(props) {
        super(props);
    }

    // Simple rendering. We are getting everything from our parent, UserProfile.
    render() {
        return (
            <div id="user-details-component">
                <img src={this.props.profilePictureURL}  alt="..." className="img-rounded"/>
                <br/>
                {this.props.name}
                <br/>
                <b>{this.props.handle}</b>
            </div>
        )
    }
}
