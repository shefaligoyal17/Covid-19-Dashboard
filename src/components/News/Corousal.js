import React from "react";
import { Link } from "react-router-dom";
import styles from "./Corousal.module.css";
import Aux from "../../hoc/Wrap/Wrap";

const News = (props) => {
  return (
    <Aux>
      <div className={styles.News}>
        <div>
          <img className={props.imageStyle} src={props.image} alt={props.alt} />
        </div>
        <div>
          <Link className={styles.Heading} to={props.route}>
            {props.heading}
          </Link>
          <p className={styles.NewsHeading}>{props.news}</p>
          <Link className={styles.Btn} to={props.route}>
            {props.buttonText}
            <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </Aux>
  );
};

export default News;
