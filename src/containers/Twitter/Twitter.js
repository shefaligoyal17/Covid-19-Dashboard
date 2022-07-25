import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Twitter from "../../components/Tweets/TweetArea";
import Aux from "../../hoc/Wrap/Wrap";

class Twit extends Component {
  intervalId;
  componentDidMount() {
    this.props.onFetchTweets();
    this.intervalId = setInterval(() => this.props.onFetchTweets, 300000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    let tweets = this.props.error ? <p>Tweets can't be loaded</p> : null;
    if (this.props.tweets.length !== 0) {
      let t = this.props.tweets;
      tweets = t.map((tweet) => {
        let like = tweet.favorite_count;
        if (like > 999) {
          like = (like / 1000).toFixed(1) + "k";
        }
        let retweet = tweet.retweet_count;
        if (retweet > 999) {
          retweet = (retweet / 1000).toFixed(1) + "k";
        }
        return (
          <Twitter
            key={tweet.user.name}
            image={tweet.user.profile_image_url_https}
            user={tweet.user.name}
            account={tweet.user.screen_name}
            content={tweet.text}
            likes={like}
            retweet={retweet}
            time={tweet.created_at}
          ></Twitter>
        );
      });
    }
    return <Aux>{tweets}</Aux>;
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.twitter.tweets,
    error: state.twitter.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTweets: () => dispatch(actions.fetchTweets()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Twit);
