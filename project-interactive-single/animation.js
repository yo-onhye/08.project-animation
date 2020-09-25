window.onload = () => {
	const elHeaderSec = document.querySelector(".header");
	const elIntroSec = document.querySelector(".portfolio_intro");
	const elMainSec = document.querySelector(".portfolio_main");
	const elHomeBtn = document.querySelector(".home_btn");
	const elIntroBtn = document.querySelector(".intro_btn");
	let nScroll = 0;
	let isMainShow = false;

	elHomeBtn.addEventListener("click", () => {
		enterMain();
	});

	elIntroBtn.addEventListener("click", () => {
		enterMain();
	});

	enterMain = () => {
		elMainSec.style.opacity = 1;
		elMainSec.style.clipPath = "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)";
		elIntroSec.classList.add("fadeOutAnimation");
		elHeaderSec.querySelector(".header_inner").classList.add("fadeInAnimation");
		elHeaderSec.querySelector(".home_btn").classList.add("ty_main");
		isMainShow = true;
	};

	window.onresize = () => {};

	window.onscroll = () => {};
};
