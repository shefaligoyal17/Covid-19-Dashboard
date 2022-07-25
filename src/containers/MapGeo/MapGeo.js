import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import styles from "./MapGeo.module.css";
import Aux from "../../hoc/Wrap/Wrap";
class MapGeo extends Component {
  intervalId;
  componentDidMount() {
    this.props.onFetchMapData();
    this.intervalId = setInterval(() => this.props.onFetchMapData, 300000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    let finalarray = [];
    let optionArray = {
      colorAxis: { colors: ["#ffC4C6", "#ff797D", "#ff6f7d", "#ff0019"] },
      backgroundColor: "#fbf6f6",
    };
    let mapped = this.props.error ? (
      <p className={styles.Error}>Map can't be loaded...</p>
    ) : (
      <p className={styles.Loader}>Loading the map...</p>
    );
    if (this.props.map.length !== 0) {
      let mapgeo = this.props.map;
      mapped = mapgeo.map((mapped) => {
        let num = mapped.total_cases.split(",").join("");
        let finalvar = parseInt(num);
        let newarray = [];
        if (mapped.country === "USA") {
          mapped.country = "United States";
        }
        newarray.push(mapped.country, finalvar);
        return finalarray.push(newarray);
      });
      finalarray.shift();
      finalarray.unshift(["Country", "Cases"]);
      return (
        <Chart
          chartType="GeoChart"
          data={finalarray}
          options={optionArray}
          mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
          rootProps={{ "data-testid": "1" }}
        />
      );
    }

    return <Aux>{mapped}</Aux>;
  }
}

const mapStateToProps = (state) => {
  return {
    map: state.map.map,
    error: state.map.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMapData: () => dispatch(actions.fetchMapData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapGeo);
