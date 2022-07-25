import React, { Component } from "react";
import Cases from "../../components/CasesDiv/CasesDiv";
import { Row, Col } from "react-bootstrap";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Graphs from "../../components/CasesDiv/Graphs/Graphs";
import styles from "./Collection.module.css";
import Label from "../../components/CasesDiv/Label/Label";
import Aux from "../../hoc/Wrap/Wrap";
import Spinner from "../../components/Spinner/Spinner";

class Collection extends Component {
  interval;

  componentDidMount() {
    this.props.onFetchCases();
    this.interval = setInterval(() => this.props.onFetchCases, 300000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let casesData = this.props.error ? (
      <div className={styles.Error}>
        <p>Cases can't be loaded</p>
      </div>
    ) : (
      <Spinner />
    );
    if (this.props.cases.totalCases) {
      let data = [];
      let object = this.props.cases;
      for (let key in object) {
        let newObj = {};
        newObj[key] = object[key];
        data.push(newObj);
      }
      casesData = data.map((cases) => {
        for (let value in cases) {
          return (
            <Col key={value}>
              <div className={styles.Box}>
                <div>
                  <Label class={styles.Label} label={value} />
                  <Cases
                    class={styles.Case}
                    label={value}
                    casedata={cases[value].toLocaleString()}
                  />
                </div>
                <Graphs label={value} />
              </div>
            </Col>
          );
        }
      });
    }
    return (
      <Aux>
        <Row noGutters={true}>{casesData}</Row>
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cases: state.cases.coronaStats,
    error: state.cases.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCases: (error) => dispatch(actions.fetchCases(error)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Collection);
