let table1 = document.getElementById("table1")
let table2 = document.getElementById("table2")

let canvasT1 = document.body.getElementsByTagName("h3")[0];
let canvasT2 = document.getElementById("Homicides")


canvasT1.insertAdjacentHTML('afterend', '<canvas id="graph1" width="400px" height="400px"></canvas>');
canvasT2.insertAdjacentHTML('afterend', '<canvas id="graph2" width="400px" height="400px"></canvas>');

let ctx = document.getElementById("graph1").getContext("2d");
let chart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Unfilled',
            data: [
                10,10,10,20,30
            ],
        }, {
            label: 'Dashed',
            fill: false,
            borderDash: [5, 5],
            data:  [
                10,15,35,30,30
            ],
        }, {
            label: 'Filled',
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }]
    },
    // Configuration options go here
    options: {}
});






let row = table1.rows;
let firstRow = table1.rows[1];
console.log(firstRow.innerHTML);



/*let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://canvasjs.com/services/data/datapoints.php', true)
xhr.onload = function() {
            if (this.status === 200){
                document.getElementById("quote").innerHTML=JSON.parse(this.responseText);
            } else {
                document.getElementById("quote").innerHTML="There is a error but there isn't a error in the spirit"
            }
        }

xhr.send()*/