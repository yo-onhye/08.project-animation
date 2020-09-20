window.onload = () => {
	const elTabList = document.querySelectorAll("._tab_bx li");
	const elTabBtn = document.querySelectorAll("._tab_btn");
	const elTabPannel = document.querySelectorAll("._tab_pannel");
	const sActiveClass = "active";
	let nActiveIndex = 0;

	for (let i in elTabBtn) {
		elTabBtn[i].onclick = () => {
			if (i !== nActiveIndex) {
				// 이떄 i는 문자열이라 Number를 통해 정수형으로 변경
				nActiveIndex = Number(i);
				controlTab();
			}
		};
	}

	function controlTab() {
		for (let i = 0; i < elTabList.length; i++) {
			if (i === nActiveIndex) {
				elTabList[i].classList.add(sActiveClass);
				elTabPannel[i].classList.add(sActiveClass);
			} else {
				elTabList[i].classList.remove(sActiveClass);
				elTabPannel[i].classList.remove(sActiveClass);
			}
		}
	}
};
