// 전역변수 사용을 회피하기 위해 즉시 실행 익명함수 생성
(() => {
	const actions = {
		birdFlies(key) {
			if (key) {
				document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`;
			} else {
				document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100px)`;
			}
		},
		birdFlies2(key) {
			if (key) {
				document.querySelector('[data-index="5"] .bird').style.transform = `translateX(${window.innerWidth}px) translateY(${-window.innerHeight * 0.7}px)`;
			} else {
				document.querySelector('[data-index="5"] .bird').style.transform = `translateX(-100px)`;
			}
		},
	};

	const stepElems = document.querySelectorAll(".step");
	const graphicElems = document.querySelectorAll(".graphic-item");
	let currentItem = graphicElems[0]; // 현재 활성화된(visible 클래스가 붙은) .graphic-item을 지정
	let ioIndex; // IntersectionObserver를 이용하여 불필요한 for문 탐색을 줄이기 위해 사용
	const io = new IntersectionObserver((entries, observer) => {
		ioIndex = entries[0].target.dataset.index * 1; // 출력값이 문자열이라 숫자로 바꾸기 위해 *1
	});

	// 아이템에 data-index 세팅
	for (let i = 0; i < stepElems.length; i++) {
		io.observe(stepElems[i]);
		stepElems[i].dataset.index = i;
		graphicElems[i].dataset.index = i;
	}

	function activate(action) {
		currentItem.classList.add("visible");
		if (action) {
			actions[action](true);
		}
	}

	function inactivate(action) {
		currentItem.classList.remove("visible");
		if (action) {
			actions[action](false);
		}
	}

	// scroll event
	window.addEventListener("scroll", () => {
		let step;
		let boundingRect;

		for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
			step = stepElems[i];
			if (!step) continue;

			boundingRect = step.getBoundingClientRect();

			if (boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8) {
				inactivate();
				currentItem = graphicElems[step.dataset.index];
				activate(currentItem.dataset.action);
			}
		}
	});

	window.addEventListener("load", () => {
		setTimeout(() => scrollTo(0, 0), 100);
	});

	activate();
})();
