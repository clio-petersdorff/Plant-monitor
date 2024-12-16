import { useState , useEffect} from 'react'

// Import Chart.js and React Chart.js wrapper
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


import './App.css'

function App() {
  const [plantData, setPlantData] = useState([])
  const [view, setView] = useState('table')

  useEffect(()=>{

    async function getPlantData(){
      console.log('getting data from db')
      try {
        const response = await fetch('/api/data')
        const data = await response.json();
        setPlantData(data)        
      } catch(e){
        console.log("An error has occurec")
      }
    }
    
    getPlantData()

  })

  // Prepare data for Chart.js
  const wetnessData = {
    labels: plantData.map(entry => new Date(entry.timestamp).toLocaleTimeString()), // Time labels
    datasets: [
        {
            label: 'Wetness',
            data: plantData.map(entry => entry.wetness), // Wetness data
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        },
    ],
  };

  const tempData = {
    labels: plantData.map(entry => new Date(entry.timestamp).toLocaleTimeString()), // Time labels
    datasets: [
        {
            label: 'Temperature',
            data: plantData.map(entry => entry.temperature), // Temperature data
            borderColor: 'rgba(255, 99, 132, 1)', // Red border
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light pink background            
            fill: true,
        },
    ],
  };

  const humidityData = {
    labels: plantData.map(entry => new Date(entry.timestamp).toLocaleTimeString()), // Time labels
    datasets: [
        {
            label: 'Humidity',
            data: plantData.map(entry => entry.humidity), // Wetness data
            borderColor: 'rgba(153, 102, 255, 1)', // Purple border
            backgroundColor: 'rgba(153, 102, 255, 0.2)', // Light purple background            
            fill: true,
        },
    ],
  };
  // Chart options for better customization
  const chartOptions = {
    responsive: true,
    scales: {
        x: {
            title: {
                display: true,
                text: 'Time',
            },
        },
        y: {
            min: 0,
            max: 100, // Assuming wetness is a percentage
        },
    },
  };

  const tempChartOptions = {
    ...chartOptions, // Use the base options
    scales: {
      ...chartOptions.scales,
      y: {
        min: 15,  // Assuming temperature might go below 0, adjust as needed
        max: 35,   // Adjust based on your expected range for temperature
      },
    },
  }

  const humidityChartOptions = {
    ...chartOptions, // Use the base options
    scales: {
      ...chartOptions.scales,
      y: {
        min: 40,  // Assuming temperature might go below 0, adjust as needed
        max: 80,   // Adjust based on your expected range for temperature
      },
    },
  }

  return (
    <>
      <h1>Plant Monitor</h1>
      <div>
        <button onClick={()=>setView('table')}>Table</button>
        <button onClick={()=>setView('chart')}>Chart</button>
      </div>
      {
        view === 'table' &&
        <table>
          <tr>
            <th>Time</th>
            <th>Wetness</th>
            <th>Temperature</th>
            <th>Humidity</th>
          </tr>
          {
            plantData.map((d)=>(
              <tr key = {d.id}>
                <td>{new Date(d.timestamp).toLocaleString()}</td>
                <td>{d.wetness}</td>
                <td>{d.temperature}</td>
                <td>{d.humidity}</td>
              </tr>
            ))
          }

        </table>        
      }

      {
        view === 'chart' &&
        <div>
          <Line data={wetnessData} options={chartOptions} />
          <Line data={tempData} options={tempChartOptions} />
          <Line data={humidityData} options={humidityChartOptions} />
        </div>
      
      }

    </>
  )
}

export default App
