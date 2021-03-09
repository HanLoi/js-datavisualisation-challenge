let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let yearslength = table1.rows[1].cells.length;
let countriesNmb = table1.rows[2].cells[1].innerHTML;
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
console.log(obj.data[0]);
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
            fill: false,
            borderColor: 'rgb(255, 59, 71)',
        }, {
            label: countries[1],
            data:  
                obj.data[1]
            ,
            fill: false,
            borderColor: 'rgb(177, 59, 71)',
        }, {
            label: countries[2],
            data: 
                obj.data[2]
            ,
            fill: false,
            borderColor: 'rgb(177, 59, 116)',
        }, {
            label: countries[3],
            data: 
                obj.data[3]
            ,
            fill: false,
            borderColor: 'rgb(106, 90, 205)',
        }, {
            label: countries[4],
            data: 
                obj.data[4]
            ,
            fill: false,
            borderColor: 'rgb(255, 165, 0)',
        }, {
            label: countries[5],
            data: 
                obj.data[5]
            ,
            fill: false,
            borderColor: 'rgb(60, 179, 113)',
        }, {
            label: countries[6],
            data: 
                obj.data[6]
            ,
            fill: false,
            borderColor: 'rgb(0, 0, 255)',
        }, {
            label: countries[7],
            data: 
                obj.data[7]
            ,
            fill: false,
            borderColor: 'rgb(177, 59, 208)',
        }, {
            label: countries[8],
            data: 
                obj.data[8]
            ,
            fill: false,
            borderColor: 'rgb(177, 255, 208)',
        }, {
            label: countries[9],
            data: 
                obj.data[9]
            ,
            fill: false,
            borderColor: 'rgb(0, 255, 208)',
        }, {
            label: countries[10],
            data: 
                obj.data[10]
            ,
            fill: false,
            borderColor: 'rgb(0, 255, 0)',
        }, {
            label: countries[11],
            data: 
                obj.data[11]
            ,
            fill: false,
            borderColor: 'rgb(0, 114, 0)',
        }, {
            label: countries[12],
            data: 
                obj.data[12]
            ,
            fill: false,
            borderColor: 'rgb(86, 114, 0)',
        }, {
            label: countries[13],
            data: 
                obj.data[13]
            ,
            fill: false,
            borderColor: 'rgb(86, 114, 129)',
        }, {
            label: countries[14],
            data: 
                obj.data[14]
            ,
            fill: false,
            borderColor: 'rgb(86, 114, 207)',
        }, {
            label: countries[15],
            data: 
                obj.data[15]
            ,
            fill: false,
            borderColor: 'rgb(86, 39, 207)',
        }, {
            label: countries[16],
            data: 
                obj.data[16]
            ,
            fill: false,
            borderColor: 'rgb(200, 39, 207)',
        }, {
            label: countries[17],
            data: 
                obj.data[17]
            ,
            fill: false,
            borderColor: 'rgb(84, 182, 207)',
        }, {
            label: countries[18],
            data: 
                obj.data[18]
            ,
            fill: false,
            borderColor: 'rgb(84, 26, 66)',
        }, {
            label: countries[19],
            data: 
                obj.data[19]
            ,
            fill: false,
            borderColor: 'rgb(241, 120, 66)',
        }, {
            label: countries[20],
            data: 
                obj.data[20]
            ,
            fill: false,
            borderColor: 'rgb(241, 255, 66)',
        }, {
            label: countries[21],
            data: 
                obj.data[21]
            ,
            fill: false,
            borderColor: 'rgb(241, 0, 66)',
        }, {
            label: countries[22],
            data: 
                obj.data[22]
            ,
            fill: false,
            borderColor: 'rgb(241, 190, 0)',
        }, {
            label: countries[23],
            data: 
                obj.data[23]
            ,
            fill: false,
            borderColor: 'rgb(0, 190, 0)',
        }, {
            label: countries[24],
            data: 
                obj.data[24]
            ,
            fill: false,
            borderColor: 'rgb(0, 190, 140)',
        }, {
            label: countries[25],
            data: 
                obj.data[25]
            ,
            fill: false,
            borderColor: 'rgb(0, 190, 236)',
        }, {
            label: countries[26],
            data: 
                obj.data[26]
            ,
            fill: false,
            borderColor: 'rgb(12, 0, 236)',
        }, {
            label: countries[27],
            data: 
                obj.data[27]
            ,
            fill: false,
            borderColor: 'rgb(12, 0, 114)',
        }, {
            label: countries[28],
            data: 
                obj.data[28]
            ,
            fill: false,
            borderColor: 'rgb(12, 83, 114)',
        }, {
            label: countries[29],
            data: 
                obj.data[29]
            ,
            fill: false,
            borderColor: 'rgb(156, 83, 114)',
        }, {
            label: countries[30],
            data: 
                obj.data[30]
            ,
            fill: false,
            borderColor: 'rgb(233, 83, 114)',
        }, {
            label: countries[31],
            data: 
                obj.data[31]
            ,
            fill: false,
            borderColor: 'rgb(255, 170, 114)',
        }, {
            label: countries[32],
            data: 
                obj.data[32]
            ,
            fill: false,
            borderColor: 'rgb(255, 217, 114)',
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

