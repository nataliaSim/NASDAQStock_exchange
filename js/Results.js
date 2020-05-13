


class Results {
         
    buildCompaniesList (company) {
        console.log(company)
       this.turnSpinnerOff();
       let listItem = document.createElement("a");
       listItem.href = `./company.html?symbol=${company.symbol}`;
       listItem.classList.add("list-group-item");
       document.getElementById("myList").appendChild(listItem);
   
       let imgContainer = document.createElement("span");
       let img = document.createElement("img");
       img.classList.add("img");
       img.src = company.profile.image;
       imgContainer.appendChild(img);
       listItem.appendChild(imgContainer);
   
       let companyName = document.createElement("span");
       companyName.innerHTML =`${this.highlightQuery(company.profile.companyName)}`
       listItem.appendChild(companyName);
       companyName.classList.add("company-name");
   
       let companySymbol = document.createElement("span");
       companySymbol.innerHTML = `${this.highlightQuery(" (" + company.symbol + ")")}`;
       listItem.appendChild(companySymbol);
       companySymbol.classList.add("company-symbol");
   
       let companyPrice = document.createElement("span");
       companyPrice.innerText = " " + company.profile.price + " ";
       listItem.appendChild(companyPrice);
       companyPrice.classList.add("color-green");
   
       let companyChangePercentage = document.createElement("span");
       companyChangePercentage.innerText = company.profile.changesPercentage;
       listItem.appendChild(companyChangePercentage);
       companyChangePercentage.classList.add("color-green");
   
       let character = company.profile.changesPercentage.charAt(1);
   
       if ((character = /-/)) {
         companyChangePercentage.classList.add("color-red");
       }
       
     
   };
}

