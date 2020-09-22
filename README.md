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

## Tech Stack.

HTML, ES6, CSS
