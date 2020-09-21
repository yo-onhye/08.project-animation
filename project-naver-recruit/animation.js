window.onload = () => {
	const elTabItem = document.querySelectorAll("._tab_list > li");
	const elTabBtn = document.querySelectorAll("._tab_btn");
	const elTabPannel = document.querySelectorAll("._tab_pannel");
	const elToggleItem = document.querySelectorAll("._toggle_list > li");
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
			elToggleItem[Number(i)].classList.toggle(sActiveClass);
		};
	}

	function controlTab() {
		for (let i = 0; i < elTabItem.length; i++) {
			if (i === nActiveTab) {
				elTabItem[i].classList.add(sActiveClass);
				elTabPannel[i].classList.add(sActiveClass);
			} else {
				elTabItem[i].classList.remove(sActiveClass);
				elTabPannel[i].classList.remove(sActiveClass);
			}
		}
	}
};
