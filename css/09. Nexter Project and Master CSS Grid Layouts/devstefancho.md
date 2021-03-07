## Task
- How to build a complex and modern layout using advanced CSS Grid techniques
- How to choose different row and column track sizes for different types of content
- How and why to create girds inside of grids
- How to create a responsive component without media queries
- How to build a small component using CSS grid

## grid-template
### min-content
- `grid-template-rows`(혹은 columns)의 사이즈를 정확히 모를 때 사용 (적어도 content 크기만큼 갖도록 하는 것)

## Full-bleed layout
- content column을 3개로 만들고, middle column에 content를 넣고, 필요한 경우 양쪽 column으로 확장시키는 방식
- 양쪽에 1fr (1 fraction of the remaining space) 값을 준다. (아래 code에서 `minmax(6rem, 1fr)` 부분)
    - minmax로 6rem을 적용하는 이유(min값을 적용하는 이유)는, 좌우의 마진이 있는 형태가 디자인이 더 괜찮기 때문이다.
```scss
.container {
    grid-template-columns:
        [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start]
        repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
        [center-end] minmax(6rem, 1fr) [full-end];
}
```