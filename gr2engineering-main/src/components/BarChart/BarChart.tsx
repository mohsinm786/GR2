import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TotalUserBarChart = (props) => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.label,
        data: props.data,
        backgroundColor: props.backgroundColor,
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        // ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    
    responsive: true,  // Make the chart responsive
    maintainAspectRatio: false,  // Disable the aspect ratio to fit the parent's width and height
    scales: {
      y: {
        // beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>  {/* Parent container with full width and height */}
    <Bar data={data} options={options} />
  </div>
  )
}

export default TotalUserBarChart;
