$(document).ready(function () {
    // Line Chart
    var ctx = document.getElementById('LineChart').getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Field Goal Percentage Per Season',
                borderColor: '#A71930',
                data: [88.5, 94.9, 93.1, 86.5, 86.5, 73.5]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            }
        }
    });

    // Bar Chart
    var barCtx = document.getElementById('BarChart').getContext('2d');
    var myBarChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Field Goals Made',
                data: [23, 37, 27, 32, 32, 25],
                backgroundColor: '#A71930',
                borderWidth: 1
            }, {
                label: 'Field Goals Attempted',
                data: [26, 39, 29, 37, 37, 34],
                backgroundColor: '#A5ACAF',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            }
        }
    });

    // Pie Chart
    var pieCtx = document.getElementById('PieChart').getContext('2d');
    var myPieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['20-29 Yards', '30-39 Yards', '40-49 Yards', '50+ Yards'],
            datasets: [{
                label: 'Field Goal Attempts',
                data: [52, 55, 61, 40],
                backgroundColor: [
                    '#FFFFFF',
                    '#D9001B',
                    '#A5ACAF',
                    '#A71930'
                ],
                borderColor: [
                    '#000000',
                    '#000000',
                    '#000000',
                    '#000000'
                ],
                borderWidth: 4
            }]
        }
    });
});