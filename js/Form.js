class SearchForm {
  constructor(id, parent, searchButton, functionReceived) {
    this.id = id;
    this.parent = parent;
    this.searchButton = searchButton;
    this.company;
    this.functionReceived = functionReceived;

    this.onClick();
  }

  fetchData = (url) => {
    return fetch(url).then((resp) => resp.json());
  };

  async onClick() {
    this.searchButton.addEventListener("click", (event) => {
      console.log("clicked");
      event.preventDefault();
      this.getListResults();
    });
  }

  getListResults = async () => {
    this.turnSpinnerOn();
    let searchInput = document.getElementById("listSearch").value;
    this.searchInput = searchInput;
    let url = `https://financialmodelingprep.com/api/v3/search?query=${this.searchInput}&limit=10&exchange=NASDAQ`;
    let fetchData = await this.fetchData(url);

    let extendedCompanies = await Promise.all(
      fetchData.map(async (company) => {
        let url = `https://financialmodelingprep.com/api/v3/company/profile/${company.symbol}`;
        company = await this.fetchData(url);
        console.log(company);
        this.functionReceived(company);
        return company;
      })
    );

    this.companies = extendedCompanies;
    console.log(extendedCompanies);

    return extendedCompanies;
  };

  turnSpinnerOn = () => {
    document.getElementById("timer").classList.remove("invisible");
  };
  turnSpinnerOff = () => {
    document.getElementById("timer").classList.add("invisible");
  };
  substituteCover(company) {
    this.functionReceived(company);
  }
  highlightQuery(string) {
    const regex = new RegExp(this.searchInput, "i");
    return string.replace(regex, (match) => `<span class='highlight'>${match}</span>`);
  }
}
