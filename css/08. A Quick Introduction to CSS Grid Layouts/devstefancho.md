![](./img/css_grid_intro.png)
![](./img/css_grid_intro2.png)
![](./img/grid_term.png)
![](./img/grid_term2.png)
![](./img/grid_term_overview.png)

## Grid Test
### [codepen](https://codepen.io/stefan-cho/pen/rNWJovz) 으로 간단 예제
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="stefan-cho" data-slug-hash="rNWJovz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="grid">
  <span>See the Pen <a href="https://codepen.io/stefan-cho/pen/rNWJovz">
  grid</a> by stefan-CHO (<a href="https://codepen.io/stefan-cho">@stefan-cho</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Grid Properties
- fr : felxbox의 flex: 1과 비슷하다. (남은 공간을 차지하는 비율)
- percentage : `grid-template-column: 50% 150px 1fr`일때, 퍼센트는 gap 상관없이 전체를 기준으로 사이즈를 정한다.
- 아래코드는 property에 대한 단순예시이다.
- grid는 서로 겹칠 수 있다. 즉 item-1과 item-2의 grid-row, grid-column 부분이 동일하거나 일부 겹치게 되어도 상관없다. 이때는 z-index로 forward 혹은 backward 한다.
```scss
.container {
    display: grid;
    width: 1000px;
    height: 1000px;
    
    grid-gap: 30px 60px; //grid-row-gap과 grid-column-gap을 한번에
    grid-template-rows: repeat(3, 1fr); // 동등하게 3개로 나눔, repeat은 내부값을 단순 반복을 해준다.
    grid-template-columns: 50% 1fr 1fr; // 50%는 500px을 먹는다.
}
.item-1 {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-row: 1 / 2; // 위 두개와 같다, column도 같은 방식
    grid-column: 3 / 4;
    grid-area: 1 / 3 / 2 / 4; //두개를 섞어 쓸 수 있다, row-start | column-start | row-end | column-end, 헷갈리므로 비추천
}
.item-2 {
    grid-row: 1 / span 2; // 1 / 2와 같다. span은 갯수를 의미
    grid-column: 1 / -1; //만약 끝까지 늘리려면 minus값으로 하는게 낫다.
}
```
## Grid Challenge
### Grid result
- [codepen](https://codepen.io/stefan-cho/pen/gOLemEV)

![](./img/grid_challenge.png)
- 결과
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="stefan-cho" data-slug-hash="gOLemEV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="grid-challenge">
  <span>See the Pen <a href="https://codepen.io/stefan-cho/pen/gOLemEV">
  grid-challenge</a> by stefan-CHO (<a href="https://codepen.io/stefan-cho">@stefan-cho</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Naming Grid Lines
- [codepen](https://codepen.io/stefan-cho/pen/yLVKwdm)
- 각 grid에 이름을 붙일 수 있다.
  - repeat의 앞뒤로 이름을 붙이면, 아래 예시에서는 `col-start 1`, `col-end 1`, `col-start 2`... 와 같은 형태로 사용할 수 있다.
  ```scss
  .main {
    display: grid;
    grid-template-columns: [main-start] repeat(3, [col-start] 1fr [col-end]) [main-end] 20% [grid-end];
    grid-template-rows: [box-start sidebar-start] 40% [box-end main-start] 1fr [main-end sidebar-end];
  }
  ```

### Naming Grid Areas
- [codepen](https://codepen.io/stefan-cho/pen/qBqoveR)
- grid-template-areas에 이름을 붙일 수 있다. __(주의: grid의 이름이 누락되면 안된다. dot(.)이라도 써줘야함.)__
  - 사용하지 않는 곳 (empty space가 되길 원하는 곳)은 dot(.)을 써준다. (아래 예시)
    ```scss
    grid-template-areas:
    'box box box .'
    'main main main side';
    ```
  - matrix가 4X4, 5X5와 같이 작은 경우에 사용하면 좋다.
  ```scss
  .main {
    background-color: #eee;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 20%;
    grid-template-rows: 40% 1fr;
    grid-template-areas:
    'box box box side'
    'main main main side';
    grid-gap: 20px;

    & > * {
      background-color: orangered;
    }
    .sidebar {
      grid-area: side;
    }
    .main-content {
      grid-area: main;
    }
  }
  ```
  
## Implicit vs Explicit Grid
- [codepen](https://codepen.io/stefan-cho/pen/QWGBwmY)
- 명시하지 않은 grid의 경우, `grid-auto-flow`, `grid-auto-columns`, `grid-auto-rows`로 사이즈 및 생성방향을 정해줄 수 있다.
  - 아래는 Firefox 개발자 도구이다. (예제는 위 codepen)
    - 주황색부분(점선) : implicit grid
    - 노란색부분(실선 및 dash선) : explicit grid
![](./img/grid_auto_layout.png)
