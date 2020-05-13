

let urlParams = new URLSearchParams(window.location.search);
let companySymbol = urlParams.get('symbol');
     
getCompanyInfo ();

function getCompanyInfo() {

fetch(`https://financialmodelingprep.com/api/v3/company/profile/${companySymbol}`)
.then(response => 
  response.json())
 .then(function(data) {
     //destructuring 
   let {image, companyName, industry, price, changesPercentage, description} = data.profile
   let logoLine = document.createElement("div"); //create line
   logoLine.classList.add("col-12");
   let img = document.createElement("img");
   img.classList.add("img");
   img.src = image;
   let fragment2 = document.createElement("div");
   fragment2.classList.add("display"); 
   fragment2.innerText = companyName;
   let fragment3 = document.createElement("div");
   fragment3.classList.add("display"); 
   fragment3.innerText = "(" +industry+")";
   document.getElementById("logoName").appendChild(logoLine);
   logoLine.append(img, fragment2, fragment3);
 

   let priceLine = document.createElement("div"); //create line
   priceLine.classList.add("col-12");

   let stockPrice = document.createElement("div");
   stockPrice.classList.add("stockPrice");
   stockPrice.innerHTML = "Stock price:";

   let stockPriceNow = document.createElement("div");
   stockPriceNow.classList.add("stockPrice"); 
   stockPriceNow.innerText = "$ " +price;
  
   let stockPriceChange = document.createElement("div");
    stockPriceChange.classList.add("stockPrice"); 
    
    if (changesPercentage < 0) { stockPriceChange.classList.add("color-red");   
     }
    stockPriceChange.classList.add("color-green");
    stockPriceChange.innerHTML = changesPercentage;

    
    document.getElementById("stockPrice").appendChild(priceLine);
   priceLine.append(stockPrice, stockPriceNow, stockPriceChange);

   let companyInfo = document.createElement("div"); //create line
   companyInfo.classList.add("col-12");
   companyInfo.classList.add("description");
   companyInfo.innerText = description;
   document.getElementById("companyInfo").appendChild(companyInfo);

})
};

getCompanyHistoricalPrice ();

function getCompanyHistoricalPrice() {

fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${companySymbol}?from=2018-03-12&to=2019-03-12`)
.then(response => 
  response.json())
 .then(function(data) {
  let xLine = [];
  let yLine = [];
  for (let i=0; i<200; i++) {
//  let x = new Date(data.historical[i].date).getDay();
//   console.log(x);
//  if (x=1) {
//     xLine.filter(xLine.push(data.historical[i].date));
//     console.log(xLine);
// }
  xLine.push(data.historical[i].date);
  yLine.push(data.historical[i].close);
  
  }
  
   let ctx = document.getElementById('myChart');
   let myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: xLine,
        datasets: [{
            label: 'Stock Price History',
            data: yLine,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                   
                }
            }]
        }
    }
}
);


;})}




