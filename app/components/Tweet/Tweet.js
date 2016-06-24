import React from 'react';
import './Tweet.scss';

export default class Tweet extends React.Component {
    state = {
    }

    constructor(props) {
        super(props);
    }

    // All three of the functions below call handlers passed from our
    // parent, TweetList. TweetList got them from its parents, 
    // UserProfile.
    unlikeTweet(index) {
        this.props.unlikeHandler(index);
    }
    
    likeTweet = (index) => {
        this.props.likeTweetHandler(index);
    }
   
    unlikeTweet = (index) => {
        this.props.unlikeTweetHandler(index);
    }

    render() {
        return (
            <div id="tweet-component">
                <b>{this.props.tweetData.creatorName}</b>&nbsp;{this.props.tweetData.creatorHandle}
                <br/>
                {this.props.tweetData.text}
                <br/>
                <p className="like-unlike">
                    {this.props.tweetData.liked ?
                        <a onClick={this.unlikeTweet.bind(this, this.props.index)} href="#">Unlike</a> :
                        <a onClick={this.likeTweet.bind(this, this.props.index)} href="#">Like</a>
                    }
                </p>
            </div>
        )
    }
}
