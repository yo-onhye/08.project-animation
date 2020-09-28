window.onload = () => {
	const elHeaderSec = document.querySelector(".header");
	const elIntroSec = document.querySelector(".portfolio_intro");
	const elMainSec = document.querySelector(".portfolio_main");
	const elItemSec = document.querySelectorAll(".portfolio_item");
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

	setTimeout(function () {
		isMainShow = true;
	}, 2500);

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

	elBackBtn.addEventListener("click", () => {
		elHeaderSec.classList.remove("ty_white");
		elTarget.classList.remove("expand");
		elHomeBtn.classList.add("ty_main");
		elBackBtn.style.display = "none";
	});

	window.onscroll = () => {};
};
