// async onSearch(callback){
//     formElement.addEventListener("submit", event => {
//     console.log("clicked")
//     event.preventDefault();
//     this.getListResults(searchString, callback);
//   });


  // async getListResults() {
    

  //   await fetch(
     
  //   )
  //     .then(response => response.json())

  //     .then(async function(companyObjects) {
  //       await companyObjects.map(async function(item) {
  //         await fetch(
            
  //         )
  //           .then(response => response.json())
  //           .then(async function(data) {
  //             console.log(data);
  //             console.log(item);
  //             return await this.buildCompaniesList(data, item);           
  //           });
  //       });
  //     });
    
  // }






// let searchButton = document.getElementById("searchButton");
// if (searchButton) {
//   searchButton.addEventListener("click", getListResults); 
// }

// async function getListResults() {
//   turnSpinnerOn();
//   const searchInput = document.getElementById("listSearch");

//   await fetch(
//     `https://financialmodelingprep.com/api/v3/search?query=${searchInput.value}&limit=10&exchange=NASDAQ`
//   )
//     .then(response => response.json())
//     .then(async function(companyObjects) {
//       await companyObjects.map(async function(item) {
//         await fetch(
//           `https://financialmodelingprep.com/api/v3/company/profile/${item.symbol}`
//         )
//           .then(response => response.json())
//           .then(async function(data) {
//             buildCompaniesList(data, item);
//           });
//       });
//     });
// }

// turnSpinnerOn = () => {
//   document.getElementById("timer").classList.remove("invisible");
// };
// turnSpinnerOff = () => {
//   document.getElementById("timer").classList.add("invisible");
// };

// function buildCompaniesList(data, item) {
//   turnSpinnerOff();
//   let listItem = document.createElement("a");
//   listItem.href = `./company.html?symbol=${data.symbol}`;
//   listItem.classList.add("list-group-item");
//   document.getElementById("myList").appendChild(listItem);

//   let imgContainer = document.createElement("span");
//   let img = document.createElement("img");
//   img.classList.add("img");
//   img.src = data.profile.image;
//   imgContainer.appendChild(img);
//   listItem.appendChild(imgContainer);

//   let companyName = document.createElement("span");
//   companyName.innerText = item.name;
//   listItem.appendChild(companyName);
//   companyName.classList.add("company-name");

//   let companySymbol = document.createElement("span");
//   companySymbol.innerText = " (" + data.symbol + ")";
//   listItem.appendChild(companySymbol);
//   companySymbol.classList.add("company-symbol");

//   let companyPrice = document.createElement("span");
//   companyPrice.innerText = " " + data.profile.price + " ";
//   listItem.appendChild(companyPrice);
//   companyPrice.classList.add("color-green");

//   let companyChangePercentage = document.createElement("span");
//   companyChangePercentage.innerText = data.profile.changesPercentage;
//   listItem.appendChild(companyChangePercentage);
//   companyChangePercentage.classList.add("color-green");
//   let format = /-/;
//   if (format.test(data.profile.changesPercentage)) {
//     companyChangePercentage.classList.add("color-red");
//   }
// }
