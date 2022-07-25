import React from "react";
import styles from "./TweetArea.module.css";

const TweetArea = (props) => {
  return (
    <div className={styles.Tweetarea}>
      <div className={styles.Head}>
        <img src={props.image} alt="profile-icon" />
        <div className={styles.Name}>
          <p className={styles.User}>{props.user}</p>
          <p className={styles.Account}>@{props.account}</p>
        </div>
      </div>
      <p className={styles.Content}>{props.content}</p>
      <div className={styles.Foot}>
        <span className={styles.Likes}>
          <i className="fa fa-heart"></i>
          {props.likes}
        </span>
        <span className={styles.Retweet}>
          <i className="fa fa-retweet"></i>
          {props.retweet}
        </span>
        <span className={styles.Time}>{props.time}</span>
      </div>
      <hr className={styles.Line} />
    </div>
  );
};

export default TweetArea;
