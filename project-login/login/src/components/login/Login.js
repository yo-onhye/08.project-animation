import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import "../../common.scss";

class Login extends Component {
	userIdInput = createRef();
	userPwInput = createRef();

	showCard = () => {
		document.body.style.backgroundPosition = "100% 50%";
	};

	componentDidMount() {
		this.showCard();
	}

	render() {
		const { vaildAccount, validText, userId, userPw, onChange, onCheckVaild } = this.props;
		return (
			<div className="card-bx">
				<section className="card-item card-login">
					<div className="card-inner">
						<h2 className="card-title">Welcome Back!</h2>
						<p className="card-desc">
							To keep connected with us
							<br />
							please login with your account
						</p>
						<div className="inp-bx">
							<form onSubmit={onCheckVaild} noValidate>
								<div className="inp-item">
									<input type="text" id="userId" value={userId} name="userId" onChange={onChange} ref={this.userIdInput} placeholder="Email" required="required" />
								</div>
								<div className="inp-item">
									<input type="password" id="userPw" value={userPw} name="userPw" onChange={onChange} ref={this.userPwInput} placeholder="Password" required="required" />
								</div>
								<span className="projectInvaildText">{validText}</span>
								<button type="submit" className="btn btn-login">
									LOGIN
								</button>
							</form>
						</div>
					</div>
					<Link to="/" className="btn btn-back">
						<span className="blind">이전 페이지</span>
					</Link>
				</section>
			</div>
		);
	}
}

export default Login;
