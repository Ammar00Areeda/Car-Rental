/* eslint-disable no-unused-vars */
'use strict';
let formEl = document.getElementById('form')
let container = document.getElementById('container')


let carOradrs = []


function saveToLocalstorage(){
    let data = JSON.stringify(carOradrs);
    localStorage.setItem('car',data)

}
function getFromLocal(){
    let stringObj = localStorage.getItem('car');
    let normalObj = JSON.parse(stringObj);

    if(normalObj){
        carOradrs == normalObj
        
        //render fucntion

    }

}
getFromLocal();




function Cars (customerName,carModel){
    this.customerName=customerName;
    this.carModel=carModel;
    carOradrs.push(this);
    
}
Cars.prototype.randNum = function(min, max){
    min = Math.ceil(1);
    max = Math.floor(10000);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
function ordar(event){
    event.preventDefault();
    let custName = event.target.custName.value;
    let carModel = event.target.carModel.value;

    let newObject = new Cars (custName,carModel);
    saveToLocalstorage();

    console.log(carOradrs)
}
formEl.addEventListener('submit',ordar);

Cars.prototype.render = function(){

    let trEl = document.createElement('tr')
    container.appendChild(trEl)

    let thEl = document.createElement('th')
    trEl.appendChild(thEl)
    thEl.textContent = "ordar image"
    let thEl2 = document.createElement('th')
    trEl.appendChild(thEl2)
    thEl2.textContent = "ordar details"
}
Cars.prototype.rnderNewRow = function(){
    for(let i = 0;i<carOradrs.length;i++){
        let trEl = document.createElement('tr')
    container.appendChild(trEl)

    let thEl = document.createElement('th')
    trEl.appendChild(thEl)
    thEl.textContent = carOradrs[i];
    }
}



 
    

