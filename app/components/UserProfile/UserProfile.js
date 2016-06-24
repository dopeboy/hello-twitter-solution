import React from 'react';
import UserDetails from '../UserDetails/UserDetails';
import TweetBox from '../TweetBox/TweetBox';
import UserStats from '../UserStats/UserStats';
import TweetList from '../TweetList/TweetList';
import './UserProfile.scss';

export default class UserProfile extends React.Component {
    
    // A twitter profile page contains a set of tweets 
    // and a list of attributes identifying the user.
    state = {
        tweets: [],
        firstName: 'Manish',
        lastName: 'Sinha',
        handle: '@manishsinha',
        profilePictureURL: 'http://i.imgur.com/YvxPDY8.jpg'
    }
    
    constructor(props) {
        super(props);
    }

    // To add a tweet, we create a dictionary containing attributes
    // of the tweet and then add it to the 'tweets' array
    // that is part of this component's state
    addTweet = (tweetText) => {
        var tweet = {
            creatorName: this.state.firstName + " " + this.state.lastName,
            creatorHandle: this.state.handle,
            text: tweetText,
            liked: false
        }

        // unshift() is like push() but to the beginning of the array
        this.state.tweets.unshift(tweet);
        this.setState({tweets: this.state.tweets});
    }

    // To like a tweet, we simply change its 'liked' attribute
    likeTweet = (index) => {
        this.state.tweets[index].liked = true;
        this.setState({tweets: this.state.tweets});
    }
    
    unlikeTweet = (index) => {
        this.state.tweets[index].liked = false;
        this.setState({tweets: this.state.tweets});
    }

    // To calculate to the number of tweets that this user has liked, 
    // we iterate through their array of tweets and count.
    calculateLikeCount = () => {
        var count = 0;

        for (var i=0; i<this.state.tweets.length; ++i) {
            if (this.state.tweets[i].liked)
                ++count;
        }

        return count;
    }

    // This is the most important part of this project. This component is the most important
    // parent component because it holds the key state variables - namely the array of all the tweets.
    // So every child will either be reading that list or writing to it. So it is this component's job
    // to adequately pass the necessary information each component needs to function properly. 
    //
    // To the TweetBox component, we pass the addTweet() handler. So when a user interacts
    // with that component and submits a new tweet, that component will call the handler it was passed
    // which in turn calls addTweet() here.
    //
    // To the UserDetails component, we just pass the attributes describing this user so it can render
    // the left sidebar.
    //
    // To the UserStats component, we pass the number of tweets and the number of tweets this user has liked.
    // Both are derived from the tweets array which is housed in this UserProfile component
    //
    // To the TweetList component, we pass the array of tweets because it will need to render all of them.
    // We also pass the likeTweet() and unlikeTweet() handlers because those components will need to 
    // know what to do when those actions are performed inside those components. Again, those actions
    // change a tweet's data. Because this component, UserProfile, stores all the tweets, it must
    // update the state of its tweets variable.
    render() {
        return (
            <div id="user-profile-component">
                <div id="tweet-box" className="row">
                    <div className="center-block">
                        <TweetBox addTweetHandler={this.addTweet} />
                    </div>
                </div>
                <div id="main" className="row">
                    <div className="col-md-2">
                        <UserDetails name={this.state.firstName + " " + this.state.lastName} handle={this.state.handle} profilePictureURL={this.state.profilePictureURL} />
                    </div>
                    <div className="col-md-8">
                        <UserStats tweetCount={this.state.tweets.length} likeCount={this.calculateLikeCount()} />
                        <div id="tweet-list">
                            <TweetList unlikeTweetHandler={this.unlikeTweet} likeTweetHandler={this.likeTweet} tweets={this.state.tweets} />
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
        )
    }
}
