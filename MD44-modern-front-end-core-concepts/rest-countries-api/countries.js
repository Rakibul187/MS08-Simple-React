const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
    // console.log(countries[0])
    const countriesHTML = countries.map(country => getcountryHTML(country))
    // console.log(countriesHTML[0])
    const container = document.getElementById('countries')
    container.innerHTML = countriesHTML.join(' ');
}
const getcountryHTML = country => {
    console.log(country.flags.png)
    return `
    <div class="country">
         <h2>${country.name.common}</h2>
         <img src="${country.flags.png}">
    </div>
    `
}
