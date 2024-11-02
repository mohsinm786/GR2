import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalUserPieChart = (props) => {
  const data = {
    labels: props.label,
    datasets: [
      {
        data: props.data  ,
        backgroundColor: props.backgroundColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie data={data} />
  )
}

export default TotalUserPieChart