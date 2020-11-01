import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import "../../common.scss";

class Find extends Component {
	userNameInput = createRef();
	userIdInput = createRef();

	showCard = () => {
		document.body.style.backgroundPosition = "100% 50%";
	};

	componentDidMount() {
		this.showCard();
	}

	render() {
		const { vaildAccount, userId, userName, onChange, onCheckVaild } = this.props;
		return (
			<div className="card-bx">
				<section className="card-item card-find">
					<div className="card-inner">
						<h2 className="card-title">Find password</h2>
						<p className="card-desc">
							You can find your password
							<br />
							using your name & email
						</p>
						<div className="inp-bx">
							<div className="inp-item">
								<input type="password" id="userName" value={userName} name="userName" onChange={onChange} ref={this.userNameInput} placeholder="Name" required="required" />
							</div>
							<form onSubmit={onCheckVaild}>
								<div className="inp-item">
									<input type="text" id="userId" value={userId} name="userId" onChange={onChange} ref={this.userIdInput} placeholder="Email" required="required" />
								</div>
								<button type="submit" className="btn btn-find">
									Find
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

export default Find;
