import React, { Component } from "react";
import styles from "./RecoveryRatio.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { connect } from "react-redux";
import Aux from "../../hoc/Wrap/Wrap";
import Spinner from "../../components/Spinner/Spinner";
import './custom.css';

class RecoveryRatio extends Component {
  render() {
    let datas = this.props.error ? (
      <div className={styles.Error}>
        <p>RecoveryRatio cannot be loaded</p>
      </div>
    ) : (
      <Spinner />
    );
    if (this.props.cases.totalCases) {
      let data = [];
      let arr = [];
      let object = this.props.cases;
      for (let key in object) {
        let newObj = {};
        newObj[key] = object[key];
        data.push(newObj);
      }
      datas = data.filter((items) => {
        for (let value in items) {
          if (value === "totalCases" || value === "recovered") {
            arr.push(items[value]);
          }
        }
        return arr;
      });
      let affected = arr[0];
      let recovered = arr[1];
      let percent = ((arr[1] / arr[0]) * 100).toFixed(1);
      // if(isNaN(percent)){
      //     percent=
      // }
      if (affected > 999) {
        affected = (affected / 1000).toFixed(1) + "k";
      }

      if (recovered > 999) {
        recovered = (recovered / 1000).toFixed(1) + "k";
      }

      return (
        <div className={styles.RecoveryRatio}>
          <p>Ratio of Recovery</p>
          <CircularProgressbar
            className={styles.Progress}
            value={percent}
            text={`${percent}%`}
            styles={buildStyles({
              textSize: "16px",
              pathColor: `#06ba90`,
              trailColor: `#686c8526`,
            })}
          />
          <p>
            <span className={styles.StatsAffected}>
              {affected.toLocaleString()}
            </span>
            <span className={styles.StatsRecovered}>
              {recovered.toLocaleString()}
            </span>
          </p>
        </div>
      );
    }

    return <Aux>{datas}</Aux>;
  }
}

const mapStateToProps = (state) => {
  return {
    cases: state.cases.coronaStats,
    error: state.cases.error,
  };
};

export default connect(mapStateToProps)(RecoveryRatio);
