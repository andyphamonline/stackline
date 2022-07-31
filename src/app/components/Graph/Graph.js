import React from 'react'
import { useSelector } from "react-redux"
import { getSales } from "../../../state/selectors"
import { getMonthLabels } from './Graph.helper'
import { GRAPH_RETAIL_LABEL, GRAPH_WHOLESALE_LABEL } from "../../../shared/constants"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Graph = () => {
  const sales = useSelector(getSales)
  const retailData = sales.map(sale => sale.retailSales)
  const wholesaleData = sales.map(sale => sale.wholesaleSales)
  const monthLabels = getMonthLabels(sales)

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          source: 'labels'
        }
      }
    }
  }

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: GRAPH_RETAIL_LABEL,
        data: retailData,
        borderColor: 'rgba(70,168,246,255)',
        backgroundColor: 'rgba(70,168,246,255)',
      },
      {
        label: GRAPH_WHOLESALE_LABEL,
        data: wholesaleData,
        borderColor: 'rgba(154,165,190,255)',
        backgroundColor: 'rgba(154,165,190,255)',
      },
    ],
  };

  return (
    <>
      {
        sales.length ? (<Line options={options} data={data} />) : <></>
      }
    </>
  )
}
