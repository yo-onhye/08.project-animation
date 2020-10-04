window.onload = () => {
	const elBody = document.body;
	const elHeaderSec = document.querySelector(".header");
	const elNavSec = document.querySelector(".nav");
	const elNavLink = document.querySelectorAll(".nav_link");
	const elIntroSec = document.querySelector(".portfolio_intro");
	const elMainSec = document.querySelector(".portfolio_main");
	const elItemSec = elMainSec.querySelectorAll(".portfolio_item");
	const elHomeBtn = document.querySelector(".home_btn");
	const elIntroBtn = document.querySelector(".intro_btn");
	const elImgBtn = elMainSec.querySelectorAll(".img_btn");
	const elBackBtn = elMainSec.querySelector(".back_btn");
	const nLen = elItemSec.length;
	let offs;
	let nActiveIndex = "";
	let nScroll = 0;
	let base = -170;
	let isMainShow = false;
	let enableClick = true;
	let isSetPos = false;

	setPos = () => {
		offs = [];
		elItemSec.forEach((item, index) => {
			offs.push(item.offsetTop + base);
		});
		offs.push(elItemSec[nLen - 1].offsetTop + elItemSec[nLen - 1].offsetHeight);
	};

	elHomeBtn.addEventListener("click", () => {
		if (!elHeaderSec.classList.contains("ty_white")) {
			enterMain();
		}
	});

	elIntroBtn.addEventListener("click", () => {
		enterMain();
	});

	setTimeout(function () {
		isMainShow = true;
	}, 2500);

	for (let i = 0; i < nLen; i++) {
		if (isSetPos) {
			elNavLink[i].onclick = () => {
				if (enableClick) {
					if (offs[i] > nScroll) {
						timer = setInterval(() => {
							scrollDown(offs[i]);
						}, 5);
					} else if (offs[i] < nScroll) {
						timer = setInterval(() => {
							scrollUp(offs[i]);
						}, 5);
					} else {
						return;
					}
					enableClick = false;
				}
			};
		}
	}

	activation = (nScroll) => {
		if (isSetPos) {
			elNavLink.forEach((item, index) => {
				elNavLink[index].querySelector("a").style.fontSize = "inherit";
				elNavLink[index].querySelector("a").style.borderBottom = "none";
				if (nScroll >= offs[index] && nScroll < offs[index + 1]) {
					elNavLink[index].querySelector("a").style.fontSize = "20px";
					elNavLink[index].querySelector("a").style.borderBottom = "2px solid #07101d";
				}
			});
		}
	};

	scrollUp = (target_pos) => {
		if (nScroll < target_pos) {
			nScroll = target_pos;
			clearInterval(timer);
			enableClick = true;
		} else {
			nScroll -= 10;
		}
		window.scroll(0, nScroll);
	};

	scrollDown = (target_pos) => {
		if (nScroll > target_pos) {
			nScroll = target_pos;
			clearInterval(timer);
			enableClick = true;
		} else {
			nScroll += 10;
		}
		window.scroll(0, nScroll);
	};

	for (let i in elImgBtn) {
		elImgBtn[i].onclick = () => {
			nActiveIndex = Number(i);
			intoDetail(i);
		};
	}

	intoDetail = () => {
		elBody.style.overflow = "hidden";
		elHeaderSec.classList.add("ty_white");
		elHeaderSec.style.background = "none";
		elItemSec[nActiveIndex].classList.add("expand");
		elNavSec.style.display = "none";
		elHomeBtn.classList.remove("ty_main");
		elBackBtn.style.display = "block";
		elBackBtn.classList.add("fadeInAnimation");
		for (let j = 0; j < elItemSec.length; j++) {
			if (j !== nActiveIndex) {
				elItemSec[j].style.height = 0;
				elItemSec[j].style.transform = "scale(0)";
				elItemSec[j].style.transition = "all 0.4s 0s";
			}
		}
	};

	elBackBtn.addEventListener("click", () => {
		elBody.style.overflow = "auto";
		elHeaderSec.style.background = "#ffdc25";
		elHeaderSec.classList.remove("ty_white");
		elItemSec[nActiveIndex].classList.remove("expand");
		elNavSec.style.display = "inline-block";
		elHomeBtn.classList.add("ty_main");
		elBackBtn.style.display = "none";
		for (let j = 0; j < elItemSec.length; j++) {
			elItemSec[j].style.height = "auto";
			elItemSec[j].style.transform = "scale(1)";
			elItemSec[j].style.transition = "all 0.4s 0s";
		}
	});

	enterMain = () => {
		elHeaderSec.style.background = "#ffdc25";
		elMainSec.style.display = "block";
		elMainSec.style.transform = "display 0.4s 1s";
		elMainSec.style.opacity = 1;
		elMainSec.style.clipPath = "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)";
		elIntroSec.style.display = "none";
		elIntroSec.style.transform = "display 0.4s 1s";
		elIntroSec.classList.add("fadeOutAnimation");
		elHeaderSec.querySelector(".header_inner").classList.add("fadeInAnimation");
		elHomeBtn.classList.add("ty_main");
		for (let i of elItemSec) {
			i.style.animation = "0s ease 0s 1 normal none running none";
			i.style.transform = "rotateY(0deg) scale(1)";
			i.style.transition = "all 0.5s ease 1.5s";
		}
		setTimeout(function () {
			setPos();
			isSetPos = true;
		}, 2500);
	};

	window.onresize = () => {
		setPos();
	};

	window.onscroll = () => {
		scroll = window.scrollY;
		activation(scroll);
	};
};
