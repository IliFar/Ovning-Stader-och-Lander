fetch("land.json")
.then(land => land.json())
.then(land => {

    console.log(land);

    let country1 = document.getElementById("country1");
    let country2 = document.getElementById("country2");
    let country3 = document.getElementById("country3");

    country1.textContent = land[0].countryname;
    country2.textContent = land[1].countryname;
    country3.textContent = land[2].countryname;

});

fetch("stad.json")
.then (stad => stad.json())
.then( stad => {
    console.log(stad);
    // country1.insertAdjacentHTML("afterend", "<ul><li>Wow</li></ul>")
    stad.sort((a, b) => {return a.population - b.population});

    for (let i = 0; i < stad.length; i++) {
        
        if (stad[i].countryid == 1) {
            country1.insertAdjacentHTML("afterend", "<ul><li>" + stad[i].stadname + "</li></ul>")
        }
        else if (stad[i].countryid == 2) {
            country2.insertAdjacentHTML("afterend", "<ul><li>" + stad[i].stadname + "</li></ul>")
        }
        else if (stad[i].countryid == 3) {
            country3.insertAdjacentHTML("afterend", "<ul><li>" + stad[i].stadname + "</li></ul>")
        }  
    } 
})



