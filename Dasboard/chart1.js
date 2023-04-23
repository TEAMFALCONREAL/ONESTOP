const ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["4-10", "10-20", "20-30", "30-50", "50+"],
        datasets: [
            {
                label: "Placed Students Across Different Brackets",
                data: [150,200,80,50,10],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});



const xValues = [2018,2019,2020,2021,2022,2023];
const yValues = [7,8,10,11,14,15];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label:"Average Salary Over the Years",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});