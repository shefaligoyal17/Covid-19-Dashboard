import React, { Component } from "react";
import Corousal from "../News/Corousal";
import coronaImg from "../../images/coronaim.jpeg";
import videoImg from "../../images/videosim.png";
import donateImg from "../../images/donate.png";
import styles from "./NewsAndUpdates.module.css";
import { Link } from "react-router-dom";

const array = [
  <Corousal
    imageStyle={styles.Image1}
    image={coronaImg}
    alt="symptoms illustration"
    heading="News and Updates"
    news="Click to get the most trending news of COVID-19..."
    route="/news"
    buttonText="Read More"
  />,
  <Corousal
    imageStyle={styles.Image2}
    image={videoImg}
    alt="precautions illustration"
    heading="News and Updates"
    news="Click to watch videos regarding COVID-19..."
    route="/videos"
    buttonText="Read More"
  />,
  <Corousal
    imageStyle={styles.Image3}
    image={donateImg}
    alt="myth illustration"
    heading="News and Updates"
    news="Click to donate for needy..."
    route="/help"
    buttonText="Read More"
  />,
];

class NewsAndUpdates extends Component {
  state = {
    index: 0,
    handle: null,
  };

  startRolling = () => {
    const handle = setInterval(() => {
      let currentIndex = this.state.index + 1;
      this.setState({ index: currentIndex % 3 });
    }, 2000);

    this.setState({
      handle: handle,
    });
  };

  componentDidMount() {
    this.startRolling();
  }

  componentWillUnmount() {
    clearInterval(this.state.handle);
  }

  stopRolling = () => {
    clearInterval(this.state.handle);
  };

  setCurrentIndex = (index) => {
    this.setState({
      index: index,
    });
  };

  render() {
    return (
      <div
        className={styles.carousel}
        onMouseEnter={this.stopRolling}
        onMouseLeave={this.startRolling}
      >
        <div className={styles.banner}>{array[this.state.index]}</div>
        <span className={styles.DotContainer}>
          <Link
            to="/"
            onClick={() => this.setCurrentIndex(0)}
            className={
              styles.Dot +
              " " +
              (this.state.index === 0 ? styles.DotActive : "")
            }
          ></Link>
          <Link
            to="/"
            onClick={() => this.setCurrentIndex(1)}
            className={
              styles.Dot +
              " " +
              (this.state.index === 1 ? styles.DotActive : "")
            }
          ></Link>
          <Link
            to="/"
            onClick={() => this.setCurrentIndex(2)}
            className={
              styles.Dot +
              " " +
              (this.state.index === 2 ? styles.DotActive : "")
            }
          ></Link>
        </span>
      </div>
    );
  }
}

export default NewsAndUpdates;
