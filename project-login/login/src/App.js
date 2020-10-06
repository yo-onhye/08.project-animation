import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./common.scss";

class App extends Component {
	state = {
		aUserInfo: [],
		bIsLogin: false,
	};

	componentDidMount() {}

	render() {
		return (
			<div className="card-bx">
				<section className="card-item card-intro">
					<div className="card-inner">
						<h2 className="card-title">WELCOME</h2>
						<p className="card-desc">Welcome to the login page</p>
						<div className="btn-bx">
							<Link to="/components/join" className="btn btn-register">
								REGISTER
							</Link>
							<Link to="/components/login" className="btn btn-login">
								LOGIN
							</Link>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
