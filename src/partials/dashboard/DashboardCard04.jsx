import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function DashboardCard04() {
  const [humedadData, setHumedadData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/datos')
      .then(response => {
        const humedadValues = response.data.map(item => item.humedad);
        setHumedadData(humedadValues);
      })
      .catch(error => console.error('Error al obtener datos de humedad:', error));
  }, []);

  const chartRef = useRef(null);

  useEffect(() => {
    if (humedadData.length > 0 && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: humedadData.map((_, index) => index + 1),
          datasets: [{
            label: 'Temperatura',
            data: humedadData,
            backgroundColor: '#68d391',
            hoverBackgroundColor: '#48bb78',
            barPercentage: 0.66,
            categoryPercentage: 0.66,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 5,
                font: {
                  size: 14
                }
              }
            },
            x: {
              ticks: {
                font: {
                  size: 14
                }
              }
            }
          },
        },
      });
    }
  }, [humedadData]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 md:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Temperatura</h2>
      </header>
      <div className="overflow-auto" style={{ maxHeight: '300px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default DashboardCard04;
