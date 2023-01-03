import { Line } from 'react-chartjs-2';

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
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const LineChart = () => {
  const data = {
    labels: Array(10).fill(''),
    datasets: [
      {
        label: 'RP1',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30],
        tension: 0.5,
      },
      {
        label: 'Rp2',
        backgroundColor: 'rgb(20, 19, 102)',
        borderColor: 'rgb(20, 19, 102)',
        data: [2, 20, 5, 4, 20, 60],
        tension: 0.5,
      },
    ],
  };

  const options = {
    resposive: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      }
    },
  };

  return (
    <div className="w-screen h-screen/3">
      <div className='text-xl'>Grafico de Lineas</div>
      <Line data={data} options={options} />
    </div>
  );
};