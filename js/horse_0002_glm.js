var ctx = document.getElementById('horse_0002_glm').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2023.02.08','2023.02.09','2023.02.10','2023.02.11','2023.02.12','2023.02.13','2023.02.14','2023.02.15','2023.02.16','2023.02.17','2023.02.18','2023.02.19','2023.02.20','2023.02.21','2023.02.22','2023.02.23','2023.02.24','2023.02.25','2023.02.26','2023.02.27','2023.02.28','2023.03.01','2023.03.02','2023.03.03','2023.03.04','2023.03.05','2023.03.06','2023.03.07','2023.03.08','2023.03.09','2023.03.10','2023.03.11','2023.03.12','2023.03.13','2023.03.14','2023.03.15','2023.03.16','2023.03.17','2023.03.18','2023.03.19','2023.03.20',''],
    datasets: [{
      label: '体重',
      data: [478,478,478,477,481,483,480,485,483,488,486,485,488,484,488,490,490,493,495,499,498,498,497,496,496,497,497,498,493,496,492,494,495,498,499,498,493,500,500,500,495,],
      borderColor: '#333',
    }, {
      label: '体温',
      data: [37.3, 37.3, 37.4, 37.2, 37.4, 37.4, 37.5, 37.6, 37.4, 37.4, 37.1, 37.4, 37.4, 37.1, 37.4, 37.4, 37.4, 37.1, 37.2, 37.1, 37.2, 37.4, 37.4, 37.2, 37.2, 37.4, 37.1, 37.4, 37.2, 37.4, 37.2, 37.3, 37.3, 37.5, 37.3, 37.6, 37.2, 37.4, 37.2, 37.5, 37.5, ],
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
