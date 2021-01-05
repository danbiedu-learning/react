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

