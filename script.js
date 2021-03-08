let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let yearslength = table1.rows[1].cells.length;
let countriesNmb = table1.rows[2].cells[1].innerHTML;



//gestion des données du premier tableau

console.log(countriesNmb);

let years = [];

for(let i = 2;i<yearslength;i++){
    years.push(table1.rows[1].cells[i].innerHTML);
}

console.log(years);

let countries = [];

for(x=1;x<=35;x++){
    console.log(document.getElementsByTagName("tbody")[0].getElementsByTagName('tr')[x].getElementsByTagName('td')[0].innerHTML);
    countries.push(document.getElementsByTagName("tbody")[0].getElementsByTagName('tr')[x].getElementsByTagName('td')[0].innerHTML);
}



//gestion premier graphique
let canvasT1 = document.body.getElementsByTagName("h3")[0];
let canvasT2 = document.getElementById("Homicides");

canvasT1.insertAdjacentHTML('afterend', '<canvas id="graph1" width="400px" height="400px"></canvas>');
canvasT2.insertAdjacentHTML('afterend', '<canvas id="graph2" width="400px" height="400px"></canvas>');

let ctx = document.getElementById("graph1").getContext("2d");
let chart = new Chart(ctx, {

    type: 'line',

    data: {
        labels: years,
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
    options: {}
});



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

