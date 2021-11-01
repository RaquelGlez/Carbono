import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Chart = () => {
  const options = {
    title: {
      text: "Servicios por proyecto",
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Total de servicios por proyecto",
      },
    },
    tooltip: {
      headerFormat:
        '<span style="color:{point.color}">{series.name}</span>: <b>{point.y}</b><br/>',
      pointFormat: ' <span style="font-size:11px">{point.name}</span><br>',
    },
    series: [
      {
        name: "Servicios",
        colorByPoint: true,
        data: [
          {
            name: "Producción de Bonos de Carbono en Fincas Cafetaleras",
            y: 4,
          },
          {
            name: "Producción de bonos de carbono en Campeche y Quintana Roo",
            y: 4,
          },
          {
            name: "Producción de bonos de carbono en la Selva Lacandona",
            y: 4,
          },
          {
            name: "Broxel",
            y: 3,
          },
        ],
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
