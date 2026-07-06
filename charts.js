// Passed Inspection Trends - Line Chart
const passedCtx = document.getElementById('passedInspectionChart');
new Chart(passedCtx, {
  type: 'line',
  data: {
    labels: ['Jan 2021', 'Jul 2021', 'Jan 2022', 'Jul 2022', 'Jan 2023', 'Jul 2023', 'Jan 2024', 'Jul 2024', 'Jan 2025'],
    datasets: [{
      label: 'Passed Inspections',
      data: [8, 15, 18, 19, 20, 27, 33, 34, 36],
      borderColor: '#4d79ff',
      backgroundColor: 'rgba(77, 121, 255, 0.15)',
      fill: true,
      tension: 0.4,
      pointRadius: 3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Ratio of Violations - Pie Chart
const violationsCtx = document.getElementById('violationsChart');
new Chart(violationsCtx, {
  type: 'pie',
  data: {
    labels: ['Cross-contamination', 'Pest Infestation', 'Unclean Restroom', 'Poor Handwashing Practices'],
    datasets: [{
      data: [55, 25, 15, 5],
      backgroundColor: ['#4d79ff', '#b19cd9', '#ffb74d', '#ffe066']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'right' }
    }
  }
});

// Passed vs Failed Inspections per Establishment - Grouped Bar Chart
const passFailCtx = document.getElementById('passFailChart');
new Chart(passFailCtx, {
  type: 'bar',
  data: {
    labels: ['Fowler Fine Diner', 'Ate Rica\'s', 'Jollibee', 'Savory Bites'],
    datasets: [
      {
        label: 'Passed',
        data: [18, 12, 17, 15],
        backgroundColor: '#4caf50'
      },
      {
        label: 'Failed',
        data: [4, 8, 8, 6],
        backgroundColor: '#e05252'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    },
    scales: {
      x: { stacked: false },
      y: { beginAtZero: true }
    }
  }
});