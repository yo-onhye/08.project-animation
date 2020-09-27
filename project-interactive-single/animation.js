window.onload = () => {
	const elHeaderSec = document.querySelector(".header");
	const elIntroSec = document.querySelector(".portfolio_intro");
	const elMainSec = document.querySelector(".portfolio_main");
	const elHomeBtn = document.querySelector(".home_btn");
	const elIntroBtn = document.querySelector(".intro_btn");
	const elImgBtn = document.querySelector(".img_btn");
	const elBackBtn = document.querySelector(".back_btn");
	let elTarget = "";
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

	elImgBtn.addEventListener("click", (e) => {
		elTarget = e.target.closest(".portfolio_item");
		elHeaderSec.classList.add("ty_white");
		elTarget.classList.add("expand");
		elHomeBtn.classList.remove("ty_main");
		elBackBtn.style.display = "block";
		elBackBtn.classList.add("fadeInAnimation");
	});

	elBackBtn.addEventListener("click", () => {
		elHeaderSec.classList.remove("ty_white");
		elTarget.classList.remove("expand");
		elHomeBtn.classList.add("ty_main");
		elBackBtn.style.display = "none";
	});

	enterMain = () => {
		elMainSec.style.opacity = 1;
		elMainSec.style.clipPath = "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)";
		elIntroSec.classList.add("fadeOutAnimation");
		elHeaderSec.querySelector(".header_inner").classList.add("fadeInAnimation");
		elHomeBtn.classList.add("ty_main");
		isMainShow = true;
	};

	window.onresize = () => {};

	window.onscroll = () => {};
};
