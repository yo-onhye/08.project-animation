import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Intro from "./components/intro";
import Login from "./components/login";
import Join from "./components/join";
import "./common.scss";

class App extends Component {
	state = {
		aUserInfo: [
			{
				dataId: 0,
				useInforName: "홍길동",
				useInforId: "user111",
				useInforPw: "user111!",
			},
		],
		userName: "",
		userId: "",
		userPw: "",
		bIsLogin: false,
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};

	checkUserAccount = (e) => {
		e.preventDefault();

		const { aUserInfo, userId, userPw } = this.state;
		if (userId !== "" && userPw !== "") {
			const userData = aUserInfo.find((userData) => userData.userDataId === userId && userData.userDataPw === userPw);

			if (userData === undefined) {
				this.setState({
					vaildAccount: false,
				});
			} else {
				this.setState({
					loginId: userId,
					userDatas: aUserInfo.filter((userData) => userData.userDataId === userId),
					vaildAccount: true,
				});
			}
			return userData;
		} else {
			this.setState({
				vaildAccount: false,
			});
		}
	};

	componentDidMount() {}

	render() {
		const { aUserInfo, userName, userId, userPw, bIsLogin } = this.state;

		return (
			<Fragment>
				<Switch>
					<Route exact path="/" render={() => <Intro />} />
					<Route exact path="/login" render={() => <Login data={aUserInfo} userId={userId} userPw={userPw} onChange={this.handleChange} />} />
					<Route exact path="/join" render={() => <Join data={aUserInfo} userName={userName} userId={userId} userPw={userPw} onChange={this.handleChange} />} />
					<Route render={() => <div className="projectError">404 NOT FOUND :(</div>} />
				</Switch>
			</Fragment>
		);
	}
}

export default App;
