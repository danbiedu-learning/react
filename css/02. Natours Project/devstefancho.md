## Building the Header
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #777;
    padding: 30px;
}

.header {
    height: 95vh;
    background-image: linear-gradient(
            to right bottom,
            rgba(126, 213, 111, 0.8),
            rgba(40, 180, 131, 0.8)),
    url(../img/hero.jpg);
    background-size: cover;
    background-position: top;

    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
}
```
### basic reset using the univeral selector
- `*` 부분이 basic setting이다. box-sizing의 경우 예측하여 계산하기 쉽도록 border-box로 해주자

### body 부분
- font와 관련된 것은 inherit되도록 body에 넣어준다.
- padding은 inherit되지 않는다.

### header 부분
- background-size가 cover이면 view port에 맞게 배경이 된다. (즉 responsive 하게 됨)
- linear-gradient의 방향을 줄 수 있다. (너무 길면 줄바꿈 해주자)
- background-position은 crop되지 않는 곳을 의미함 (top이면 브라우저 크기를 줄일 때 bottom쪽이 먼저 crop 됨, center이면 브라우저 줄일 수록 화면이 중앙으로 간다.)

### clip-path
- clip path를 만들어 주는 사이트 : https://bennettfeely.com/clippy/
- polygon에서 top-left가 (0, 0) 좌표이고, x+ 는 오른쪽, y+는 아래쪽이다.
- vh로 크기를 해주면 브라우저의 px에 따라 dynamic하게 해줄 수 있다.
---
```css
.header {
    height: 95vh;
    background-image: linear-gradient(
            to right bottom,
            rgba(126, 213, 111, 0.8),
            rgba(40, 180, 131, 0.8)),
    url(../img/hero.jpg);
    background-size: cover;
    background-position: top;
    position: relative;

    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
}

.logo-box {
    position: absolute;
    top: 40px;
    left: 40px;
}

.logo {
    height: 35px;
}

.text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.heading-primary {
    color: #fff;
    text-transform: uppercase;
}

.heading-primary-main {
    display: block;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;
}

.heading-primary-sub {
    display: block;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 17px;
    text-align: center;
}
```
### logo를 배경기준으로 이동
- 부모 클래스(header)에 `position: relative`를 해주고 logo의 `position: absolute`를 해준다.
- height 로 사이즈를 지정해준다. (width를 정하지 않으면, auto로 됨)

### 텍스트의 구성
- `display: block`을 해주면, width를 100% 가져가지 때문에, 줄바꿈을 쉽게 할 수 있다.
- size, weight, spacing 정도가 기본 셋팅

### heading 글자를 화면 중앙으로 보내기
- 우선 absolute로 position을 해주고, 원하는 위치에 보낸다. 단 이때 pivot(기준점)이 왼쪽-위 이므로, transform을 해준다.
- translate는 부모 element와 무관하고, 본인을 기준으로 움직인다. 따라서 `translate(-50%, -50%)` 를 해주면 된다.

---
> 아래 코드는 위 코드의 중복된 부분을 제거 했음.
```css
.heading-primary {
    backface-visibility: hidden;
}

.heading-primary-main {
    animation-name: moveInLeft;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    /*animation-delay: 0.5s;*/
    /*animation-iteration-count: 3;*/
}

.heading-primary-sub {
    animation: moveInRight 1s ease-out;
}

@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        transform: translateX(10px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
```
### keyframe 사용
- opacity와 translate의 조합으로 텍스트 연출을 간단하게 해줌. (예를들면 텍스트가 왼쪽에서 오른쪽으로 서서히 나타나는 효과)
- 텍스트가 animation 중에 위아래로 흔들리는 현상이 있으면 `backface-visibility: hidden`을 해주면 된다. (발생원인은 아무도 모름)

### animation property
- shorthand로 animation을 사용할 수 있다.
- `animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction`
- `ease-in`은 fast -> slow 이고 `ease-out`은 slow -> fast 이다.

---
> pseudo class와  transistion
```css
.btn:link,
.btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    padding: 15px 40px;
    border-radius: 100px;
    transition: all .2s;
    position: relative;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 10px rgba(0,0,0,.2)
}

.btn-white {
    background-color: #fff;
    color: #777;
}
```
### Pseudo Classes
- pseudo class는 selector에 추가하여, 특정 state에 대해 specified(정의) 된다.
- `:link`는 방문하지 않는 경우, `:visited`는 방문한 경우이다.

### transition
- `transition`은 CSS properties가 변할 때, animation을 컨트롤하는 방법이다.
- `transition`은 기본 selector에 넣는다.
- `transition: <property> <duration> <timing-function> <delay>`
- property가 `all`이면 모든 property의 변화값에 적용된다.

### Button shadowing
- button에 box-shadow로 hover과 active(클릭 시)를 약간 차이를 준다. active에서 값을 작게 줘서 화면에 더 붙는 느낌을 줄 수 있다.
- translate로 화면이 떠있고, 클릭했을 때 내려가는 느낌을 줄 수 있다.
- `box-shadow: offset-x | offset-y | blur-radius | color` 이다.

### inline-block
- padding, margin, width, height 등을 쓸 수 있다. (inline에서는 못씀, inline과의 차이점)
- 줄바꿈이 일어나지 않는다. (block과의 차이점)

> 버튼 효과주기

```css
@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}

.btn::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.btn-white::after {
    background-color: #ffffff;
}

.btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

.btn-animated {
    animation: moveInBottom .5s ease-out .75s;
    animation-fill-mode: backwards;
}
```
### animation
- .75s와 같이 `delay`를 줘서 나타는 효과를 줄 수 있다.
- fill-mode를 `backwards`로 하면 element의 시작 style이 `keyframe`의 first keyframe 값을 갖게 된다.

### pseudo-elements ::after
- `content` 는 필수 property로 '' 이렇게 빈 값이라도 줘야한다.
- 상위 `relative`의 사이즈를 그대로 가져오기 위해서 `height`와 `width`를 100%로 했다. 또한 겹치면서 뒤에 배치하게 하기 위해서 `position: absolute` 를 했다.
