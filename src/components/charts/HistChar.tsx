import { Chart } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
);

export const HistChart = () => {
  const data = {
    datasets: [{
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    }, {
      type: 'line',
      label: 'Line Dataset',
      data: [23, 30, 70, 20],
      backgroundColor: 'rgba(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.7)',
    }],
    labels: ['January', 'February', 'March', 'April']
  };

  const options = {
    resposive: false,
    plugins: {
      legend: {
        display: true,
      }
    },
  };

  return (
    <div className="w-screen h-screen/3">
      <div className='text-xl'>Grafico Compuesto</div>
      <Chart data={data} options={options} />
    </div>
  );
};