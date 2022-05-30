import "../styles/Forecast.css";
export default function Forecast(props) {
	const unixTimeStamp = props.data.daily[1].dt;
	const dateString = new Date(unixTimeStamp * 1000).toLocaleDateString();
	const daysArray = props.data.daily.slice(2).map((day) => {
		return (
			<li key={day.dt} className="forecast--day">
				<p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
				<p className="forecast--deg">{day.temp.day.toFixed(0)}&deg;</p>
				<img
					className="forecast--day-img"
					src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
					title={day.weather[0].description}
				/>
			</li>
		);
	});
	return (
		<section className="forecast">
			<div className="forecast--tomorrow">
				<p>Rytoj &nbsp;{dateString}</p>
				<p>
					{props.data.daily[0].temp.day.toFixed(0)}&deg;&nbsp;
					{props.data.daily[0].weather[0].description}
					<img
						className="forecast--day-img"
						src={`https://openweathermap.org/img/wn/${props.data.daily[0].weather[0].icon}@2x.png`}
						title={props.data.daily[0].weather[0].description}
					/>
				</p>
			</div>
			<div className="forecast--threedays">
				<ul className="forecast--daysArray">{daysArray}</ul>
			</div>
		</section>
	);
}
