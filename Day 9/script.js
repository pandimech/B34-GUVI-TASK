var http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            var restcountry = JSON.parse(this.responseText)
                // a. Get all the countries from Asia continent /region using Filter function

            var AsiaCountry = restcountry.filter(({ region }) => region == "Asia").map(({ name: { common }, region }) => `NAME: ${common} REGION: ${region}`)
            console.log(AsiaCountry);

            // b.Get all the countries with a population of less than 2 lakhs using Filter function

            var less_2_laks_Population_country = restcountry.filter(ele => ele.population <= 200000).map(({ name: { common }, population }) => `NAME: ${common} REGION: ${population}`)
            console.log(less_2_laks_Population_country);

            // c.Print the following details name, capital, flag using forEach function

            restcountry.forEach(({ name: { common }, capital, flag }) => console.log(`NAME: ${common} CAPITAL: ${capital} FLAG: ${flag}`));

            // d.Print the total population of countries using reduce function

            const TotalPopulation = restcountry.reduce((acc, { population }) => { acc = acc + population; return acc }, 0);
            console.log(TotalPopulation)

            // f.Print the country which uses US Dollars as currency.

            const USDollarsCountry = restcountry.filter(ele => ele.currencies.USD.symbol == "$").map(({ name: { common }, currencies: { UYU: { name, symbol } } }) => `NAME: ${common} CURName: ${name} ${symbol}`)
            console.log(USDollarsCountry)

        } else {
            console.log("Cannot Connect the Server")
        }


    }
}

http.open("GET", "https://restcountries.com/v3.1/all");
http.send();