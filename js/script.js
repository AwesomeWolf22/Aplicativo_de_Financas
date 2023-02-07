import data from './data.json' assert{type: 'json'};

let wrapGraphic = document.querySelector('.chart');

let values = [];

data.forEach(element => {
    values.push(element.amount)
    wrapGraphic.innerHTML += `
    <div id="day">
        <div id="value">$${element.amount}</div>
        <div class="chart__bar--day">${element.day}</div>
    </div>`
});

let alturaMax = 200;
let maxValue = Math.max(...values);

     /*

        52.36 -> 200px
        17.45  x

        x = ( 17.45 * 200px ) / 52.36
        x = ( nuevo valor * 200px ) / 52.36
        */
let bars = document.querySelectorAll('#day');
bars = [...bars]

bars.forEach(bar => {

    let nuevoValor = parseFloat(bar.childNodes[1].innerText.slice(1));
    
    let alturaActual = (nuevoValor * alturaMax) / maxValue

    bar.style.height = `${alturaActual}px`

    // Pintar la barra mas grande de Cyan
    if(nuevoValor == maxValue){
        bar.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }


    bar.addEventListener('mouseover', event=>{
        if(event.target.className == 'chart__bar'){
            let cashElement = event.target.childNodes[1];
            cashElement.style.display = 'block';
        }
    });
    bar.addEventListener('mouseout', event=>{
        if(event.target.className == 'chart__bar'){
            let cashElement = event.target.childNodes[1];
            cashElement.style.display = 'none';
        }
    });
});


// var chart = document.querySelectorAll('.daysOfWeek #day #chart');
// var chartSpan = document.querySelectorAll('.daysOfWeek #day span').value;
// var chartContainer = document.querySelector('.daysOfWeek');
// var spanValue = document.querySelectorAll('.daysOfWeek #day span#value')

// var moneyMonth = document.querySelector('span#moneyMonth');


// var request = new XMLHttpRequest();

// request.open('GET',requestFinances);

// request.responseType = 'json'
// request.send();

// request.onload = function(){
//     console.log(request.response);

//     var maior;
//     var total = 0;

//     for(var i = 0; i < request.response.length; i++){

//         if(i == 0){
//             maior = request.response[i].amount;
//             day = i;
//         }else if(request.response[i].amount > maior){
//             maior = request.response[i].amount;
//             day = i;
//         }

//         chart[i].style.height = `${request.response[i].amount*2.5}px`
//         spanValue[i].innerHTML = '$'+request.response[i].amount;

//         total += parseFloat(request.response[i].amount);

//         console.log(total)

//     }

//     chart[day].classList.add('bigger');
//     moneyMonth.innerHTML = "$"+total;

// }

