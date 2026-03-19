    const btn = document.querySelector(".btnSearch");
        const city = document.querySelector(".cityinput");
        btn.addEventListener("click", function() {
            console.log("Button clicked")
            console.log(city.value)
        const cityName = city.value
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=56f559f0f5f61d8872e37a1687a7cd76
&units=metric`)
            .then(response => response.json())
            .then(data => {
    if (data.cod != 200) {
        document.querySelector("#weather-result").innerHTML = "City not found!"

    } else {
    document.querySelector("#weather-result").innerHTML = 
    `${data.name} — ${data.main.temp}°C — ${data.weather[0].description}`
        }})
        });

        