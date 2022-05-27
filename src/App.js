import { useState, useEffect } from "react";
import "./App.css";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";
export default function App() {
	const [location, setLocation] = useState("Panevezys");
	const [currentData, setCurrentData] = useState({});
	const [forecastData, setForecastData] = useState({});
	const [isLoadings, setIsLoading] = useState(true);
	function onChangeHandler(event) {
		setLocation(event.target.value);
	}
	function keyDownHandler(event) {
		if (event.keyCode === 13) {
			getCurrent();
			setLocation("");
		}
	}
	//Use Effect to call once when page loads first time.
	useEffect(() => {
		getCurrent();
	}, []);
	//call OpenWeatherMap API for current weather and later get forecast data
	async function getCurrent() {
		const request = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=a4d4033128636d3896ae62c9330f834b&units=metric&lang=lt`
		);
		const current = await request.json();
		setCurrentData(current);
		const forecastRequest = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${current.coord.lat}&lon=${current.coord.lon}&exclude=current,minutely,hourly,alerts&appid=a4d4033128636d3896ae62c9330f834b&units=metric&lang=lt`
		);
		const forecastData = await forecastRequest.json();
		setForecastData(forecastData);
		setIsLoading(false);
		console.log(forecastData);
	}

	return (
		<div className="App" onKeyDown={keyDownHandler}>
			<input
				type="text"
				value={location}
				onChange={onChangeHandler}
				placeholder="Search location"
			></input>
			{isLoadings ? <p>Loading...</p> : <Current data={currentData} />}
			{isLoadings ? <p>Loading...</p> : <Forecast data={forecastData} />}
			<Footer />
		</div>
	);
}
