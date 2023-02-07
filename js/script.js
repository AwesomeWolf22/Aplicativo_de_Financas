var chart = document.querySelectorAll('.daysOfWeek #day #chart');
var chartSpan = document.querySelectorAll('.daysOfWeek #day span').value;
var chartContainer = document.querySelector('.daysOfWeek');
var spanValue = document.querySelectorAll('.daysOfWeek #day span#value')

var moneyMonth = document.querySelector('span#moneyMonth');

var requestFinances = "js/data.json";
var request = new XMLHttpRequest();

request.open('GET',requestFinances);

request.responseType = 'json'
request.send();

request.onload = function(){
    console.log(request.response);

    var maior;
    var total = 0;

    for(var i = 0; i < request.response.length; i++){

        if(i == 0){
            maior = request.response[i].amount;
            day = i;
        }else if(request.response[i].amount > maior){
            maior = request.response[i].amount;
            day = i;
        }

        chart[i].style.height = `${request.response[i].amount*2.5}px`
        spanValue[i].innerHTML = '$'+request.response[i].amount;

        total += parseFloat(request.response[i].amount);

        console.log(total)

    }

    chart[day].classList.add('bigger');
    moneyMonth.innerHTML = "$"+total;

}

