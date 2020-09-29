window.onload = () => {
	const elHeaderSec = document.querySelector(".header");
	const elIntroSec = document.querySelector(".portfolio_intro");
	const elMainSec = document.querySelector(".portfolio_main");
	const elItemSec = elMainSec.querySelectorAll(".portfolio_item");
	const elHomeBtn = document.querySelector(".home_btn");
	const elIntroBtn = document.querySelector(".intro_btn");
	const elImgBtn = elMainSec.querySelectorAll(".img_btn");
	const elBackBtn = elMainSec.querySelector(".back_btn");
	let nActiveIndex = "";
	let nScroll = 0;
	let isMainShow = false;

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

	for (let i in elImgBtn) {
		elImgBtn[i].onclick = () => {
			nActiveIndex = Number(i);
			intoDetail(i);
		};
	}

	intoDetail = (i) => {
		elHeaderSec.classList.add("ty_white");
		elItemSec[nActiveIndex].classList.add("expand");
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
		elHeaderSec.classList.remove("ty_white");
		elItemSec[nActiveIndex].classList.remove("expand");
		elHomeBtn.classList.add("ty_main");
		elBackBtn.style.display = "none";
		for (let j = 0; j < elItemSec.length; j++) {
			elItemSec[j].style.height = "auto";
			elItemSec[j].style.transform = "scale(1)";
			elItemSec[j].style.transition = "all 0.4s 0s";
		}
	});

	enterMain = () => {
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
	};

	window.onscroll = () => {};
};
