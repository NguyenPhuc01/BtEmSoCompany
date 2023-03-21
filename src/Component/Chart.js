import React from "react";
import { CanvasJS, CanvasJSChart } from "canvasjs-react-charts";
export default function Chart() {
  const options = {
    animationEnabled: true,
    title: {
      text: "Monthly Sales - 2017",
    },
    axisX: {
      labelFormatter: function (e) {
        return CanvasJS.formatDate(e.value, "HH:mm");
      },
    },

    data: [
      {
        yValueFormatString: "##,##%",
        xValueFormatString: "HH:mm",
        type: "spline",
        dataPoints: [
          { x: new Date(2023, 2, 21, 9, 0), y: 13 },
          { x: new Date(2023, 2, 21, 10, 0), y: 23 },
          { x: new Date(2023, 2, 21, 11, 0), y: 12 },
          { x: new Date(2023, 2, 21, 12, 0), y: 25 },
          { x: new Date(2023, 2, 21, 13, 0), y: 21 },
          { x: new Date(2023, 2, 21, 14, 0), y: 21 },
          { x: new Date(2023, 2, 21, 15, 0), y: 25 },
          { x: new Date(2023, 2, 21, 16, 0), y: 22 },
          { x: new Date(2023, 2, 21, 17, 0), y: 12 },
          { x: new Date(2023, 2, 21, 18, 0), y: 25 },
          { x: new Date(2023, 2, 21, 19, 0), y: 23 },
          { x: new Date(2023, 2, 21, 20, 0), y: 12 },
        ],
      },
      {
        yValueFormatString: "##,##%",
        xValueFormatString: "HH:mm",
        type: "spline",
        dataPoints: [
          { x: new Date(2023, 2, 21, 9, 0), y: 16 },
          { x: new Date(2023, 2, 21, 10, 0), y: 22 },
          { x: new Date(2023, 2, 21, 11, 0), y: 12 },
          { x: new Date(2023, 2, 21, 12, 0), y: 22 },
          { x: new Date(2023, 2, 21, 14, 0), y: 23 },
          { x: new Date(2023, 2, 21, 15, 0), y: 22 },
          { x: new Date(2023, 2, 21, 16, 0), y: 24 },
          { x: new Date(2023, 2, 21, 17, 0), y: 25 },
          { x: new Date(2023, 2, 21, 18, 0), y: 21 },
          { x: new Date(2023, 2, 21, 19, 0), y: 24 },
          { x: new Date(2023, 2, 21, 20, 0), y: 25 },
        ],
      },
      {
        yValueFormatString: "##,##%",
        xValueFormatString: "HH:mm",
        type: "spline",
        dataPoints: [
          { x: new Date(2023, 2, 21, 9, 0), y: 11 },
          { x: new Date(2023, 2, 21, 10, 0), y: 22 },
          { x: new Date(2023, 2, 21, 11, 0), y: 13 },
          { x: new Date(2023, 2, 21, 12, 0), y: 22 },
          { x: new Date(2023, 2, 21, 13, 0), y: 21 },
          { x: new Date(2023, 2, 21, 14, 0), y: 23 },
          { x: new Date(2023, 2, 21, 15, 0), y: 24 },
          { x: new Date(2023, 2, 21, 16, 0), y: 12 },
          { x: new Date(2023, 2, 21, 17, 0), y: 23 },
          { x: new Date(2023, 2, 21, 18, 0), y: 24 },
          { x: new Date(2023, 2, 21, 19, 0), y: 25 },
          { x: new Date(2023, 2, 21, 20, 0), y: 23 },
        ],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}
