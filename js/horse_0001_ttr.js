var ctx = document.getElementById('horse_0001_ttr').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2023.02.08','2023.02.09','2023.02.10','2023.02.11','2023.02.12','2023.02.13','2023.02.14','2023.02.15','2023.02.16','2023.02.17','2023.02.18','2023.02.19','2023.02.20','2023.02.21','2023.02.22','2023.02.23','2023.02.24','2023.02.25','2023.02.26','2023.02.27','2023.02.28','2023.03.01','2023.03.02','2023.03.03','2023.03.04','2023.03.05','2023.03.06','2023.03.07','2023.03.08','2023.03.09','2023.03.10','2023.03.11','2023.03.12','2023.03.13','2023.03.14','2023.03.15','2023.03.16','2023.03.17','2023.03.18','2023.03.19','2023.03.20','2023.03.21','2023.03.22','2023.03.23','2023.03.24','2023.03.25','2023.03.26','2023.03.27','2023.03.28','2023.03.29','2023.03.30','2023.03.31','2023.04.01','2023.04.02','2023.04.03','2023.04.04','2023.04.05','2023.04.06','2023.04.07','2023.04.08','2023.04.09','2023.04.10','2023.04.11','2023.04.12','2023.04.13','2023.04.14','2023.04.15','2023.04.16','2023.04.17','2023.04.18','2023.04.19','2023.04.20','2023.04.21','2023.04.22','2023.04.23','2023.04.24','2023.04.25','2023.04.26','2023.04.27','2023.04.28','2023.04.29','2023.04.30','2023.05.01','2023.05.02','2023.05.03','2023.05.04','2023.05.05','2023.05.06','2023.05.07','2023.05.08','2023.05.09','2023.05.10','2023.05.11','2023.05.12','2023.05.13','2023.05.14','2023.05.15','2023.05.16','2023.05.17','2023.05.18','2023.05.19','2023.05.20','2023.05.21','2023.05.22','2023.05.23','2023.05.24','2023.05.25','2023.05.26','2023.05.27','2023.05.28','2023.05.29','2023.05.30','2023.05.31','2023.06.01','2023.06.02','2023.06.03','2023.06.04','2023.06.05','2023.06.06','2023.06.07','2023.06.08','2023.06.09','2023.06.10','2023.06.11','2023.06.12','2023.06.13','2023.06.14','2023.06.15','2023.06.16','2023.06.17','2023.06.18','2023.06.19','2023.06.20','2023.06.21','2023.06.22','2023.06.23','2023.06.24','2023.06.25','2023.06.26','2023.06.27','2023.06.28','2023.06.29','2023.06.30','2023.07.01','2023.07.02','2023.07.03','2023.07.04','2023.07.05','2023.07.06','2023.07.07','2023.07.08','2023.07.09','2023.07.10','2023.07.11','2023.07.12','2023.07.13','2023.07.14','2023.07.15','2023.07.16','2023.07.17','2023.07.18','2023.07.19','2023.07.20','2023.07.21','2023.07.22','2023.07.23','2023.07.24','2023.07.25','2023.07.26','2023.07.27','2023.07.28','2023.07.29','2023.07.30','2023.07.31','2023.08.01','2023.08.02','2023.08.03','2023.08.04','2023.08.05','2023.08.06','2023.08.07','2023.08.08','2023.08.09','2023.08.10','2023.08.11','2023.08.12','2023.08.13','2023.08.14','2023.08.15','2023.08.16','2023.08.17','2023.08.18','2023.08.19','2023.08.20','2023.08.21','2023.08.22','2023.08.23','2023.08.24','2023.08.25','2023.08.26','2023.08.27','2023.08.28','2023.08.29','2023.08.30','2023.08.31','2023.09.01','2023.09.02','2023.09.03','2023.09.04','2023.09.05','2023.09.06','2023.09.07','2023.09.08','2023.09.09','2023.09.10','2023.09.11','2023.09.12','2023.09.13','2023.09.14','2023.09.15','2023.09.16','2023.09.17','2023.09.18','2023.09.19','2023.09.20','2023.09.21','2023.09.22','2023.09.23','2023.09.24','2023.09.25','2023.09.26','2023.09.27','2023.09.28','2023.09.29','2023.09.30','2023.10.01','2023.10.02','2023.10.03','2023.10.04','2023.10.05','2023.10.06','2023.10.07','2023.10.08','2023.10.09','2023.10.10','2023.10.11','2023.10.12','2023.10.13','2023.10.14','2023.10.15','2023.10.16','2023.10.17','2023.10.18','2023.10.19','2023.10.20','2023.10.21','2023.10.22','2023.10.23','2023.10.24','2023.10.25','2023.10.26','2023.10.27','2023.10.28','2023.10.29','2023.10.30','2023.10.31','2023.11.01','2023.11.02','2023.11.03','2023.11.04','2023.11.05','2023.11.06','2023.11.07','2023.11.08','2023.11.09','2023.11.10','2023.11.11','2023.11.12','2023.11.13','2023.11.14','2023.11.15','2023.11.16','2023.11.17','2023.11.18','2023.11.19','2023.11.20','2023.11.21','2023.11.22','2023.11.23','2023.11.24','2023.11.25','2023.11.26','2023.11.27','2023.11.28','2023.11.29','2023.11.30','2023.12.01','2023.12.02','2023.12.03','2023.12.04','2023.12.05','2023.12.06','2023.12.07','2023.12.08','2023.12.09','2023.12.10','2023.12.11','2023.12.12','2023.12.13','2023.12.14','2023.12.15','2023.12.16','2023.12.17','2023.12.18','2023.12.19','2023.12.20','2023.12.21','2023.12.22','2023.12.23','2023.12.24','2023.12.25','2023.12.26','2023.12.27','2023.12.28','2023.12.29','2023.12.30','2023.12.31','2024.01.01','2024.01.02','2024.01.03','2024.01.04','2024.01.05','2024.01.06','2024.01.07','2024.01.08','2024.01.09','2024.01.10','2024.01.11','2024.01.12','2024.01.13','2024.01.14','2024.01.15','2024.01.16','2024.01.17','2024.01.18','2024.01.19','2024.01.20','2024.01.21','2024.01.22','2024.01.23','2024.01.24','2024.01.25','2024.01.26','2024.01.27','2024.01.28','2024.01.29','2024.01.30','2024.01.31','2024.02.01','2024.02.02','2024.02.03','2024.02.04','2024.02.05','2024.02.06','2024.02.07','2024.02.08','2024.02.09','2024.02.10','2024.02.11','2024.02.12','2024.02.13','2024.02.14','2024.02.15','2024.02.16','2024.02.17','2024.02.18','2024.02.19','2024.02.20','2024.02.21','2024.02.22','2024.02.23','2024.02.24','2024.02.25','2024.02.26','2024.02.27','2024.02.28','2024.02.29','2024.03.01','2024.03.02','2024.03.03','2024.03.04','2024.03.05','2024.03.06','2024.03.07','2024.03.08','2024.03.09','2024.03.10','2024.03.11','2024.03.12','2024.03.13','2024.03.14','2024.03.15','2024.03.16','2024.03.17','2024.03.18','2024.03.19','2024.03.20','2024.03.21','2024.03.22','2024.03.23','2024.03.24','2024.03.25','2024.03.26','2024.03.27','2024.03.28','2024.03.29','2024.03.30','2024.03.31','2024.04.01','2024.04.02','2024.04.03','2024.04.04','2024.04.05','2024.04.06','2024.04.07','2024.04.08','2024.04.09','2024.04.10','2024.04.11','2024.04.12','2024.04.13','2024.04.14','2024.04.15','2024.04.16','2024.04.17','2024.04.18','2024.04.19','2024.04.20','2024.04.21','2024.04.22','2024.04.23','2024.04.24','2024.04.25','2024.04.26','2024.04.27','2024.04.28','2024.04.29','2024.04.30','2024.05.01','2024.05.02','2024.05.03','2024.05.04','2024.05.05','2024.05.06','2024.05.07','2024.05.08','2024.05.09','2024.05.10','2024.05.11','2024.05.12','2024.05.13','2024.05.14','2024.05.15','2024.05.16','2024.05.17','2024.05.18','2024.05.19','2024.05.20','2024.05.21','2024.05.22','2024.05.23','2024.05.24','2024.05.25','2024.05.26','2024.05.27','2024.05.28','2024.05.29','2024.05.30','2024.05.31','2024.06.01','2024.06.02','2024.06.03','2024.06.04','2024.06.05','2024.06.06','2024.06.07','2024.06.08','2024.06.09','2024.06.10','2024.06.11','2024.06.12','2024.06.13','2024.06.14','2024.06.15','2024.06.16','2024.06.17','2024.06.18','2024.06.19','2024.06.20','2024.06.21','2024.06.22','2024.06.23','2024.06.24','2024.06.25','2024.06.26','2024.06.27','2024.06.28','2024.06.29','2024.06.30','2024.07.01','2024.07.02','2024.07.03','2024.07.04','2024.07.05','2024.07.06','2024.07.07','2024.07.08','2024.07.09','2024.07.10','2024.07.11','2024.07.12','2024.07.13','2024.07.14','2024.07.15','2024.07.16','2024.07.17','2024.07.18','2024.07.19','2024.07.20','2024.07.21','2024.07.22','2024.07.23','2024.07.24','2024.07.25','2024.07.26','2024.07.27','2024.07.28','2024.07.29','2024.07.30','2024.07.31','2024.08.01','2024.08.02','2024.08.03','2024.08.04','2024.08.05','2024.08.06','2024.08.07','2024.08.08','2024.08.09','2024.08.10','2024.08.11','2024.08.12','2024.08.13','2024.08.14','2024.08.15','2024.08.16','2024.08.17','2024.08.18','2024.08.19','2024.08.20','2024.08.21','2024.08.22','2024.08.23','2024.08.24','2024.08.25','2024.08.26','2024.08.27','2024.08.28','2024.08.29','2024.08.30','2024.08.31','2024.09.01','2024.09.02','2024.09.03','2024.09.04','2024.09.05','2024.09.06','2024.09.07','2024.09.08','2024.09.09','2024.09.10','2024.09.11','2024.09.12','2024.09.13','2024.09.14','2024.09.15','2024.09.16','2024.09.17','2024.09.18','2024.09.19','2024.09.20','2024.09.21','2024.09.22','2024.09.23','2024.09.24','2024.09.25','2024.09.26','2024.09.27','2024.09.28','2024.09.29','2024.09.30','2024.10.01','2024.10.02','2024.10.03','2024.10.04','2024.10.05','2024.10.06','2024.10.07','2024.10.08','2024.10.09','2024.10.10','2024.10.11','2024.10.12','2024.10.13','2024.10.14','2024.10.15','2024.10.16','2024.10.17','2024.10.18','2024.10.19','2024.10.20','2024.10.21','2024.10.22','2024.10.23','2024.10.24','2024.10.25','2024.10.26','2024.10.27','2024.10.28','2024.10.29','2024.10.30','2024.10.31','2024.11.01','2024.11.02','2024.11.03','2024.11.04','2024.11.05','2024.11.06','2024.11.07','2024.11.08','2024.11.09','2024.11.10','2024.11.11','2024.11.12','2024.11.13','2024.11.14','2024.11.15','2024.11.16','2024.11.17','2024.11.18','2024.11.19','2024.11.20','2024.11.21','2024.11.22','2024.11.23','2024.11.24','2024.11.25','2024.11.26','2024.11.27','2024.11.28','2024.11.29','2024.11.30','2024.12.01','2024.12.02','2024.12.03','2024.12.04','2024.12.04','2024.12.05','2024.12.06','2024.12.07','2024.12.08','2024.12.09','2024.12.10','2024.12.11','2024.12.12','2024.12.13','2024.12.14','2024.12.15','2024.12.16','2024.12.17','2024.12.18','2024.12.19','2024.12.20','2024.12.21','2024.12.22','2024.12.23','2024.12.24','2024.12.25','2024.12.26','2024.12.27','2024.12.28','2024.12.29','2024.12.30','2024.12.31','2025.01.01','2025.01.02','2025.01.03','2025.01.04','2025.01.05','2025.01.06','2025.01.07','2025.01.08','2025.01.09','2025.01.10','2025.01.11','2025.01.12','2025.01.13','2025.01.14','2025.01.15','2025.01.16','2025.01.17','2025.01.18','2025.01.19','2025.01.20','2025.01.21','2025.01.22','2025.01.23','2025.01.24','2025.01.25','2025.01.26','2025.01.27','2025.01.28','2025.01.29','2025.01.30','2025.01.31','2025.02.01','2025.02.02','2025.02.03','2025.02.04','2025.02.05','2025.02.06','2025.02.07','2025.02.08','2025.02.09','2025.02.10','2025.02.11','2025.02.12','2025.02.13','2025.02.14',''],
    datasets: [{
      label: '体重',
      data: [402,397,399,395,398,397,400,401,398,399,396,401,405,403,405,408,408,408,407,405,403,408,410,408,406,410,412,409,411,409,406,405,405,408,408,409,403,410,409,410,410,407,405,405,400,405,404,403,408,408,405,406,405,404,408,410,407,403,404,406,408,409,406,409,409,409,409,409,409,409,409,409,409,409,408,412,412,412,412,412,412,412,412,412,412,412,415,415,415,418,416,414,414,414,414,416,416,418,413,418,418,416,412,415,415,419,418,421,419,420,420,420,420,417,417,415,417,417,417,422,422,422,422,419,419,418,419,422,418,420,422,422,421,420,420,421,422,419,419,418,420,420,420,420,420,420,417,417,417,417,417,417,417,420,421,421,419,421,420,423,422,423,423,423,420,417,420,417,416,417,419,417,422,423,423,421,422,423,423,424,424,426,426,426,427,423,422,423,423,423,423,423,423,426,426,428,428,430,430,430,429,429,431,431,431,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,434,436,433,434,431,430,429,429,426,430,431,428,432,430,430,430,430,428,431,435,431,435,431,434,431,434,436,436,438,438,438,434,434,434,432,435,434,436,431,434,432,432,431,432,435,431,433,433,435,435,435,432,434,433,433,433,433,435,432,433,439,439,442,434,435,435,435,432,437,433,435,435,434,434,435,436,434,437,433,435,438,437,435,436,439,440,444,441,443,444,439,437,433,435,437,437,435,434,432,429,431,431,437,437,435,435,434,434,433,439,434,435,436,438,435,432,437,438,440,437,439,440,440,438,436,439,440,438,436,437,436,440,440,439,439,439,439,440,442,441,441,440,441,438,440,439,437,438,438,438,438,438,438,430,430,430,430,430,430,430,440,441,440,440,440,440,440,440,436,434,434,434,437,432,438,438,438,437,437,434,437,437,437,437,437,437,437,437,436,438,435,440,440,440,440,440,433,433,433,433,433,438,439,437,437,430,430,432,439,438,438,434,434,434,440,438,434,433,433,433,433,440,440,441,440,440,440,440,443,441,443,443,443,439,441,441,443,445,441,438,440,443,443,442,444,446,446,446,446,445,445,446,440,444,445,445,441,440,437,437,437,437,441,443,442,444,437,437,437,437,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,431,439,442,441,438,438,438,438,438,438,438,438,438,441,438,442,442,442,445,448,446,445,446,440,439,442,445,440,445,443,445,446,448,448,448,450,446,445,443,439,443,445,446,445,445,446,443,446,449,451,451,451,451,451,451,451,451,451,447,444,445,446,445,449,449,449,450,456,450,447,447,443,451,443,443,448,450,450,451,451,451,449,443,443,443,443,445,448,445,445,447,445,447,447,447,449,450,451,451,451,451,451,451,450,452,452,449,451,451,451,453,456,455,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,451,454,454,454,453,456,454,454,453,454,458,463,460,460,461,461,462,460,459,460,459,457,457,460,460,457,458,458,460,451,448,452,456,458,458,462,460,456,457,456,456,460,457,459,457,455,459,460,455,456,458,456,457,457,456,456,455,459,455,455,456,458,459,457,458,456,456,456,456,456,456,456,460,],
      borderColor: '#333',
    }, {
      label: '体温',
      data: [37.5, 37.3, 37.3, 37.1, 37.3, 37.8, 37.7, 37.9, 37.6, 37.8, 37.8, 37.7, 37.7, 37.9, 37.8, 37.6, 37.9, 37.9, 37.7, 37.9, 37.9, 37.7, 37.8, 37.7, 37.2, 37.6, 37.8, 37.7, 37.8, 37.7, 37.8, 37.6, 37.5, 37.7, 37.7, 37.7, 37.7, 37.2, 37.4, 37.1, 37.2, 37.2, 37.2, 37.3, 37.1, 37.2, 37.1, 37.1, 37.1, 37.2, 37.4, 37.2, 37.4, 37.1, 37.2, 37.3, 37.5, 37.6, 37.6, 37.5, 37.6, 37.2, 37.1, 37.2, 37.3, 37.4, 37.5, 37.6, 37.4, 37.1, 37.3, 37.1, 37.1, 37.2, 37.1, 37.3, 37.2, 37.4, 37.1, 37.2, 37.3, 37.3, 37.5, 37.4, 37.3, 37.5, 37.7, 37.5, 37.4, 37.5, 37.5, 37.2, 37.2, 37.3, 37.5, 37.3, 37.3, 37.6, 37.7, 37.5, 37.5, 37.3, 37.2, 37.3, 37.1, 37.1, 37.2, 37.2, 37.5, 37.5, 37.3, 37.4, 37.3, 37.4, 37.3, 37.4, 37.7, 37.5, 37.6, 37.5, 37.7, 37.7, 37.5, 37.6, 37.6, 37.5, 37.6, 37.5, 37.5, 37.3, 37.3, 37.6, 37.4, 37.3, 37.1, 37.5, 37.3, 37.6, 37.3, 37.4, 37.5, 37.6, 37.2, 37.2, 37.3, 37.5, 37.4, 37.6, 37.5, 37.2, 37.5, 37.5, 37.5, 37.3, 37.6, 37.4, 37.6, 37.5, 37.8, 37.5, 37.3, 37.5, 37.5, 37.2, 37.6, 37.5, 37.2, 37.3, 37.5, 37.6, 37.5, 37.7, 37.6, 37.7, 37.5, 37.6, 37.6, 37.4, 37.6, 37.4, 37.5, 37.6, 37.8, 37.6, 37.8, 37.7, 37.7, 37.7, 37.7, 37.7, 37.8, 37.7, 37.8, 37.7, 37.7, 37.8, 37.8, 37.6, 37.3, 37.2, 37.5, 37.3, 37.2, 37.3, 37.6, 37.5, 37.4, 37.6, 37.5, 37.7, 37.5, 37.5, 37.6, 37.3, 37.6, 37.7, 37.7, 37.6, 37.7, 37.7, 37.7, 37.7, 37.7, 37.9, 37.8, 37.5, 37.2, 37.2, 37.2, 37.2, 37.2, 37.2, 37.2, 37.2, 37.2, 37.2, 37.1, 37.2, 37.3, 37.4, 37.5, 37.4, 37.4, 37.3, 37.6, 37.4, 37.4, 37.0, 37.2, 37.0, 37.2, 37.6, 37.7, 37.4, 37.2, 37.2, 37.5, 37.2, 37.2, 37.3, 37.2, 37.2, 37.2, 37.3, 37.2, 37.3, 37.4, 37.3, 37.2, 37.2, 37.4, 37.2, 37.4, 37.2, 37.3, 37.2, 37.2, 37.2, 37.1, 37.2, 37.2, 37.4, 37.3, 37.3, 37.3, 37.4, 37.7, 37.4, 37.2, 37.3, 37.3, 37.8, 37.6, 37.4, 37.4, 37.4, 37.6, 37.7, 37.6, 37.4, 37.3, 37.4, 37.4, 37.3, 37.3, 37.4, 37.8, 37.4, 37.4, 37.4, 37.3, 37.4, 37.3, 37.2, 37.4, 37.3, 37.4, 37.3, 37.2, 37.4, 37.3, 37.4, 37.4, 37.4, 37.4, 37.6, 37.6, 37.6, 37.4, 37.5, 37.3, 37.4, 37.3, 37.3, 37.3, 37.4, 37.1, 37.5, 36.8, 37.2, 37.4, 37.6, 37.2, 37.1, 37.2, 37.1, 37.6, 37.2, 37.2, 37.5, 37.4, 37.2, 37.4, 37.4, 37.1, 37.1, 37.2, 37.6, 37.2, 37.7, 37.8, 37.2, 37.4, 37.8, 37.9, 37.8, 37.6, 37.7, 37.3, 37.3, 37.4, 37.4, 37.5, 37.2, 37.4, 37.4, 37.2, 37.4, 37.3, 37.2, 37.5, 37.2, 37.4, 37.6, 37.2, 37.3, 37.1, 37.4, 37.5, 37.1, 37.4, 37.2, 37.3, 37.3, 37.2, 37.3, 37.4, 37.5, 37.2, 37.4, 37.4, 37.2, 37.4, 37.6, 37.4, 37.5, 37.4, 37.6, 37.3, 37.2, 37.4, 37.3, 37.4, 37.2, 37.3, 37.4, 37.6, 37.2, 37.6, 37.4, 37.5, 37.6, 37.2, 37.4, 37.5, 37.3, 37.2, 37.7, 37.5, 37.2, 37.4, 37.5, 37.8, 37.7, 37.5, 37.4, 37.4, 37.5, 37.3, 37.4, 37.5, 37.4, 37.4, 37.5, 37.7, 37.7, 37.6, 37.7, 37.8, 37.6, 37.8, 38.1, 37.9, 38.0, 38.2, 38.1, 37.8, 37.8, 37.6, 37.7, 37.6, 37.7, 37.6, 37.5, 37.7, 37.8, 37.7, 37.7, 37.7, 37.5, 37.7, 37.5, 37.7, 37.7, 37.6, 37.5, 37.6, 37.6, 37.5, 37.6, 37.7, 37.5, 37.6, 37.6, 37.5, 37.6, 37.6, 37.8, 37.6, 37.6, 37.7, 37.8, 37.8, 37.7, 37.7, 37.9, 37.7, 37.4, 37.6, 37.7, 37.5, 37.6, 37.7, 37.5, 37.6, 37.5, 37.6, 37.5, 37.8, 37.5, 37.8, 37.6, 37.7, 37.8, 37.7, 37.7, 37.8, 37.7, 37.6, 37.6, 37.7, 37.7, 37.5, 37.6, 37.8, 37.8, 37.7, 37.9, 37.8, 37.8, 37.8, 37.8, 37.8, 37.6, 37.8, 37.8, 37.6, 38.2, 38.3, 38.1, 37.6, 37.8, 37.7, 37.9, 37.7, 37.7, 37.4, 37.5, 37.8, 37.6, 38.0, 37.9, 37.8, 37.8, 37.7, 37.8, 37.7, 37.9, 37.8, 37.8, 37.7, 37.8, 38.2, 38.2, 38.1, 38.2, 37.7, 37.7, 37.8, 37.7, 37.7, 37.7, 37.8, 37.6, 37.7, 37.7, 37.7, 37.8, 37.8, 38.0, 37.9, 37.9, 37.9, 37.6, 37.8, 37.8, 37.8, 37.7, 37.7, 37.9, 37.8, 37.9, 37.6, 38.0, 38.0, 37.8, 37.7, 37.7, 37.6, 37.6, 37.8, 37.9, 37.7, 37.7, 37.6, 37.6, 37.6, 37.7, 37.6, 37.7, 37.6, 37.8, 37.7, 37.7, 37.8, 37.6, 37.7, 37.7, 37.6, 37.6, 37.6, 37.5, 37.4, 37.5, 37.4, 37.5, 37.6, 37.5, 37.5, 37.5, 37.6, 37.5, 37.5, 37.5, 37.6, 37.5, 37.4, 37.3, 37.4, 37.8, 37.4, 37.5, 37.5, 37.6, 37.4, 37.3, 37.4, 37.4, 37.4, 37.2, 37.3, 37.3, 37.6, 37.5, 37.5, 37.3, 37.3, 37.4, 37.3, 37.5, 37.4, 37.4, 37.4, 37.3, 37.4, 37.4, 37.4, 37.5, 37.4, 37.5, 37.3, 37.3, 37.2, 37.4, 37.5, 37.6, 37.4, 37.3, 37.3, 37.3, 37.2, 37.2, 37.3, 37.2, 37.3, 37.6, 37.5, 37.4, 37.6, 37.5, 37.4, 37.6, 37.8, 37.7, 37.7, 37.6, 37.8, 37.7, 37.7, 37.8, 37.7, 37.7, 37.7, 37.8, 37.7, 37.7, 37.6, 37.7, 37.7, 37.8, 37.8, 37.8, 37.7, 37.4, 37.7, 37.4, 37.4, 37.7, 37.6, 37.6, 37.8, 37.8, 37.8, 37.7, 37.8, 37.8, 37.8, 37.7, 37.8, 37.8, 38.0, 37.8, 37.8, 37.8, 37.7, 37.7, 37.7, 37.7, 37.7, ],
      borderColor: '#f88',
      yAxisID: 'y2',
    }],
  },
  options: {
    scales: {
      y: {   // 体重
        min: 350,
        max: 560,
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
