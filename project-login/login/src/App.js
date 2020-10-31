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
		vaildAccount: true,
		vaildInfo: false,
		validText: '',
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
			const userData = aUserInfo.find((userData) => userData.useInforId === userId && userData.useInforPw === userPw);

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

	handleUserInsert = (e) => {
		e.preventDefault();

		const { aUserInfo, signupId, signupPw, signupRepw, signupName } = this.state;

		if (signupId === "" || signupPw === "" || signupRepw === "" || signupName === "") {
			this.setState({
				vaildInfo: false,
				validText: '입력되지 않은 값이 있습니다. 확인해주세요.'
			});
		} else if (signupId.length < 5) {
			this.setState({
				vaildInfo: false,
				validText: '아이디는 6자 이상이어야 합니다.'
			});
		} else if (signupPw.length < 7) {
			this.setState({
				vaildInfo: false,
				validText: '비밀번호는 8자 이상이어야 합니다.'
			});
		} else if (signupPw !== signupRepw) {
			this.setState({
				vaildInfo: false,
				validText: '비밀번호가 일치하지 않습니다.'
			});
		} else {
			this.setState({
				aUserInfo: aUserInfo.concat({
					dataId: this.dataId,
					userDataId: signupId,
					userDataPw: signupPw,
					userDataName: signupName,
					channelDatas: "",
				}),
				vaildInfo: true,
				signupId: "",
				signupPw: "",
				signupRepw: "",
				signupName: "",
			});
			this.dataId++;
		}
	};

	componentDidMount() {}

	render() {
		const { aUserInfo, userName, userId, userPw, vaildAccount, validText, bIsLogin } = this.state;

		return (
			<Fragment>
				<Switch>
					<Route exact path="/" render={() => <Intro />} />
					<Route exact path="/login" render={() => <Login data={aUserInfo} userId={userId} userPw={userPw} vaildAccount={vaildAccount} validText={validText} onChange={this.handleChange} onCheckVaild={this.checkUserAccount} />} />
					<Route exact path="/join" render={() => <Join data={aUserInfo} userName={userName} userId={userId} userPw={userPw} onChange={this.handleChange} />} />
					<Route render={() => <div className="projectError">404 NOT FOUND :(</div>} />
				</Switch>
			</Fragment>
		);
	}
}

export default App;
