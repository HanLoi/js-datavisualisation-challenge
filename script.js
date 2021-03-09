let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let yearslength = table1.rows[1].cells.length;
let datavalue = [];

let canvasT1 = document.body.getElementsByTagName("h3")[0];
let canvasT2 = document.getElementById("Homicides");
let canvasT3 = document.getElementById("firstHeading")

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
canvasT3.insertAdjacentHTML('afterend', '<canvas id="graph3" width="400px" height="400px"></canvas>');

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


let yearslength2 = table2.rows[0].cells.length;

let years2 = [];

for(let i = 2; i < yearslength2 ; i++){
    years2.push(table2.rows[0].cells[i].innerHTML);
}

let countries2 = [];

for(let x = 1 ; x <= 30 ; x++){
    countries2.push(table2.rows[x].cells[1].innerHTML);
}

let datavalue2 = [];

let obj2 = {
    countries2 : countries2,
    data2 : []
}

for(let a = 1 ; a <= 30 ; a++){
    datavalue2 = [];
    for( let b = 2 ; b < yearslength2; b++ ){
        datavalue2.push(parseFloat(table2.rows[a].cells[b].innerHTML));
    }
    obj2.data2.push(datavalue2);
}



let ctx2 = document.getElementById("graph2").getContext("2d");
let chart2 = new Chart(ctx2, {

    type: 'bar',

    data: {
        labels: years2,
        datasets: [{
            label: countries2[0],
            data: 
                obj2.data2[0]
            ,
            fill: false,
            backgroundColor: 'rgb(255, 59, 71)',
        }, {
            label: countries2[1],
            data:  
                obj2.data2[1]
            ,
            fill: false,
            backgroundColor: 'rgb(177, 59, 71)',
        }, {
            label: countries2[2],
            data: 
                obj2.data2[2]
            ,
            fill: false,
            backgroundColor: 'rgb(177, 59, 116)',
        }, {
            label: countries2[3],
            data: 
                obj2.data2[3]
            ,
            fill: false,
            backgroundColor: 'rgb(106, 90, 205)',
        }, {
            label: countries2[4],
            data: 
                obj2.data2[4]
            ,
            fill: false,
            backgroundColor: 'rgb(255, 165, 0)',
        }, {
            label: countries2[5],
            data: 
                obj2.data2[5]
            ,
            fill: false,
            backgroundColor: 'rgb(60, 179, 113)',
        }, {
            label: countries2[6],
            data: 
                obj2.data2[6]
            ,
            fill: false,
            backgroundColor: 'rgb(0, 0, 255)',
        }, {
            label: countries2[7],
            data: 
                obj2.data2[7]
            ,
            fill: false,
            backgroundColor: 'rgb(177, 59, 208)',
        }, {
            label: countries2[8],
            data: 
                obj2.data2[8]
            ,
            fill: false,
            backgroundColor: 'rgb(177, 255, 208)',
        }, {
            label: countries2[9],
            data: 
                obj2.data2[9]
            ,
            fill: false,
            backgroundColor: 'rgb(0, 255, 208)',
        }, {
            label: countries2[10],
            data: 
                obj2.data2[10]
            ,
            fill: false,
            backgroundColor: 'rgb(0, 255, 0)',
        }, {
            label: countries2[11],
            data: 
                obj2.data2[11]
            ,
            fill: false,
            backgroundColor: 'rgb(0, 114, 0)',
        }, {
            label: countries2[12],
            data: 
                obj2.data2[12]
            ,
            fill: false,
            backgroundColor: 'rgb(86, 114, 0)',
        }, {
            label: countries2[13],
            data: 
                obj2.data2[13]
            ,
            fill: false,
            backgroundColor: 'rgb(86, 114, 129)',
        }, {
            label: countries2[14],
            data: 
                obj2.data2[14]
            ,
            fill: false,
            backgroundColor: 'rgb(86, 114, 207)',
        }, {
            label: countries2[15],
            data: 
                obj2.data2[15]
            ,
            fill: false,
            backgroundColor: 'rgb(86, 39, 207)',
        }, {    
            label: countries2[16],
            data: 
                obj2.data2[16]
            ,
            fill: false,
            backgroundColor: 'rgb(200, 39, 207)',
        }, {
            label: countries2[17],
            data: 
                obj2.data2[17]
            ,
            fill: false,
            backgroundColor: 'rgb(84, 182, 207)',
        }, {
            label: countries2[18],
            data: 
                obj2.data2[18]
            ,
            fill: false,
            backgroundColor: 'rgb(84, 26, 66)',
        }, {
            label: countries2[19],
            data: 
                obj2.data2[19]
            ,
            fill: false,
            backgroundColor: 'rgb(241, 120, 66)',
        }, {
            label: countries2[20],
            data: 
                obj2.data2[20]
            ,
            fill: false,
            backgroundColor: 'rgb(241, 255, 66)',
        }, {
            label: countries2[21],
            data: 
                obj2.data2[21]
            ,
            fill: false,
            backgroundColor: 'rgb(241, 0, 66)',
        }, {
            label: countries2[22],
            data: 
                obj2.data2[22]
            ,
            fill: false,
            backgroundColor: 'rgb(241, 190, 0)',
        }, {
            label: countries2[23],
            data: 
                obj2.data2[23]
            ,
            fill: false,
            backgroundColor: 'rgb(0, 190, 0)',
        }, {
            label: countries2[24],
            data: 
                obj2.data2[24]
            ,
            fill: false,
            backgroundColor: 'rgb(0, 190, 140)',
        }, {
            label: countries2[25],
            data: 
                obj2.data2[25]
            ,
            fill: false,
            backgroundColor: 'rgb(0, 190, 236)',
        }, {
            label: countries2[26],
            data: 
            obj2.data2[26]
            ,
            fill: false,
            backgroundColor: 'rgb(12, 0, 236)',
        }, {
            label: countries2[27],
            data: 
            obj2.data2[27]
            ,
            fill: false,
            backgroundColor: 'rgb(12, 0, 114)',
        }, {
            label: countries2[28],
            data: 
                obj2.data2[28]
            ,
            fill: false,
            backgroundColor: 'rgb(12, 83, 114)',
        }, {
            label: countries2[29],
            data: 
                obj2.data2[29]
            ,
            fill: false,
            backgroundColor: 'rgb(156, 83, 114)',
        }]
    },
    options: {}
});

let data3;
let xhr = new XMLHttpRequest;

function dataRefresh(){
    let ctx3 = document.getElementById("graph3").getContext("2d");
    let chart3 = new Chart(ctx3, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                data: [{
                    x: data3[0][0],
                    y: data3[0][1]
                }, {
                    x: data3[1][0],
                    y: data3[1][1]
                }, {
                    x: data3[2][0],
                    y: data3[2][1]
                }, {
                    x: data3[3][0],
                    y: data3[3][1]
                }, {
                    x: data3[4][0],
                    y: data3[4][1]
                }, {
                    x: data3[5][0],
                    y: data3[5][1]
                }, {
                    x: data3[6][0],
                    y: data3[6][1]
                }, {
                    x: data3[7][0],
                    y: data3[7][1]
                }, {
                    x: data3[8][0],
                    y: data3[8][1]
                }, {
                    x: data3[9][0],
                    y: data3[9][1]
                }],
                backgroundColor:  'rgb(12, 83, 114)',
            }]
        },
        options: {
        }
    });
}


xhr.open('GET','https://canvasjs.com/services/data/datapoints.php',true)

xhr.onload = function(){
    if(this.status === 200){
        data3 = JSON.parse(this.responseText);
        setInterval(dataRefresh, 1000)
}
}
xhr.send();
