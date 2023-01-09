import { Pie } from 'react-chartjs-2';

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


export const RadarChart = ({ newData }: any) => {

  const data = {
    labels: [
      'Good',
      'Warn',
      'Error'
    ],
    datasets: [{
      label: 'Message Type Count',
      data: newData,
      backgroundColor: [
        'rgb(54, 162, 10, 0.8)',
        'rgb(255, 205, 86, 0.8)',
        'rgb(255, 99, 132, 0.8)',
      ],
      hoverOffset: 4
    }]
  };

  return (
    <div className="w-full" >
      <div className='text-xl'>Pie Notification</div>
      <div className='flex items-center justify-center h-[300px] w-full'>
        <Pie data={data} />
      </div>
    </div >
  );
};