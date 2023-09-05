'use strict'

async function getData(){
    const requestURL = "/js/data.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const summaryEl= await response.json();

    fillSummary(summaryEl);
}

function fillSummary(obj){
    const elements = obj.summary;

    const img = document.querySelectorAll("img");
    const category = document.querySelectorAll(".category");
    const score = document.querySelectorAll(".score");

    for (let i = 0; i < elements.length; ++i) {
        img[i].src = `${elements[i].icon}`;
      }

    for (let i = 0; i < elements.length; ++i) {
        category[i].textContent = `${elements[i].category}`;
      }

    for (let i = 0; i < elements.length; ++i) {
        score[i].textContent = `${elements[i].score}`;
      }
    
}

getData();
