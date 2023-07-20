var ctx = document.getElementById('horse_0002_glm').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2023.02.08','2023.02.09','2023.02.10','2023.02.11','2023.02.12','2023.02.13','2023.02.14','2023.02.15','2023.02.16','2023.02.17','2023.02.18','2023.02.19','2023.02.20','2023.02.21','2023.02.22','2023.02.23','2023.02.24','2023.02.25','2023.02.26','2023.02.27','2023.02.28','2023.03.01','2023.03.02','2023.03.03','2023.03.04','2023.03.05','2023.03.06','2023.03.07','2023.03.08','2023.03.09','2023.03.10','2023.03.11','2023.03.12','2023.03.13','2023.03.14','2023.03.15','2023.03.16','2023.03.17','2023.03.18','2023.03.19','2023.03.20','2023.03.21','2023.03.22','2023.03.23','2023.03.24','2023.03.25','2023.03.26','2023.03.27','2023.03.28','2023.03.29','2023.03.30','2023.03.31','2023.04.01','2023.04.02','2023.04.03','2023.04.04','2023.04.05','2023.04.06','2023.04.07','2023.04.08','2023.04.09','2023.04.10','2023.04.11','2023.04.12','2023.04.13','2023.04.14','2023.04.15','2023.04.16','2023.04.17','2023.04.18','2023.04.19','2023.04.20','2023.04.21','2023.04.22','2023.04.23','2023.04.24','2023.04.25','2023.04.26','2023.04.27','2023.04.28','2023.04.29','2023.04.30','2023.05.01','2023.05.02','2023.05.03','2023.05.04','2023.05.05','2023.05.06','2023.05.07','2023.05.08','2023.05.09','2023.05.10','2023.05.11','2023.05.12','2023.05.13','2023.05.14','2023.05.15','2023.05.16','2023.05.17','2023.05.18','2023.05.19','2023.05.20','2023.05.21','2023.05.22','2023.05.23','2023.05.24','2023.05.25','2023.05.26','2023.05.27','2023.05.28','2023.05.29','2023.05.30','2023.05.31','2023.06.01','2023.06.02','2023.06.03','2023.06.04','2023.06.05','2023.06.06','2023.06.07','2023.06.08','2023.06.09','2023.06.10','2023.06.11','2023.06.12','2023.06.13','2023.06.14','2023.06.15','2023.06.16','2023.06.17','2023.06.18','2023.06.19','2023.06.20','2023.06.21','2023.06.22','2023.06.23','2023.06.24','2023.06.25','2023.06.26','2023.06.27','2023.06.28','2023.06.29','2023.06.30','2023.07.01','2023.07.02','2023.07.03','2023.07.04','2023.07.05','2023.07.06','2023.07.07','2023.07.08','2023.07.09','2023.07.10','2023.07.11','2023.07.12','2023.07.13','2023.07.14','2023.07.15','2023.07.16','2023.07.17','2023.07.18','2023.07.19',''],
    datasets: [{
      label: '体重',
      data: [478,478,478,477,481,483,480,485,483,488,486,485,488,484,488,490,490,493,495,499,498,498,497,496,496,497,497,498,493,496,492,494,495,498,499,498,493,500,500,500,495,497,498,495,500,505,504,503,503,498,503,505,507,504,498,500,503,505,505,506,506,507,511,503,509,503,503,503,503,503,503,503,503,503,511,511,511,511,511,511,511,511,511,511,511,511,518,518,518,518,518,511,510,518,518,520,519,520,517,517,517,515,520,520,519,523,523,523,519,522,522,522,522,513,513,519,523,523,523,527,527,527,527,529,527,521,527,526,528,524,522,522,521,522,522,521,528,522,527,526,525,525,525,525,525,525,528,525,525,525,525,525,525,527,528,528,527,530,527,530,528,530,],
      borderColor: '#333',
    }, {
      label: '体温',
      data: [37.3, 37.3, 37.4, 37.2, 37.4, 37.4, 37.5, 37.6, 37.4, 37.4, 37.1, 37.4, 37.4, 37.1, 37.4, 37.4, 37.4, 37.1, 37.2, 37.1, 37.2, 37.4, 37.4, 37.2, 37.2, 37.4, 37.1, 37.4, 37.2, 37.4, 37.2, 37.3, 37.3, 37.5, 37.3, 37.6, 37.2, 37.4, 37.2, 37.5, 37.5, 37.7, 37.7, 37.8, 37.4, 37.6, 37.8, 37.8, 37.6, 37.8, 37.7, 37.6, 37.8, 37.6, 37.8, 37.7, 37.6, 37.7, 37.5, 37.7, 37.6, 37.4, 37.6, 37.4, 37.8, 37.5, 37.5, 37.5, 37.5, 37.6, 37.7, 37.7, 37.4, 37.5, 37.2, 37.3, 37.2, 37.2, 37.2, 37.2, 37.1, 37.5, 37.7, 37.0, 37.1, 37.6, 37.5, 37.5, 37.3, 37.4, 37.5, 37.4, 37.4, 37.4, 37.5, 37.4, 37.6, 37.8, 37.6, 37.5, 37.4, 37.6, 37.3, 37.2, 37.2, 37.1, 37.0, 37.5, 37.7, 37.5, 37.6, 37.6, 37.6, 37.5, 37.5, 37.8, 37.7, 37.7, 37.7, 37.7, 37.7, 37.5, 37.7, 37.5, 37.7, 37.6, 37.6, 37.6, 37.3, 37.1, 37.5, 37.6, 37.6, 37.7, 37.7, 37.5, 37.4, 37.4, 37.6, 37.6, 37.4, 37.6, 37.8, 37.7, 37.8, 37.8, 37.7, 37.8, 37.2, 37.2, 37.4, 37.8, 37.6, 37.8, 37.7, 37.8, 37.7, 37.7, 37.6, 37.4, 37.2, 37.6, ],
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
