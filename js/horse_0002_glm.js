var ctx = document.getElementById('horse_0002_glm').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2023.02.08','2023.02.09','2023.02.10','2023.02.11','2023.02.12','2023.02.13','2023.02.14','2023.02.15','2023.02.16','2023.02.17','2023.02.18','2023.02.19','2023.02.20','2023.02.21','2023.02.22','2023.02.23','2023.02.24','2023.02.25','2023.02.26','2023.02.27','2023.02.28','2023.03.01','2023.03.02','2023.03.03','2023.03.04','2023.03.05','2023.03.06','2023.03.07','2023.03.08','2023.03.09','2023.03.10','2023.03.11','2023.03.12','2023.03.13','2023.03.14','2023.03.15','2023.03.16','2023.03.17','2023.03.18','2023.03.19','2023.03.20','2023.03.21','2023.03.22','2023.03.23','2023.03.24','2023.03.25','2023.03.26','2023.03.27','2023.03.28','2023.03.29','2023.03.30','2023.03.31','2023.04.01','2023.04.02','2023.04.03','2023.04.04','2023.04.05','2023.04.06','2023.04.07','2023.04.08','2023.04.09','2023.04.10','2023.04.11','2023.04.12','2023.04.13','2023.04.14','2023.04.15','2023.04.16','2023.04.17','2023.04.18','2023.04.19','2023.04.20','2023.04.21','2023.04.22','2023.04.23','2023.04.24','2023.04.25','2023.04.26','2023.04.27','2023.04.28','2023.04.29','2023.04.30','2023.05.01','2023.05.02','2023.05.03','2023.05.04','2023.05.05','2023.05.06','2023.05.07','2023.05.08','2023.05.09','2023.05.10','2023.05.11','2023.05.12','2023.05.13','2023.05.14','2023.05.15','2023.05.16','2023.05.17','2023.05.18','2023.05.19','2023.05.20','2023.05.21','2023.05.22','2023.05.23','2023.05.24','2023.05.25','2023.05.26','2023.05.27','2023.05.28','2023.05.29','2023.05.30','2023.05.31','2023.06.01','2023.06.02','2023.06.03','2023.06.04','2023.06.05','2023.06.06','2023.06.07','2023.06.08','2023.06.09','2023.06.10','2023.06.11','2023.06.12','2023.06.13','2023.06.14','2023.06.15','2023.06.16','2023.06.17','2023.06.18','2023.06.19','2023.06.20','2023.06.21','2023.06.22','2023.06.23','2023.06.24','2023.06.25','2023.06.26','2023.06.27','2023.06.28','2023.06.29','2023.06.30','2023.07.01','2023.07.02','2023.07.03','2023.07.04','2023.07.05','2023.07.06','2023.07.07','2023.07.08','2023.07.09','2023.07.10','2023.07.11','2023.07.12','2023.07.13','2023.07.14','2023.07.15','2023.07.16','2023.07.17','2023.07.18','2023.07.19','2023.07.20','2023.07.21','2023.07.22','2023.07.23','2023.07.24','2023.07.25','2023.07.26','2023.07.27','2023.07.28','2023.07.29','2023.07.30','2023.07.31','2023.08.01','2023.08.02','2023.08.03','2023.08.04','2023.08.05','2023.08.06','2023.08.07','2023.08.08','2023.08.09','2023.08.10','2023.08.11','2023.08.12','2023.08.13','2023.08.14','2023.08.15','2023.08.16','2023.08.17','2023.08.18','2023.08.19','2023.08.20','2023.08.21','2023.08.22','2023.08.23','2023.08.24','2023.08.25','2023.08.26','2023.08.27','2023.08.28','2023.08.29','2023.08.30','2023.08.31','2023.09.01','2023.09.02','2023.09.03','2023.09.04','2023.09.05','2023.09.06','2023.09.07','2023.09.08','2023.09.09','2023.09.10','2023.09.11','2023.09.12','2023.09.13','2023.09.14','2023.09.15','2023.09.16','2023.09.17','2023.09.18','2023.09.19','2023.09.20','2023.09.21','2023.09.22','2023.09.23','2023.09.24','2023.09.25','2023.09.26','2023.09.27','2023.09.28','2023.09.29','2023.09.30','2023.10.01','2023.10.02','2023.10.03','2023.10.04','2023.10.05','2023.10.06','2023.10.07','2023.10.08','2023.10.09','2023.10.10','2023.10.11','2023.10.12','2023.10.13','2023.10.14','2023.10.15','2023.10.16','2023.10.17','2023.10.18','2023.10.19','2023.10.20','2023.10.21','2023.10.22','2023.10.23','2023.10.24','2023.10.25','2023.10.26','2023.10.27','2023.10.28','2023.10.29','2023.10.30','2023.10.31','2023.11.01','2023.11.02','2023.11.03','2023.11.04','2023.11.05','2023.11.06','2023.11.07','2023.11.08','2023.11.09','2023.11.10','2023.11.11','2023.11.12','2023.11.13','2023.11.14','2023.11.15','2023.11.16','2023.11.17','2023.11.18','2023.11.19','2023.11.20','2023.11.21','2023.11.22','2023.11.23','2023.11.24','2023.11.25','2023.11.26','2023.11.27','2023.11.28','2023.11.29','2023.11.30','2023.12.01','2023.12.02','2023.12.03','2023.12.04','2023.12.05','2023.12.06','2023.12.07','2023.12.08','2023.12.09','2023.12.10','2023.12.11','2023.12.12','2023.12.13','2023.12.14','2023.12.15','2023.12.16','2023.12.17','2023.12.18','2023.12.19','2023.12.20','2023.12.21','2023.12.22','2023.12.23','2023.12.24','2023.12.25','2023.12.26','2023.12.27','2023.12.28','2023.12.29','2023.12.30','2023.12.31','2024.01.01','2024.01.02','2024.01.03','2024.01.04','2024.01.05','2024.01.06','2024.01.07','2024.01.08','2024.01.09','2024.01.10','2024.01.11','2024.01.12','2024.01.13','2024.01.14','2024.01.15','2024.01.16','2024.01.17','2024.01.18','2024.01.19','2024.01.20','2024.01.21','2024.01.22','2024.01.23','2024.01.24','2024.01.25','2024.01.26','2024.01.27','2024.01.28','2024.01.29','2024.01.30','2024.01.31','2024.02.01','2024.02.02','2024.02.03','2024.02.04','2024.02.05','2024.02.06','2024.02.07','2024.02.08','2024.02.09','2024.02.10','2024.02.11','2024.02.12','2024.02.13','2024.02.14','2024.02.15','2024.02.16','2024.02.17','2024.02.18','2024.02.19','2024.02.20','2024.02.21','2024.02.22','2024.02.23','2024.02.24','2024.02.25','2024.02.26','2024.02.27','2024.02.28','2024.02.29','2024.03.01','2024.03.02','2024.03.03','2024.03.04','2024.03.05','2024.03.06','2024.03.07','2024.03.08','2024.03.09','2024.03.10','2024.03.11','2024.03.12','2024.03.13','2024.03.14','2024.03.15','2024.03.16','2024.03.17','2024.03.18','2024.03.19','2024.03.20','2024.03.21','2024.03.22','2024.03.23','2024.03.24','2024.03.25','2024.03.26','2024.03.27','2024.03.28','2024.03.29','2024.03.30','2024.03.31','2024.04.01','2024.04.02','2024.04.03','2024.04.04','2024.04.05','2024.04.06','2024.04.07','2024.04.08','2024.04.09','2024.04.10','2024.04.11','2024.04.12','2024.04.13','2024.04.14','2024.04.15','2024.04.16','2024.04.17','2024.04.18','2024.04.19','2024.04.20','2024.04.21','2024.04.22','2024.04.23','2024.04.24','2024.04.25','2024.04.26','2024.04.27','2024.04.28','2024.04.29',''],
    datasets: [{
      label: '体重',
      data: [478,478,478,477,481,483,480,485,483,488,486,485,488,484,488,490,490,493,495,499,498,498,497,496,496,497,497,498,493,496,492,494,495,498,499,498,493,500,500,500,495,497,498,495,500,505,504,503,503,498,503,505,507,504,498,500,503,505,505,506,506,507,511,503,509,503,503,503,503,503,503,503,503,503,511,511,511,511,511,511,511,511,511,511,511,511,518,518,518,518,518,511,510,518,518,520,519,520,517,517,517,515,520,520,519,523,523,523,519,522,522,522,522,513,513,519,523,523,523,527,527,527,527,529,527,521,527,526,528,524,522,522,521,522,522,521,528,522,527,526,525,525,525,525,525,525,528,525,525,525,525,525,525,527,528,528,527,530,527,530,528,530,530,530,527,530,529,532,532,538,530,529,534,531,533,533,533,535,532,535,535,535,535,535,531,528,532,531,531,531,531,531,531,527,530,534,534,534,536,535,535,535,539,539,539,540,540,540,540,540,540,540,540,540,540,540,540,540,540,540,540,540,540,540,540,540,540,540,548,548,550,550,548,549,548,548,546,544,542,545,549,538,535,534,538,536,536,538,535,539,538,544,539,539,541,537,540,542,544,544,546,544,542,542,543,546,545,542,543,539,541,538,540,539,540,540,543,545,545,540,540,543,543,543,541,540,539,538,540,540,542,539,534,534,538,536,537,537,531,531,529,531,529,534,527,530,533,527,530,532,529,533,530,533,536,532,533,533,530,526,530,525,531,531,533,532,532,534,533,533,531,536,536,536,529,530,531,528,528,530,531,529,529,531,531,529,530,526,530,532,532,532,530,530,528,529,527,524,525,527,527,526,526,526,526,527,524,526,526,525,525,527,527,524,523,525,525,525,525,525,525,520,520,520,520,520,520,520,520,524,524,524,524,524,524,520,521,522,522,522,522,527,528,528,522,522,522,523,522,522,522,522,522,522,522,522,523,519,519,520,520,520,520,520,521,521,521,521,521,527,525,525,525,528,530,528,524,522,522,521,521,521,527,525,522,523,523,],
      borderColor: '#333',
    }, {
      label: '体温',
      data: [37.3, 37.3, 37.4, 37.2, 37.4, 37.4, 37.5, 37.6, 37.4, 37.4, 37.1, 37.4, 37.4, 37.1, 37.4, 37.4, 37.4, 37.1, 37.2, 37.1, 37.2, 37.4, 37.4, 37.2, 37.2, 37.4, 37.1, 37.4, 37.2, 37.4, 37.2, 37.3, 37.3, 37.5, 37.3, 37.6, 37.2, 37.4, 37.2, 37.5, 37.5, 37.7, 37.7, 37.8, 37.4, 37.6, 37.8, 37.8, 37.6, 37.8, 37.7, 37.6, 37.8, 37.6, 37.8, 37.7, 37.6, 37.7, 37.5, 37.7, 37.6, 37.4, 37.6, 37.4, 37.8, 37.5, 37.5, 37.5, 37.5, 37.6, 37.7, 37.7, 37.4, 37.5, 37.2, 37.3, 37.2, 37.2, 37.2, 37.2, 37.1, 37.5, 37.7, 37.0, 37.1, 37.6, 37.5, 37.5, 37.3, 37.4, 37.5, 37.4, 37.4, 37.4, 37.5, 37.4, 37.6, 37.8, 37.6, 37.5, 37.4, 37.6, 37.3, 37.2, 37.2, 37.1, 37.0, 37.5, 37.7, 37.5, 37.6, 37.6, 37.6, 37.5, 37.5, 37.8, 37.7, 37.7, 37.7, 37.7, 37.7, 37.5, 37.7, 37.5, 37.7, 37.6, 37.6, 37.6, 37.3, 37.1, 37.5, 37.6, 37.6, 37.7, 37.7, 37.5, 37.4, 37.4, 37.6, 37.6, 37.4, 37.6, 37.8, 37.7, 37.8, 37.8, 37.7, 37.8, 37.2, 37.2, 37.4, 37.8, 37.6, 37.8, 37.7, 37.8, 37.7, 37.7, 37.6, 37.4, 37.2, 37.6, 37.7, 37.5, 37.5, 37.7, 37.5, 37.6, 37.6, 37.6, 37.7, 37.3, 37.7, 37.6, 37.7, 37.8, 37.7, 37.7, 37.5, 37.6, 37.6, 37.7, 37.7, 37.8, 37.5, 37.8, 37.8, 37.9, 37.9, 37.9, 37.8, 37.7, 37.6, 37.8, 37.7, 37.7, 37.8, 37.6, 37.2, 37.3, 37.3, 37.5, 37.4, 37.3, 37.4, 37.4, 37.3, 37.8, 37.8, 37.7, 37.7, 37.5, 37.4, 37.5, 37.4, 37.7, 37.5, 37.5, 37.4, 37.7, 37.9, 37.8, 37.8, 37.7, 37.7, 37.4, 37.5, 37.4, 37.4, 37.4, 37.4, 37.4, 37.4, 37.4, 37.4, 37.4, 37.3, 37.3, 37.7, 37.2, 37.2, 37.3, 37.5, 37.6, 37.4, 37.5, 37.5, 37.2, 37.4, 37.8, 37.4, 37.3, 37.6, 37.7, 37.5, 37.3, 37.3, 37.1, 37.3, 37.4, 37.1, 37.1, 37.3, 37.1, 37.2, 37.4, 37.2, 37.2, 37.2, 37.1, 37.3, 37.4, 37.3, 37.3, 37.3, 37.1, 37.3, 37.1, 37.2, 37.1, 37.1, 37.6, 37.5, 37.5, 37.6, 37.2, 37.5, 37.1, 36.9, 37.3, 37.3, 37.6, 37.7, 37.2, 37.7, 37.7, 37.5, 37.6, 38.0, 37.3, 37.6, 37.8, 37.2, 37.4, 37.6, 37.5, 37.8, 37.7, 37.7, 37.8, 37.6, 37.7, 37.4, 37.5, 37.7, 37.6, 37.6, 37.2, 37.4, 37.8, 37.4, 37.7, 37.3, 37.2, 37.3, 37.3, 37.3, 37.5, 37.6, 37.5, 37.4, 37.3, 37.3, 37.3, 37.4, 37.6, 37.4, 37.5, 37.4, 37.5, 37.2, 37.4, 37.6, 37.5, 37.5, 37.4, 37.3, 37.6, 37.6, 37.4, 37.6, 37.4, 37.8, 37.2, 37.6, 37.4, 37.1, 37.4, 37.4, 37.8, 37.8, 37.4, 37.6, 37.8, 37.8, 37.9, 37.4, 37.8, 37.6, 37.6, 37.6, 37.2, 37.8, 37.3, 37.2, 37.2, 37.4, 37.1, 37.2, 37.4, 37.2, 37.3, 37.3, 37.1, 37.7, 37.4, 37.3, 37.3, 37.3, 37.3, 37.6, 37.1, 37.4, 37.2, 37.4, 37.4, 37.6, 37.4, 37.2, 37.6, 37.3, 37.4, 37.6, 37.4, 37.2, 37.4, 37.6, 37.1, 37.3, 37.4, 37.5, 37.5, 37.3, 37.5, 37.4, 37.4, 37.2, 37.6, 37.6, 37.8, 37.8, 37.7, 37.6, 37.8, 37.7, 37.6, 37.8, 37.9, 37.7, 37.7, 37.9, 37.8, 38.0, 37.7, 38.0, 38.0, 37.8, 37.8, 38.0, 37.9, 37.8, 37.9, 37.6, 37.5, 37.5, 37.6, 37.6, ],
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
