const covid = () => {
  const url = `https://disease.sh/v3/covid-19/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => result(data));
};
const result = (data) => {
  document.getElementById("cases").innerHTML = data.cases;
  document.getElementById("deaths").innerHTML = data.deaths;
  document.getElementById("recovered").innerHTML = data.recovered;
};
covid();

const covidCountry = () => {
  const countryName = document.getElementById("countryName").value;
  const country = `https://disease.sh/v3/covid-19/countries/${countryName}`;
  fetch(country)
    .then((resC) => resC.json())
    .then((data) => result(data));
};
const resultCountry = (dataC) => {
  document.getElementById("cases").innerHTML = dataC.cases;
  document.getElementById("deaths").innerHTML = dataC.deaths;
  document.getElementById("recovered").innerHTML = dataC.recovered;
};