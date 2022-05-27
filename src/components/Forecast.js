export default function Forecast(props) {
	const unixTimeStamp = props.data.daily[0].dt;
	const dateString = new Date(unixTimeStamp * 1000).toLocaleDateString();
	return (
		<section className="forecast">
			<p>Rytoj</p>
			<p>{props.data.daily[0].temp.day.toFixed(0)}</p>
			<p>{dateString}</p>
		</section>
	);
}
