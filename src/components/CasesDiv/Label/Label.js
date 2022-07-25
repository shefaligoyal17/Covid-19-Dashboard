import React from "react";
import upArrow from "../../../images/up.png";
import downArrow from "../../../images/down.png";

const Graphs = (props) => {
  let label = null;
  switch (props.label) {
    case "totalCases":
      label = (
        <span className={props.class}>
          Total Cases
          <img src={upArrow} alt="arrow" />
        </span>
      );
      break;
    case "recovered":
      label = (
        <span className={props.class}>
          Recovered
          <img src={downArrow} alt="arrow" />
        </span>
      );
      break;
    case "activeCases":
      label = (
        <span className={props.class}>
          Active Cases
          <img src={upArrow} alt="arrow" />
        </span>
      );
      break;
    case "totalDeaths":
      label = (
        <span className={props.class}>
          Total Deaths
          <img src={upArrow} alt="arrow" />
        </span>
      );
      break;
    default:
      label = null;
  }
  return label;
};

export default Graphs;
