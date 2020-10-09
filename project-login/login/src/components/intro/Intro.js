import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../common.scss";

class Intro extends Component {
	showCard = () => {
		document.body.style.backgroundPosition = "50% 50%";
	};

	componentDidMount() {
		this.showCard();
	}

	render() {
		return (
			<div className="card-bx">
				<section className="card-item card-intro">
					<div className="card-inner">
						<h2 className="card-title">WELCOME</h2>
						<p className="card-desc">Welcome to the login page</p>
						<div className="btn-bx">
							<Link to="/join" className="btn btn-register">
								REGISTER
							</Link>
							<Link to="/login" className="btn btn-login">
								LOGIN
							</Link>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Intro;
