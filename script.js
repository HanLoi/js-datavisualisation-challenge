let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let yearslength = table1.rows[1].cells.length;
let datavalue = [];

let canvasT1 = document.body.getElementsByTagName("h3")[0];
let canvasT2 = document.getElementById("Homicides");


//gestion des données du premier tableau

let years = [];

for(let i = 2;i<yearslength;i++){
    years.push(table1.rows[1].cells[i].innerHTML);
}


let countries = [];

for(let x=2;x<=36;x++){
    countries.push(table1.rows[x].cells[1].innerHTML);
}



let obj = {
   countries : countries,
    data : []
}

for(let a=2;a<=36;a++){
    datavalue = [];
    for(let b = 2;b<yearslength;b++){
        datavalue.push(parseFloat(table1.rows[a].cells[b].innerHTML))
    }
    obj.data.push(datavalue);
}
//gestion premier graphique
canvasT1.insertAdjacentHTML('afterend', '<canvas id="graph1" width="400px" height="400px"></canvas>');
canvasT2.insertAdjacentHTML('afterend', '<canvas id="graph2" width="400px" height="400px"></canvas>');

let ctx = document.getElementById("graph1").getContext("2d");
let chart = new Chart(ctx, {

    type: 'line',

    data: {
        labels: years,
        datasets: [{
            label: countries[0],
            data: 
              obj.data[0]
            ,
        }, {
            label: countries[1],
            fill: false,
            borderDash: [5, 5],
            data:  
                obj.data[1]
            ,
        }, {
            label: countries[2],
            data: 
                obj.data[2]
            ,
            fill: true,
        }, {
            label: countries[3],
            data: 
                obj.data[3]
            ,
            fill: true,
        }, {
            label: countries[4],
            data: 
                obj.data[4]
            ,
            fill: true,
        }, {
            label: countries[5],
            data: 
                obj.data[5]
            ,
            fill: true,
        }, {
            label: countries[6],
            data: 
                obj.data[6]
            ,
            fill: true,
        }, {
            label: countries[7],
            data: 
                obj.data[7]
            ,
            fill: true,
        }, {
            label: countries[8],
            data: 
                obj.data[8]
            ,
            fill: true,
        }, {
            label: countries[9],
            data: 
                obj.data[9]
            ,
            fill: true,
        }, {
            label: countries[10],
            data: 
                obj.data[10]
            ,
            fill: true,
        }, {
            label: countries[11],
            data: 
                obj.data[11]
            ,
            fill: true,
        }, {
            label: countries[12],
            data: 
                obj.data[12]
            ,
            fill: true,
        }, {
            label: countries[13],
            data: 
                obj.data[13]
            ,
            fill: true,
        }, {
            label: countries[14],
            data: 
                obj.data[14]
            ,
            fill: true,
        }, {
            label: countries[15],
            data: 
                obj.data[15]
            ,
            fill: true,
        }, {
            label: countries[16],
            data: 
                obj.data[16]
            ,
            fill: true,
        }, {
            label: countries[17],
            data: 
                obj.data[17]
            ,
            fill: true,
        }, {
            label: countries[18],
            data: 
                obj.data[18]
            ,
            fill: true,
        }, {
            label: countries[19],
            data: 
                obj.data[19]
            ,
            fill: true,
        }, {
            label: countries[20],
            data: 
                obj.data[20]
            ,
            fill: true,
        }, {
            label: countries[21],
            data: 
                obj.data[21]
            ,
            fill: true,
        }, {
            label: countries[22],
            data: 
                obj.data[22]
            ,
            fill: true,
        }, {
            label: countries[23],
            data: 
                obj.data[23]
            ,
            fill: true,
        }, {
            label: countries[24],
            data: 
                obj.data[24]
            ,
            fill: true,
        }, {
            label: countries[25],
            data: 
                obj.data[25]
            ,
            fill: true,
        }, {
            label: countries[26],
            data: 
                obj.data[26]
            ,
            fill: true,
        }, {
            label: countries[27],
            data: 
                obj.data[27]
            ,
            fill: true,
        }, {
            label: countries[28],
            data: 
                obj.data[28]
            ,
            fill: true,
        }, {
            label: countries[29],
            data: 
                obj.data[29]
            ,
            fill: true,
        }, {
            label: countries[30],
            data: 
                obj.data[30]
            ,
            fill: true,
        }, {
            label: countries[31],
            data: 
                obj.data[31]
            ,
            fill: true,
        }, {
            label: countries[32],
            data: 
                obj.data[32]
            ,
            fill: true,
        }]
    },
    options: {}
});

/*for(let i=0 ; i= countries.lenght;i++){
    for(let j = 0; j>12; j++){
        countries[i] = new Array(table1.rows[i].cells[j].innerHTML);
    }    
}*/
/*
let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://canvasjs.com/services/data/datapoints.php', true)
xhr.onload = function() {
            if (this.status === 200){
                document.getElementById("quote").innerHTML=JSON.parse(this.responseText);
            } else {
                document.getElementById("quote").innerHTML="There is a error but there isn't a error in the spirit"
            }
        }

xhr.send()*/

let yearslength2 = table2.rows[0].cells.length;

let years2 = [];

for(let i = 2; i < yearslength2 ; i++){
    years2.push(table2.rows[0].cells[i].innerHTML);
}

let countries2 = [];

for(x = 1 ; x <= 30 ; x++){
    countries2.push(table2.rows[x].cells[1].innerHTML);
}

let datavalue2 = [];

let obj2 = {
    countries2 : countries,
    data2 : []
}

for(a = 1 ; a <= 30 ; a++){
    datavalue2 = [];
    for( b = 2 ; b < yearslength2; b++ ){
        datavalue2.push(parseFloat(table2.rows[a].cells[b].innerHTML));
    }
    obj2.data2.push(datavalue2);
}
console.log(obj2.data2);