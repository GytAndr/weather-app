import "../styles/Current.css";
export default function Current(props) {
	return (
		<section className="current">
			<p className="current--city">
				{props.data.name}, {props.data.sys.country}
			</p>
			<p className="current--description">
				{props.data.weather[0].description}
			</p>
			<img
				className="current--icon"
				src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
				alt={props.data.weather[0].description}
				title={props.data.weather[0].description}
			/>
			<p className="current--temp">
				{props.data.main.temp.toFixed(0)}
				<sup id="current--degrees">&deg;C</sup>
			</p>
		</section>
	);
}
