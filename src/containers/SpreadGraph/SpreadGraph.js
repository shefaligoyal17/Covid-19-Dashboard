import React, { Component } from "react";
import styles from "./SpreadGraph.module.css";
import Chart from "../../components/Chart/Chart";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class SpreadGraph extends Component {
  state = {
    currentkey: "confirmed"
  };

  intervalId;
  componentDidMount() {
    this.props.onFetchChart();
    this.intervalId = setInterval(() => this.props.onFetchChart, 300000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  renderChart = (keyname) => {
    this.setState({
      currentkey: keyname
    });
   
  };
  render() {
    let casesarray = [];
    let num;
    if(this.props.error){
      return(<p className={styles.Error}>Chart can't be loaded...</p>);
    }
    if (this.props.chartdata.confirmed) {
      let cases = this.props.chartdata[this.state.currentkey];
      for (let key in cases) {
        let date=key.split('/');
        let array=["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"];
        let month=array[(date[0]-1)];
        let d=(date[1]<10)?'0'+ date[1]:date[1];
        let final=[];
        let finalarr=final.concat(month,d).join(' ');
        let arr = [];
        arr.push(finalarr, cases[key]);
        casesarray.push(arr);
      }
      casesarray.unshift(["date", "cases"]);
      let todaydate = casesarray[casesarray.length - 1];
      let yesterdaydate = casesarray[casesarray.length - 2];
      let now =todaydate[0];
      let today = todaydate[1];
      let yesterday=yesterdaydate[1];
      let todaycases=today-yesterday;
      let type = this.state.currentkey;
      let upper = type.toUpperCase();
      if (this.state.currentkey === "confirmed") {
        num = this.props.cases.totalCases;
      }
      if (this.state.currentkey === "recovered") {
        num = this.props.cases.recovered;
      }
      if (this.state.currentkey === "deceased") {
        num = this.props.cases.totalDeaths;
      }
      if (num > 999) {
        num = (num / 1000).toFixed(1) + "k";
      }
      if (todaycases > 999) {
        todaycases = (todaycases / 1000).toFixed(1) + "k";
      }
      return (
        <div className={styles.MainBox}>
          <div className={styles.Box}>
            <div className={styles.Heading}>Spread Trends</div>
            <div>
              <button
                className={styles.ToggleButtons + ' '+ (this.state.currentkey==="confirmed"?styles.Active:null)}
                onClick={() => this.renderChart("confirmed")}
              >
                Confirmed
              </button>
              <button
                className={styles.ToggleButtons+ ' '+ (this.state.currentkey==="recovered"?styles.Active:null)}
                onClick={() => this.renderChart("recovered")}
              >
                Recovered
              </button>
              <button
                className={styles.ToggleButtons + ' '+ (this.state.currentkey==="deceased"?styles.Active:null)}
                onClick={() => this.renderChart("deceased")}
              >
                Deceased
              </button>
            </div>
          </div>
          <div className={styles.GraphDiv}>
            <div className={styles.Graph}>
              <p className={styles.Type}>{upper}</p>
              <p className={styles.Type}>{now}</p>
              <p className={styles.Num}>
                {num}
                <span className={styles.TodayCases}>+{todaycases}</span>
              </p>
            </div>
            <Chart dataarray={casesarray} />
          </div>
        </div>
      );
    }
    if(!this.props.chartdata.confirmed){
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    chartdata: state.charts.chart,
    cases: state.cases.coronaStats,
    error:state.cases.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchChart: () => dispatch(actions.fetchCharts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpreadGraph);
