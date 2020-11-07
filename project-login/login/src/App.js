import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Intro from "./components/intro";
import Login from "./components/login";
import Join from "./components/join";
import Find from "./components/find";
import "./common.scss";

class App extends Component {
	state = {
		dataId: 1,
		aUserInfo: [
			{
				dataId: 0,
				useInfoName: "홍길동",
				useInfoId: "user111",
				useInfoPw: "user111!",
			},
		],
		userName: "",
		userId: "",
		userPw: "",
		signupName: "",
		signupId: "",
		signupPw: "",
		signupRepw: "",
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

		const { aUserInfo, signupName, signupId, signupPw, signupRepw } = this.state;

		if (signupName === "" || signupId === "" || signupPw === "" || signupRepw === "") {
			this.setState({
				vaildInfo: false,
				validText: '입력되지 않은 값이 있습니다. 확인해주세요.'
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
					useInfoName: signupName,
					useInfoId: signupId,
					useInfoPw: signupPw,
				}),
				vaildInfo: true,
				signupName: "",
				signupId: "",
				signupPw: "",
				signupRepw: "",
			});
			this.dataId++;
		}
	};

	componentDidMount() {}

	render() {
		const { aUserInfo, userName, userId, userPw, signupName, signupId, signupPw, signupRepw, vaildAccount, validText } = this.state;

		return (
			<Fragment>
				<Switch>
					<Route exact path="/" render={() => <Intro />} />
					<Route exact path="/login" render={() => <Login data={aUserInfo} userId={userId} userPw={userPw} vaildAccount={vaildAccount} validText={validText} onChange={this.handleChange} onCheckVaild={this.checkUserAccount} />} />
					<Route exact path="/join" render={() => <Join signupName={signupName} signupId={signupId} signupPw={signupPw} signupRepw={signupRepw} validText={validText} vaildAccount={vaildAccount} onChange={this.handleChange} onInsertInfo={this.handleUserInsert} />} />
					<Route exact path="/find" render={() => <Find data={aUserInfo} userName={userName} userId={userId} onChange={this.handleChange} />} />
					<Route render={() => <div className="projectError">404 NOT FOUND :(</div>} />
				</Switch>
			</Fragment>
		);
	}
}

export default App;
