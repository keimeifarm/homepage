var ctx = document.getElementById('horse_0004_evr').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2024.01.31','2024.02.01','2024.02.02','2024.02.03','2024.02.04','2024.02.05','2024.02.06','2024.02.07','2024.02.08','2024.02.09','2024.02.10','2024.02.11','2024.02.12','2024.02.13','2024.02.14','2024.02.15','2024.02.16','2024.02.17','2024.02.18','2024.02.19','2024.02.20','2024.02.21','2024.02.22','2024.02.23','2024.02.24','2024.02.25','2024.02.26','2024.02.27','2024.02.28','2024.02.29','2024.03.01','2024.03.02','2024.03.03','2024.03.04','2024.03.05','2024.03.06','2024.03.07','2024.03.08','2024.03.09','2024.03.10','2024.03.11','2024.03.12','2024.03.13','2024.03.14','2024.03.15','2024.03.16','2024.03.17','2024.03.18','2024.03.19','2024.03.20','2024.03.21','2024.03.22','2024.03.23','2024.03.24','2024.03.25','2024.03.26','2024.03.27','2024.03.28','2024.03.29','2024.03.30','2024.03.31','2024.04.01','2024.04.02','2024.04.03','2024.04.04','2024.04.05','2024.04.06','2024.04.07','2024.04.08','2024.04.09','2024.04.10','2024.04.11','2024.04.12','2024.04.13','2024.04.14','2024.04.15','2024.04.16','2024.04.17','2024.04.18','2024.04.19','2024.04.20','2024.04.21','2024.04.22','2024.04.23','2024.04.24','2024.04.25','2024.04.26','2024.04.27','2024.04.28','2024.04.29','2024.04.30','2024.05.01','2024.05.02','2024.05.03','2024.05.04','2024.05.05','2024.05.06','2024.05.07','2024.05.08','2024.05.09','2024.05.10','2024.05.11','2024.05.12','2024.05.13','2024.05.14','2024.05.15','2024.05.16','2024.05.17','2024.05.18','2024.05.19','2024.05.20','2024.05.21','2024.05.22','2024.05.23','2024.05.24','2024.05.25','2024.05.26','2024.05.27','2024.05.28','2024.05.29','2024.05.30','2024.05.31','2024.06.01','2024.06.02','2024.06.03','2024.06.04','2024.06.05','2024.06.06','2024.06.07','2024.06.08','2024.06.09','2024.06.10','2024.06.11','2024.06.12','2024.06.13','2024.06.14','2024.06.15','2024.06.16','2024.06.17','2024.06.18','2024.06.19','2024.06.20','2024.06.21','2024.06.22','2024.06.23','2024.06.24','2024.06.25','2024.06.26','2024.06.27','2024.06.28','2024.06.29','2024.06.30','2024.07.01','2024.07.02','2024.07.03','2024.07.04','2024.07.05','2024.07.06','2024.07.07','2024.07.08','2024.07.09','2024.07.10','2024.07.11','2024.07.12','2024.07.13','2024.07.14','2024.07.15','2024.07.16','2024.07.17','2024.07.18','2024.07.19','2024.07.20','2024.07.21','2024.07.22','2024.07.23','2024.07.24','2024.07.25','2024.07.26','2024.07.27','2024.07.28','2024.07.29','2024.07.30','2024.07.31','2024.08.01','2024.08.02','2024.08.03','2024.08.04','2024.08.05','2024.08.06','2024.08.07','2024.08.08','2024.08.09','2024.08.10','2024.08.11','2024.08.12','2024.08.13','2024.08.14','2024.08.15','2024.08.16','2024.08.17','2024.08.18','2024.08.19','2024.08.20','2024.08.21','2024.08.22','2024.08.23','2024.08.24','2024.08.25','2024.08.26','2024.08.27',''],
    datasets: [{
      label: '体重',
      data: [487,493,498,500,501,501,501,501,505,502,502,502,504,504,505,500,503,505,507,507,507,507,507,507,497,497,497,497,497,497,497,505,502,508,508,508,508,508,510,511,513,513,513,506,510,512,512,514,509,508,512,511,511,511,511,511,511,511,511,513,510,506,508,508,508,508,508,500,500,500,500,500,505,503,503,503,499,503,501,502,502,502,495,495,495,501,503,499,497,497,497,497,499,501,502,501,499,499,499,503,501,500,500,500,498,499,499,496,500,493,489,492,493,496,492,493,491,491,491,491,500,500,495,495,490,490,490,491,490,487,487,487,487,486,486,484,489,490,490,490,490,489,489,489,489,489,488,488,488,488,488,488,488,488,488,488,488,488,494,497,495,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,489,480,483,483,483,485,479,492,492,479,480,483,485,487,486,487,489,489,486,487,488,490,492,493,493,493,493,],
      borderColor: '#333',
    }, {
      label: '体温',
      data: [37.8, 37.5, 37.8, 37.4, 37.6, 37.5, 37.7, 37.6, 37.7, 37.4, 37.4, 37.1, 37.6, 37.5, 37.6, 37.7, 37.2, 37.4, 37.4, 37.2, 37.2, 37.3, 37.2, 37.4, 37.4, 37.6, 37.2, 37.4, 37.3, 37.3, 37.3, 37.3, 37.6, 37.4, 37.3, 37.1, 37.2, 37.4, 37.2, 37.2, 37.2, 37.1, 37.2, 37.2, 37.5, 37.3, 37.6, 37.4, 37.6, 37.6, 37.4, 37.2, 37.1, 37.1, 37.2, 37.5, 37.2, 37.1, 37.2, 37.3, 37.2, 37.4, 37.4, 37.2, 37.3, 37.4, 37.3, 38.0, 37.7, 37.5, 37.5, 37.2, 37.8, 36.9, 37.2, 37.2, 37.3, 37.1, 37.2, 37.2, 37.1, 37.4, 37.3, 37.2, 37.3, 37.2, 37.2, 37.2, 37.1, 37.1, 37.2, 37.3, 37.2, 37.7, 37.6, 37.5, 37.3, 37.0, 37.1, 37.3, 37.3, 37.2, 37.1, 37.3, 37.4, 37.2, 37.8, 37.7, 37.8, 37.6, 38.0, 38.1, 37.5, 37.6, 37.5, 37.7, 37.6, 37.4, 37.6, 37.5, 37.5, 37.6, 37.7, 37.9, 38.0, 38.1, 38.0, 38.0, 38.0, 38.1, 38.0, 37.7, 38.1, 37.5, 37.8, 38.0, 37.8, 38.0, 37.9, 37.9, 37.8, 38.1, 37.8, 38.0, 37.9, 37.8, 37.8, 37.9, 37.6, 37.5, 37.8, 37.9, 37.7, 37.9, 37.5, 38.1, 37.9, 38.0, 37.5, 38.0, 38.1, 38.0, 37.9, 38.2, 38.0, 38.0, 38.1, 38.4, 38.3, 38.0, 38.1, 38.1, 38.3, 38.2, 38.2, 38.3, 37.9, 38.1, 38.0, 38.0, 38.0, 38.2, 38.3, 38.2, 38.0, 38.0, 37.7, 37.5, 37.8, 37.8, 37.6, 37.7, 37.7, 38.0, 38.2, 38.0, 38.2, 37.9, 37.8, 37.8, 37.7, 37.7, 37.7, 37.8, 37.9, 37.5, 38.0, 38.1, 38.2, 37.6, ],
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
