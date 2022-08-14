import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const values = props.dataset.map((data) => data.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.dataset.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={maxValue}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
