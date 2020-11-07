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

**09.28**

- intro → main 페이지 전환 인터렉션 변경
- intro 페이지는 height: 100vh로 막고, main은 item 리스트는 나열하기위해 height을 풀어줌

**09.29**

- `.portfolio_item`이 여러개일 경우 아이템 별 더보기 클릭 버튼 애니메이션 추가
- item 클릭 이벤트 발생 시 다른 item들을 숨김 처리

**09.30**

- header 영역 스크롤 시 background color 처리 → background 없을 경우 텍스트끼리 겹쳐 보여 가독성이 떨어짐
- 아이템 세부 페이지 반응형 대응
- cusor 디자인 추가

**10.01**

- Navigation 구조 추가 → item별 id 값 부여
- section 영역 추가

**10.03**

- Navigation 스크립트 추가 → item 더보기 버튼 클릭 시 액션이 이상하여 확인 예정

**10.04**

- Navigation activation 추가로 오류 발생 → setPos()실행 후 offs 배열이 채워졌을 때 isSetPos를 판단하여 activation 함수 실행하여 문제 해결
- detail 페이지 진입 시 body에 `overflow:hidden;` 추가
- detail 페이지 진입 시 nav 숨김

---

### Interactive Login/Join Page

로그인/회원가입 페이지를 React로 만들어, Data 연동까지 하는 것이 목표

#### Page List.

**기존 페이지**  
https://codepen.io/webiscuit/pen/XweygL

#### Process.

**10.05**

- React 프로젝트 생성
- 프로젝트 기본 폴더 구조 추가
- welcome 페이지 구조 추가

**10.06**

- welcome 페이지 구조 변경 → 불필요한 wrapper삭제
- welcome 페이지 스타일 추가

**10.10**

- App.js 진입 시 노출될 intro.js 추가 (default page)
- login 페이지 구조 추가 및 스타일 추가

**10.17**

- join 페이지 구조 추가

**10.18**

- join 페이지 스타일 추가
- css 정리

**10.22**

- 입력 받은 데이터 비교 함수 추가
- 유효성 검사 함수 추가 예정

**11.01**

- 데이터 입력 비교함수 수정 중
- 비밀번호 찾기 페이지 추가

**11.07**

- Join Page 데이터 입력 수정
- validate text노출 시 **noValidate**가 없을 경우 값이 없을 떄 크롬 기본 유효성 오류 UI가 나와 해당 속성 추가

## Tech Stack.

React, ES6, SCSS
