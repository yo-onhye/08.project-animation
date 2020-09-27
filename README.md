# Animation Page Clone Project✨

## Description.

Animation Page clone하기

### BBC 인터랙티브 페이지 "코로나19가 바꿀 사무실의 미래" 클론

#### Page List.

**기존 페이지**  
https://www.bbc.com/korean/resources/idt-48d3c9a7-4063-4289-9726-611b5ea9d7b5

**인프런 강의**  
bit.ly/2Ej7f4q

**Git**  
https://yo-onhye.github.io/08.project-animation/project-bbc-covid19/index.html

#### Process.

**09.14**

- 프로젝트 생성
- 파일 세팅

**09.15**

- 강의 1. CSS 레이아웃 수강

**09.16**

- 강의 2. JS part1 수강
- 요소에 data-index 세팅하기

  ```jsx
  // setAttribute를 사용하여 data-xxx 세팅이 가능하지만,
  stepElems[i].setAttribute("data-index", i);

  // 기본 속성인 dataset을 사용할 수 있다.
  stepElems[i].dataset.index = i;
  ```

- intersection observer를 이용하여 눈에 보이는 요소만 제어할 수 있다. [[참고](https://heropy.blog/2019/10/27/intersection-observer/)]

**09.17**

- 강의 3. JS part2 수강
- true, false 값을 받아 스크롤 시 애니메이션을 초기화
- actions() 함수를 추가하고 함수 안에서 쿼리 셀렉터로 요소를 체크하여 함수를 실행

---

### 네이버 채용 페이지 클론

네이버 채용 페이지 참고하여 코로나 정보 페이지 만들기

#### Page List.

**기존 페이지**  
https://campaign.naver.com/recruit2020/checkpoint/

**Git**  
https://yo-onhye.github.io/08.project-animation/project-naver-recruit/index.html

#### Process.

**09.18**

- 프로젝트 생성
- header section 추가
- 기존 이미지로 되어있던 꾸밈 요소를 가상선택자를 이용해 추가
- 꾸밈 요소에 애니메이션 추가

**09.19**

- section1 & section2 추가
- 공통으로 사용할 수 있는 animation 추가
- 기존 페이지는 scroll 시 effect 클래스를 section wrapper에 추가하여 애니메이션 추가. 동일한 방법으로 구현할지, 기존 하던대로 스크립트로 각 요소에 애니메이션을 추가할 지 고민하기

**09.20**

- section3 tab ui 추가
- 페이지 구성 변경 → 코로나 19 정보 페이지로 기획 변경
- 자바 스크립트 오류 발생 → `Uncaught TypeError: Cannot read property 'classList' of undefined`

**09.21**

- section4 toggle ui 추가
- 공통 UI 스타일 변경

💡 자바 스크립트 오류 수정

`Uncaught TypeError: Cannot read property 'classList' of undefined`

→ 이벤트를 받는 객체가 명확하지 않아서 그런것 같다. tab안에 tab 버튼을 감싼 li말고 pannel에 있는 li까지 잡혀서 이런 오류가 난 것 같다. `>` 를 사용해 tab 버튼을 감싼 li를 잡으니 해결되었다.

**09.22**

- section5, section6 추가
- youtube 영상 추가
- 질병관리청 정례브리핑 영상 youtube API로 불러와 최신 10개씩 호출

**09.23**

- 스크롤 이벤트 추가 → 스크롤 시 section top값보다 300px 높은 포지션일때 `effect`클래스 추가
- `effect` 클래스 추가 시 애니메이션이 실행되도록 style 변경
- 페이지 중간에서 새로고침 시 상단으로 로드되도록 하여 애니메이션 꼬임 방어

---

### Portfolio Grid Snippet 클론

#### Page List.

**참고 페이지**  
https://codepen.io/jcoulterdesign/pen/arQoER

**Git**  
https://yo-onhye.github.io/08.project-animation/project-interactive-single/index.html

#### Process.

**09.24**

- 프로젝트 생성
- intro section 추가
- 기존 UI 중 이미지를 css로 대체할 수 있는 부분은 css로 대체
- 페이지 이동 버튼(arrow)에 애니메이션 추가

**09.25**

- main section 추가
- 페이지 구조 변경
- 부자연스러웠던 `.intro_tit_bx` animation 수정 → 기존 animation을 활용해도 부자연스러웠는데, opacity:0을 초기 값으로 주고, 애니메이션 시작 시 opacity:1을 주니 자연스러워짐
- 버튼 클릭 시 메인 페이지 전환 애니메이션 추가

**09.26**

- portfolio_item 추가
- img_btn 클릭 시 노출 될 요소들 포함하여 구조 생성
- 슬라이드 추가 전 img_btn 기능 먼저 구현 위해 item 요소 선작업

**09.27**

- item 더보기 버튼 클릭 애니메이션 추가
- 클릭 시 `.img_txt` 애니메이션이 부자연스러움 → 확인 필요

## Tech Stack.

HTML, ES6, CSS
