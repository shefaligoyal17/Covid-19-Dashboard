import React, { Component } from "react";
import CountrywiseCases from "../../components/countrywiseCases/countrywiseCases";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Aux from "../../hoc/Wrap/Wrap";
import styles from "./country.module.css";
import Spinner from "../../components/Spinner/Spinner";

class Country extends Component {
  intervalId;
  componentDidMount() {
    this.props.onFetchCountries();
    this.intervalId = setInterval(() => this.props.onFetchCountries, 300000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    let countrydata = this.props.error ? (
      <p className={styles.Error}>Country data can't be loaded...</p>
    ) : (
      <Spinner />
    );
    if (this.props.countries.length !== 0) {
      let count = this.props.countries;
      countrydata = count.map((countries) => {
        let num = countries.new_cases.split(",").join("");
        let affect = countries.total_cases.split(",").join("");
        if (affect > 999) {
          affect = (affect / 1000).toFixed(1) + "k";
        }
        let recover = countries.total_recovered.split(",").join("");
        if (recover > 999) {
          recover = (recover / 1000).toFixed(1) + "k";
        }
        return (
          <li key={countries.country}>
            <CountrywiseCases
              flag={countries.flag}
              country={countries.country}
              affected={affect}
              recovered={recover}
              arrow={num}
            />
          </li>
        );
      });
    }
    return (
      <Aux>
        <ul className={styles.List}>{countrydata}</ul>
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,
    error: state.countries.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCountries: () => dispatch(actions.fetchCountries()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Country);
