import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import "../../common.scss";

class Join extends Component {
	signupNameInput = createRef();
	signupIdInput = createRef();
	signupPwInput = createRef();
	signupRepwInput = createRef();

	showCard = () => {
		document.body.style.backgroundPosition = "0 0";
	};

	componentDidMount() {
		this.showCard();
	}

	render() {
		const { signupName, signupId, signupPw, signupRepw, onChange, onInsertInfo, vaildAccount, validText } = this.props;
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
							<form onSubmit={onInsertInfo}>
								<div className="inp-item">
									<input type="text" value={signupName} name="signupName" onChange={onChange} ref={this.signupNameInput} placeholder="Name" required="required" />
								</div>
								<div className="inp-item">
									<input type="text" value={signupId} name="signupId" onChange={onChange} ref={this.signupIdInput} placeholder="Email" required="required" />
								</div>
								<div className="inp-item">
									<input type="password" value={signupPw} name="signupPw" onChange={onChange} ref={this.signupPwInput} placeholder="Password" required="required" />
								</div>
								<div className="inp-item">
									<input type="password" value={signupRepw} name="signupRepw" onChange={onChange} ref={this.signupRepwInput} placeholder="Password" required="required" />
								</div>
								<span className="projectInvaildText">{validText}</span>
								<button type="submit" className="btn btn-join">
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
