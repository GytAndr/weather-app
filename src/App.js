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
		getWeatherData();
	}, []);
	//call OpenWeatherMap API for current weather
	async function getCurrent() {
		const request = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=a4d4033128636d3896ae62c9330f834b&units=metric&lang=lt`
		);
		const current = await request.json();
		setCurrentData(current);
	}
	// //call OpenWeatherMap API forecast for 5 days
	async function getWeatherData() {
		const request = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts&APPID=a4d4033128636d3896ae62c9330f834b&units=metric&lang=lt`
		);
		const forecast = await request.json();
		setForecastData(forecast);
		setIsLoading(false);
		console.log(forecast);
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
