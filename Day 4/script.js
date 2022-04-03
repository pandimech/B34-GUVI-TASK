// XMLHttpRequest

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            var restcountry = JSON.parse(this.responseText)
            for (var i in restcountry) {
                console.log(restcountry[i].flag)
                console.log(restcountry[i].name, restcountry[i].region, restcountry[i].subregion, restcountry[i].population)
            }
        } else {
            console.log("Cannot Connect to Server")
        }
    }
}

http.open("GET", "https://restcountries.com/v3.1/all");
http.send();