let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let canvasT1 = document.body.getElementsByTagName("h3")[0];
let canvasT2 = document.getElementById("Homicides");
//let canvasT3 = document.getElementById("firstHeading")

//gestion des données du premier tableau

let years = [];
let countries = [];
let obj = {
    countries : countries,
     data : []
 }
let yearslength = table1.rows[1].cells.length;
let table1length = table1.rows.length;
let datavalue = [];
let datagraph = [];

for(let i = 2;i<yearslength;i++){
    years.push(table1.rows[1].cells[i].innerHTML);
}

for(let x=2;x<table1length;x++){
    countries.push(table1.rows[x].cells[1].innerHTML);
}

for(let a=2;a<table1length;a++){
    datavalue = [];
    for(let b = 2;b<yearslength;b++){
        datavalue.push(parseFloat(table1.rows[a].cells[b].innerHTML))
    }
    obj.data.push(datavalue);
}

for(m = 0 ; m <= table1length-3 ; m++){
    datagraph.push({label : countries[m],data : obj.data[m],borderColor : randColor(),fill : false})
}
console.log(datagraph);

//couleur random graphe


function randColor() 
{
    var r = ()=> { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}





//gestion premier graphique

canvasT1.insertAdjacentHTML('afterend', '<canvas id="graph1" width="400px" height="400px"></canvas>');
canvasT2.insertAdjacentHTML('afterend', '<canvas id="graph2" width="400px" height="400px"></canvas>');
//canvasT3.insertAdjacentHTML('afterend', '<canvas id="graph3" width="400px" height="400px"></canvas>');

let ctx = document.getElementById("graph1").getContext("2d");
let chart = new Chart(ctx, {

    type: 'line',

    data: {
       labels: years,
        datasets : datagraph
    },
    options: {}
});

//gestion données 2eme tableau

let yearslength2 = table2.rows[0].cells.length;
let table2length = table2.rows.length;
let years2 = [];
let countries2 = [];
let datavalue2 = [];
let datagraph2 = [];
let obj2 = {
    countries2 : countries2,
    data2 : []
}

for(let i = 2; i < yearslength2 ; i++){
    years2.push(table2.rows[0].cells[i].innerHTML);
}

for(let x = 1 ; x < table2length ; x++){
    countries2.push(table2.rows[x].cells[1].innerHTML);
}

for(let a = 1 ; a < table2length ; a++){
    datavalue2 = [];
    for( let b = 2 ; b < yearslength2; b++ ){
        datavalue2.push(parseFloat(table2.rows[a].cells[b].innerHTML));
    }
    obj2.data2.push(datavalue2);
}

for(m = 0 ; m < table2length-1 ; m++){
    datagraph2.push({label : countries2[m],data : obj2.data2[m],backgroundColor : randColor(),fill : false})
}



//gestion 2eme graphique

let ctx2 = document.getElementById("graph2").getContext("2d");
let chart2 = new Chart(ctx2, {

    type: 'bar',

    data: {
        labels: years2,
        datasets: datagraph2
    },
    options: {}
});

//3eme graphique

let chart3 = null;
let data3;
let xhr = new XMLHttpRequest;
let datagraph3 = [];

const drawGraph = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 300;
    const ctx3 = document.getContext("2d");
    const title = document.getElementById("firstHeading");
    title.after(canvas);
    getData(ctx3);
}


const getData = (ctx3) => {
    xhr.open('GET','https://canvasjs.com/services/data/datapoints.php',true)
    
    xhr.onload = function(){
        if(this.status === 200){
            data3 = JSON.parse(this.responseText);
            for(p = 0 ; p < data3.length ; p++ ){
                datagraph3.push({x : data3[p][0], y : data3[p][1]})
                
            }
            chart3 = new Chart(ctx3, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'Scatter Dataset',
                        data: datagraph3,
                        backgroundColor:  'rgb(12, 83, 114)',
                    }]
                },
                options: {
                }
                
            });
    }else {
        let canvasT3 = document.getElementById("firstHeading")
        canvasT3.insertAdjacentHTML('afterend', '<canvas id="graph3" width="400px" height="400px"></canvas>');
        document.getElementById("graph3").innerHTML="Error at load of data"
    }
    UpdateData(ctx3);
}
xhr.send();

}


const UpdateData = (ctx3) => {
    xhr.open('GET','https://canvasjs.com/services/data/datapoints.php',true)
    
    xhr.onload = function(){
        if(this.status === 200){
            data3 = JSON.parse(this.responseText);
            for(p = 0 ; p < data3.length ; p++ ){
               chart.data.datasets.push({x : data3[p][0], y : data3[p][1]})
                
            }
    }else {
        let canvasT3 = document.getElementById("firstHeading")
        canvasT3.insertAdjacentHTML('afterend', '<canvas id="graph3" width="400px" height="400px"></canvas>');
        document.getElementById("graph3").innerHTML="Error at load of data"
    }
    chart.update();
    setTimeout(function(){UpdateData(ctx3)}, 1000); 
}
xhr.send();
}

drawGraph();

