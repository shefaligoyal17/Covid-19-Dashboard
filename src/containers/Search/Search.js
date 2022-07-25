import React, { Component } from "react";
import styles from "./Search.module.css";
import Aux from "../../hoc/Wrap/Wrap";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import CountrywiseCases from "../../components/countrywiseCases/countrywiseCases";
import Spinner from "../../components/Spinner/Spinner";
import SearchData from "../../components/countrywiseCases/SearchedData/SearchedData";
import Country from "../../containers/country/country";

class Search extends Component {
  state = {
    value: "",
  };

  inputChangedHandler = (event) => {
    this.setState({
      value: event.target.value,
    });
    
  };
  keyPress = (event) => {
    if (event.keyCode === 13) {
      this.props.onSearchCountries(event.target.value, "Error occured");
    }
  };

  render() {
    let searchedData = this.props.error ? <p>Error occurred</p> : <Spinner />;
    if (!this.props.countries && this.state.value) {
      return (
        <Aux>
          <SearchData
            value={this.state.value}
            changed={this.inputChangedHandler}
            keypressed={this.keyPress}
          />
          <p>Please enter a valid country name or check spelling. </p>
        </Aux>
      );
    }
    if (this.props.countries) {
      let countryData = this.props.countries;
      let searchdata = [];
      searchdata = Object.values(countryData);
      searchedData = (
        <div className={styles.Div}>
          <CountrywiseCases
            flag={searchdata[10]}
            country={searchdata[0]}
            affected={searchdata[2]}
            recovered={searchdata[6]}
          />
        </div>
      );
    }
    return (
      <Aux>
        <SearchData
          value={this.state.value}
          changed={this.inputChangedHandler}
          keypressed={this.keyPress}
        />
        {this.props.countries && this.props.countries.length!==0 && this.state.value ? searchedData : ""}
        <Country />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.search.countries,
    error: state.search.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchCountries: (value, error) =>
      dispatch(actions.fetchCountriesOnSearch(value, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
