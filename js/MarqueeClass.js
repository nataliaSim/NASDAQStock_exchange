class Marquee {
  
  constructor(id, parent) {
    this.id = id; // stockPriceMarquee
    this.parent = parent; // marqueeParent
    this.url = `https://financialmodelingprep.com/api/v3/stock/real-time-price`;

    this.load()
  }

  async load() {
    let marqueeResult = await this.fetchData();
    await marqueeResult.map(item => {
    this.createMarquee(item);
  })
  }

  createMarquee(item) {
    let stockInfoWrapper = document.createElement("span");
    stockInfoWrapper.classList.add("stockInfoWrapper");
    this.parent.appendChild(stockInfoWrapper);

    let stockSymbol = document.createElement("span");
    stockSymbol.classList.add("stockSymbol");
    stockInfoWrapper.appendChild(stockSymbol);
    stockSymbol.innerText = item.symbol; //

    let stockPrice = document.createElement("span");
    stockPrice.classList.add("stockPrice");
    stockInfoWrapper.appendChild(stockPrice);
    stockPrice.innerText = " $" + item.price; //
  }

  async fetchData() {
    let res = await fetch(`${this.url}`)
    let resJson = await res.json()
    return resJson.stockList.slice(0, 70)
  }
}


