window.onload = () => {
	const elSections = document.querySelectorAll("section");
	const elTabItem = document.querySelectorAll("._tab_list > li");
	const elTabBtn = document.querySelectorAll("._tab_btn");
	const elTabPannel = document.querySelectorAll("._tab_pannel");
	const elToggleItem = document.querySelectorAll("._toggle_list > li");
	const elToggleBtn = document.querySelectorAll("._toggle_btn");
	const elYoutubeList = document.querySelector(".youtube_list");
	const sEffectClass = "effect";
	const sActiveClass = "active";
	const nSeclength = elSections.length;
	let isLoading = false;
	let aResultData = [];
	let nActiveTab = 0;
	let aOffset;
	let nGap = -300;
	let nScroll = 0;

	// 페이지 중간에서 새로고침 시 상단으로 로드
	setTimeout(() => scrollTo(0, 0), 100);

	setPos = () => {
		aOffset = [];
		elSections.forEach((item, index) => {
			aOffset.push(item.offsetTop);
		});
		aOffset.push(elSections[nSeclength - 1].offsetTop + elSections[nSeclength - 1].offsetHeight);
	};

	setPos();

	window.onresize = () => {
		setPos();
	};

	window.onscroll = () => {
		nScroll = window.scrollY;
		activation(nScroll);
	};

	window.addEventListener("load", () => {
		setTimeout(() => scrollTo(0, 0), 100);
	});

	activation = (scroll) => {
		elSections.forEach((item, index) => {
			// elSections[index].classList.remove(sActiveClass);
			if (scroll >= aOffset[index] + nGap && scroll < aOffset[index + 1] + nGap) {
				elSections[index].classList.add(sEffectClass);
			}
		});
	};

	scrollUp = (target_pos) => {
		if (nScroll < target_pos) {
			nScroll = target_pos;
			clearInterval(timer);
		} else {
			nScroll -= 10;
		}
		window.scroll(0, nScroll);
	};

	scrollDown = (target_pos) => {
		if (nScroll > target_pos) {
			nScroll = target_pos;
			clearInterval(timer);
		} else {
			nScroll += 10;
		}
		window.scroll(0, nScroll);
	};

	getYoutubeVideo = async () => {
		try {
			isLoading = true;
			const response = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLu8fcI7I5zqsTqJT8OSg8TL1QDn2fCB4u&maxResults=10&key=AIzaSyC3dYrIaoJUiV8HSSeJvje5ZPOB0zQPVLs");

			aResultData = response.data.items;
		} catch (e) {
			console.error(e);
		}
		isLoading = false;
		createDOM(aResultData);
	};

	getYoutubeVideo();

	createDOM = (data) => {
		let item = data;
		elYoutubeList.innerHTML = "";
		if (item.length > 0) {
			item.map((data, index) => {
				let tempdata = data.snippet;
				let new_li = document.createElement("li");
				let new_link = document.createElement("a");
				let new_posterbx = document.createElement("div");
				let new_poster = document.createElement("img");
				let new_title = document.createElement("p");
				let new_desc = document.createElement("p");

				new_posterbx.classList.add("youtube_poster_bx");
				new_poster.classList.add("youtube_poster");
				new_title.classList.add("youtube_title");
				new_desc.classList.add("youtube_desc");
				new_link.setAttribute("href", `https://www.youtube.com/watch?v=${tempdata.resourceId.videoId}`);
				new_poster.setAttribute("src", tempdata.thumbnails.high.url);
				new_title.innerText = tempdata.title;
				new_desc.innerText = tempdata.description;

				elYoutubeList.appendChild(new_li);
				new_li.appendChild(new_link);
				new_link.appendChild(new_posterbx);
				new_posterbx.appendChild(new_poster);
				new_link.appendChild(new_title);
				new_link.appendChild(new_desc);
			});
		}
	};

	controlTab = () => {
		for (let i = 0; i < elTabItem.length; i++) {
			if (i === nActiveTab) {
				elTabItem[i].classList.add(sActiveClass);
				elTabPannel[i].classList.add(sActiveClass);
			} else {
				elTabItem[i].classList.remove(sActiveClass);
				elTabPannel[i].classList.remove(sActiveClass);
			}
		}
	};

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
};
