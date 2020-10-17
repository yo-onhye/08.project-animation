import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import "../../common.scss";

class Join extends Component {
	userNameInput = createRef();
	userIdInput = createRef();
	userPwInput = createRef();

	showCard = () => {
		document.body.style.backgroundPosition = "0 0";
	};

	componentDidMount() {
		this.showCard();
	}

	render() {
		const { userName, userId, userPw, aUserInfo, onChange } = this.props;
		return (
			<div className="card-bx">
				<section className="card-item card-join">
					<div className="card-inner">
						<h2 className="card-title">Create Account</h2>
						<p className="card-desc">
							Enter your personal details
							<br />
							please login with your email
						</p>
						<div className="inp-bx">
							<form>
								<div className="inp-item">
									<input type="text" value={userName} name="userName" onChange={onChange} ref={this.userNameInput} placeholder="Name" required="required" />
								</div>
								<div className="inp-item">
									<input type="text" value={userId} name="userId" onChange={onChange} ref={this.userIdInput} placeholder="Email" required="required" />
								</div>
								<div className="inp-item">
									<input type="password" value={userPw} name="userPw" onChange={onChange} ref={this.userPwInput} placeholder="Password" required="required" />
								</div>
								<button type="button" className="btn btn-join">
									REGISTER
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

export default Join;
