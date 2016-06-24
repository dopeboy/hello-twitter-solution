import React from 'react';
import './UserStats.scss';

export default class UserStats extends React.Component {
    state = {
    }

    constructor(props) {
        super(props);
    }

    // Simple rendering. We are getting both counts from our parent, UserProfile.
    render() {
        return (
            <div id="user-stats-component" className="row">
                <div className="col-md-2">
                    <p className="font-weight-bold text-md-center">
                        Tweets
                    </p>
                    <p className="text-md-center">
                        {this.props.tweetCount}
                    </p>
                </div>
                <div className="col-md-2">
                    <p className="font-weight-bold text-md-center">
                        Likes
                    </p>
                    <p className="text-md-center">
                        {this.props.likeCount}
                    </p>
                </div>
            </div>
        )
    }
}
