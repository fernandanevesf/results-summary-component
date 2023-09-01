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

    for( const el of elements){
        img.src = `${el.icon}`
        category.textContent = `${el.category}`;
        score.textContent = `${el.score}`;
    }
    
}

getData();
