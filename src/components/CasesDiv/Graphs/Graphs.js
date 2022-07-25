import React from "react";
import totalCasesGraph from "../../../images/totalcases.png";
import recoveredGraph from "../../../images/recovered.png";
import activeCasesGraph from "../../../images/activecases.png";
import deathsGraph from "../../../images/deaths.png";

const Graphs = (props) => {
  let graph = null;
  switch (props.label) {
    case "totalCases":
      graph = <img src={totalCasesGraph} alt="total cases graph" />;
      break;
    case "recovered":
      graph = <img src={recoveredGraph} alt="recovered cases graph" />;
      break;
    case "activeCases":
      graph = <img src={activeCasesGraph} alt="active cases graph" />;
      break;
    case "totalDeaths":
      graph = <img src={deathsGraph} alt="total deaths graph" />;
      break;
    default:
      graph = null;
  }
  return graph;
};

export default Graphs;
