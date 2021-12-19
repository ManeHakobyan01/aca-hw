let countries = []
let ul = document.getElementById("ul")
const div = document.getElementById("CountryPage")
let curentPage = window.location.pathname
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const currentSelectedCountry = params.country


if(currentSelectedCountry !== undefined) {
  document.getElementById("allCountriesPage").style.display = "none"
}

async function allCountries(){
  let url = 'https://restcountries.com/v3.1/all';
  try {
      let res = await fetch(url);
      countries = await res.json()
      let countryNamesOf = countries.map(country => country.name.official)
      let imgUrls = countries.map(country => country.flags.png)
      let countryNames = countries.map(country => country.name.common)
      let countryPopulation = countries.map(country => country.population)
      let countryIndependenceStatus = countries.map(country => country.independent)
      let countryUnMember = countries.map(country => country.unMember)
      let countryCapital = countries.map(country => country.capital)
      let countryRegion = countries.map(country => country.region)
      if(currentSelectedCountry) {
        let ind = countryNamesOf.indexOf(currentSelectedCountry)

        let h = document.createElement("h1") 
        h.innerText += currentSelectedCountry
        div.appendChild(h)
        div.appendChild(document.createElement("br"));
        
        let imgUrl = imgUrls[ind]
        let img = new Image();
        img.src = imgUrl
        div.appendChild(img);
        
        let pCommon = document.createElement("p")
        pCommon.innerText += `Common name - ${countryNames[ind]}`
        div.appendChild(pCommon)
        div.appendChild(document.createElement("br")); 

        let pCapital = document.createElement("p")
        pCapital.innerText += `Capital City - ${countryCapital[ind]}`
        div.appendChild(pCapital)
        div.appendChild(document.createElement("br")); 

        let pRegion = document.createElement("p")
        pRegion.innerText += `Capital City - ${countryRegion[ind]}`
        div.appendChild(pRegion)
        div.appendChild(document.createElement("br")); 

        let pStatus = document.createElement("p")
        if(countryIndependenceStatus[ind] === true) {
          pStatus.innerText += `Status - Independent`
        } else {
          pStatus.innerText += `Status - Controlled`
        }
        div.appendChild(pStatus)
        div.appendChild(document.createElement("br"));

        let pMember = document.createElement("p")
        if(countryUnMember[ind] === true) {
          pMember.innerText += `Has Unated Nations Membership`
          div.appendChild(pMember)
          div.appendChild(document.createElement("br"));
        } 

        let pPopulation = document.createElement("p")
        pPopulation.innerText += `Population - ${countryPopulation[ind]}`
        div.appendChild(pPopulation)
        div.appendChild(document.createElement("br")); 
      }

      for(let elem of countryNamesOf) {
        let li = document.createElement('li')
        let a = document.createElement('a')
        li.setAttribute("class", "names")
        a.setAttribute("href", `?country=${elem}`)
        a.innerText += elem
        ul.appendChild(li)
        li.appendChild(a)

      }

      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

allCountries()





function searchCountry() {
  let input = document.getElementById("searchbar").value
  console.log(input)
  input = input.toLowerCase();
  let x = document.getElementsByClassName('names');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}





