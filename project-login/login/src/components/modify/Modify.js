import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import "../../common.scss";

class Modify extends Component {
	userNameInput = createRef();
	userIdInput = createRef();

	showCard = () => {
		document.body.style.backgroundPosition = "0 0";
	};

	componentDidMount() {
		this.showCard();
	}

	render() {
		const { userId, userName, userPw, userRepw, onChange, onCheckVaild } = this.props;
		return (
			<div className="card-bx">
				<section className="card-item card-modify">
					<div className="card-inner">
						<h2 className="card-title">Modify Information</h2>
						<p className="card-desc">
							You can modify your account
						</p>
						<div className="inp-bx">
							<form onSubmit={onCheckVaild}>
								<div className="inp-item">
									<input type="password" id="userName" value={userName} name="userName" onChange={onChange} ref={this.userNameInput} placeholder="Name" required="required" />
								</div>
								<div className="inp-item">
									<input type="text" id="userId" value={userId} name="userId" onChange={onChange} ref={this.userIdInput} placeholder="Email" required="required" />
								</div>
								<div className="inp-item">
									<input type="password" value={userPw} name="userPw" onChange={onChange} ref={this.userPwInput} placeholder="Password" required="required" />
								</div>
								<div className="inp-item">
									<input type="password" value={userRepw} name="userRepw" onChange={onChange} ref={this.userRepwInput} placeholder="Password" required="required" />
								</div>
								<button type="submit" className="btn btn-modify">
									Modify
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

export default Modify;
