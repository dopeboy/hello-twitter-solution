import React from 'react';
import Tweet from '../Tweet/Tweet';

export default class TweetList extends React.Component {
    constructor(props) {
        super(props);
    }

    // We get an array of tweets from our parent, UserProfile.
    render() {
        return (
            <div>
                {this.props.tweets.length == 0 ?
                    <span>You don't have any tweets.</span>
                    :
                    this.props.tweets.map((tweet, index)=>
                        <Tweet unlikeTweetHandler={this.props.unlikeTweetHandler} likeTweetHandler={this.props.likeTweetHandler} key={index} index={index} tweetData={tweet}/>
                )}
            </div>
        )
    }
}
