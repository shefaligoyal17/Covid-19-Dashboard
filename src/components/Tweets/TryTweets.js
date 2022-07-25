import React from "react";
import TwitterImg from "../../images/twitter.png";
import styles from "./TryTweets.module.css";
import Twitters from "../../containers/Twitter/Twitter";

const Twitter = (props) => {
  return (
    <div className={styles.Twitter}>
      <p className={styles.Tweets}>
        Latest Tweets
        <img
          className={styles.TwitterIcon}
          src={TwitterImg}
          alt="twitter-icon"
        />
      </p>
      <Twitters />
    </div>
  );
};

export default Twitter;
