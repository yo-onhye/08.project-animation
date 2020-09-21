window.onload = () => {
	const elTabList = document.querySelectorAll("._tab_bx li");
	const elTabBtn = document.querySelectorAll("._tab_btn");
	const elTabPannel = document.querySelectorAll("._tab_pannel");
	const elToggleList = document.querySelectorAll("._toggle_list > li");
	const elToggleBtn = document.querySelectorAll("._toggle_btn");
	const sActiveClass = "active";
	let nActiveTab = 0;

	for (let i in elTabBtn) {
		elTabBtn[i].onclick = () => {
			if (i !== nActiveTab) {
				// 이떄 i는 문자열이라 Number를 통해 정수형으로 변경
				nActiveTab = Number(i);
				controlTab();
			}
		};
	}

	for (let i in elToggleBtn) {
		elToggleBtn[i].onclick = () => {
			elToggleList[Number(i)].classList.toggle(sActiveClass);
		};
	}

	function controlTab() {
		for (let i = 0; i < elTabList.length; i++) {
			if (i === nActiveTab) {
				elTabList[i].classList.add(sActiveClass);
				elTabPannel[i].classList.add(sActiveClass);
			} else {
				elTabList[i].classList.remove(sActiveClass);
				elTabPannel[i].classList.remove(sActiveClass);
			}
		}
	}
};
