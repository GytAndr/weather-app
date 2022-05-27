import "../styles/Footer.css";
import github from "../images/Github.png";
export default function Footer() {
	return (
		<footer>
			<p id="footer">
				Copyright 2022 &copy;{" "}
				<a className="footer--gh-adress" href="https://github.com/GytAndr">
					GytAndr <img id="footer--logo" src={github} />
				</a>
			</p>
		</footer>
	);
}
