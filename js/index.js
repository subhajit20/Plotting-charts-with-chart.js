import myJson from './food.json' assert {type: 'json'};

let fooddata = myJson.slice(0,5);

let array = []
let chartdata = {};


const rand1 = Math.random()*10;
const rand2 = Math.random()*23;
const rand3 = Math.random()*27;


for(let index = 0;index <= fooddata.length-1;index++){
    chartdata = {
        label:[fooddata[index]['item name']],
        data:[(index+rand1),(index+rand2),(index+rand3)],
    }
    array.push(chartdata)
}
// console.log(array)

const ctx1 = document.getElementById('myChart1');


/**
 * 
 * Label data
 */
let labelarr = [];
function getalllabeldata(){
    for(let index = 0;index <= fooddata.length-1;index++){
        labelarr.push(fooddata[index]['item name'])
    }

    return labelarr;
}
getalllabeldata()

new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: labelarr,
          datasets: array
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            },
            x:{
                beginAtZero:true
            }
          }
        }
      });