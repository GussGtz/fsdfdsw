import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function DashboardCard05() {
  const [temperaturaData, setTemperaturaData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/datos')
      .then(response => {
        const temperaturaValues = response.data.map(item => item.temperatura);
        setTemperaturaData(temperaturaValues);
      })
      .catch(error => console.error('Error al obtener datos de temperatura:', error));
  }, []);

  const chartRef = useRef(null);

  useEffect(() => {
    if (temperaturaData.length > 0 && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: [...Array(temperaturaData.length).keys()].map(() => ''),
          datasets: [{
            label: 'Humedad',
            data: temperaturaData,
            backgroundColor: 'rgba(52, 211, 153, 0.08)',
            borderColor: '#34d399',
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: '#34d399',
            pointHoverBackgroundColor: '#34d399',
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              ticks: {
                stepSize: 2,
                font: {
                  size: 14
                }
              }
            },
            x: {
              display: false,
            }
          },
        },
      });
    }
  }, [temperaturaData]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 md:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Humedad en Tiempo Real</h2>
      </header>
      <div className="overflow-auto" style={{ maxHeight: '400px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default DashboardCard05;
