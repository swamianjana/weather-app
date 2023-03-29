const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '809f089bd1msh8f4a1644f5bf72ep186b6bjsna8bb0efc1f5e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

	const getWeather = (city) => {

	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {

			if(response.message) {
				alert(response.message);
			}
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})

		.catch(err => {console.error(err);	
		});

}

submit.addEventListener("click", (e) => {
	e.preventDefault()				// ese use krene se ye page ko reload nhi krrrga
	getWeather(city.value)

})

getWeather("Sikar")