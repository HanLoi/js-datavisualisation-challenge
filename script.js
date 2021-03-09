let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let yearslength = table1.rows[1].cells.length;
let countriesNmb = table1.rows[2].cells[1].innerHTML;
let datavalue = [];

console.log(table1.rows[2].innerText)

//gestion des données du premier tableau

let data = new Object()


for(let i = 2;i<yearslength;i++){
    years.push(table1.rows[1].cells[i].innerHTML);
}


let countries = [];

for(let x=1;x<=35;x++){
    console.log(document.getElementsByTagName("tbody")[0].getElementsByTagName('tr')[x].getElementsByTagName('td')[0].innerHTML);
    countries.push(document.getElementsByTagName("tbody")[0].getElementsByTagName('tr')[x].getElementsByTagName('td')[0].innerHTML);
}


let obj = {
   countries : countries,
    data : []
}

for(a=2;a<=36;a++){
    datavalue = [];
    for(let b = 2;b<yearslength;b++){
        datavalue.push(table1.rows[a].cells[b].innerHTML)
        console.log(datavalue);
    }
    obj.data.push(datavalue);
    console.log(obj.data);
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
            label: countries[0],
            data: [
                10,10,10,20,30
            ],
        }, {
            label: countries[1],
            fill: false,
            borderDash: [5, 5],
            data:  [
                10,15,35,30,30
            ],
        }, {
            label: countries[2],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[3],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[4],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[5],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[6],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[7],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[8],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[9],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[10],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[11],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[12],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[13],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[14],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[15],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[16],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[17],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[18],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[19],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[20],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[21],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[22],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[23],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[24],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[25],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[26],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[27],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[28],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[29],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[30],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[31],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }, {
            label: countries[32],
            data: [
                10,1,28,37,30
            ],
            fill: true,
        }]
    },
    options: {}
});

for(let i=0 ; i= countries.lenght;i++){
    for(let j = 0; j>12; j++){
        countries[i] = new Array(table1.rows[i].cells[j].innerHTML);
    }    
}

/*console.log(countries[1])*/


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

