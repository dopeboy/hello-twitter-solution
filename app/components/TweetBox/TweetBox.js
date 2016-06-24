import React from 'react';

export default class TweetBox extends React.Component {
    state = {
        tweetText: ''
    }

    constructor(props) {
        super(props);
    }

    // Everytime the text inside the input box changes, we update our own
    // state variable.
    updateTweetText = (e) => {
        this.setState({tweetText: e.target.value});
    }

    // If the input box is not empty, call the handler that was passed by our parent.
    // Then clear the text in the input box.
    submitTweet = () => {
        if (this.state.tweetText != '') { 
            this.props.addTweetHandler(this.state.tweetText);
            this.setState({tweetText: ''});
        }
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" onChange={this.updateTweetText} value={this.state.tweetText} placeholder="Type your tweet here..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={this.submitTweet}>Tweet</button>
                    </span>
                </div>
            </div>
        )
    }
}
