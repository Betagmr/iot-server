import { PolarArea } from 'react-chartjs-2';

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
  RadialLinearScale,
  ArcElement
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
  RadialLinearScale,
  ArcElement
);


export const RadarChart = () => {
  const data = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96,],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };;

  const options = {
    type: 'radar',
    responsive: true,
    elements: {
      line: {
        borderWidth: 3
      },
    },
    plugins: {
      legend: {
        display: false,
      }
    },
  };

  return (
    <div className="w-full" >
      <div className='text-xl'>Grafico de Radar</div>
      <div className='flex items-center justify-center h-[400px] w-full'>
        <PolarArea data={data} options={options} />
      </div>
    </div >
  );
};