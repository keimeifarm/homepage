var ctx = document.getElementById('horse_0001_ttr').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2023.02.08','2023.02.09','2023.02.10','2023.02.11','2023.02.12','2023.02.13','2023.02.14','2023.02.15','2023.02.16','2023.02.17','2023.02.18','2023.02.19','2023.02.20','2023.02.21',''],
    datasets: [{
      label: '体重',
      data: [402,397,399,395,398,397,400,401,398,399,396,401,405,403,],
      borderColor: '#333',
    }, {
      label: '体温',
      data: [37.5, 37.3, 37.3, 37.1, 37.3, 37.8, 37.7, 37.9, 37.6, 37.8, 37.8, 37.7, 37.7, 37.9, ],
      borderColor: '#f88',
      yAxisID: 'y2',
    }],
  },
  options: {
    scales: {
      y: {   // 体重
        min: 350,
        max: 550,
        ticks: {
          color: '#333',
          stepSize: 25,
        },
      },
      y2: { // 体温
        min: 35,
        max: 45,
        position: 'right',
        ticks: {
          color: '#f88',
          stepSize: 2.5,
        },
      },
    },
  },
});
