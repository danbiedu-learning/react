## Flexbox
![](./img/flexbox-concept.png)
### Flex Container
![](./img/flexbox-property.png)
- main axis와 cross axis를 잘 구분해야한다.
- justify-content: main axis에 따름
    - space-around: 각 flex-item의 좌우가 같다.
- align-item: cross axis에 따름
    - baseline: text의 위치를 기준으로 정렬하게 된다.
- flex-direction: column으로 바꾸면 main과 cross axis가 바뀐다. (justify-content가 세로축을 기준으로 적용되게 된다.)
### Flex Item
![](./img/flexbox-property.png)
- align-self: align-item으로 적용된 정렬을 무시하고, item 스스로 정렬할 수 있음
- order: 모든 item의 기본이 0이다, -1이면 가장앞으로 감
- flex-grow: 기본이 0, 남은 부분을 차지하는 비율을 말함 (상대적인 값이다.)
- flex-shrink: 기본이 1, 줄어들지 않게 하려면 0으로 하면 된다.
- flex-basis: flexbox에서는 width대신 flex-basis를 쓴다.
- shorthand: `flex: flex-grow flex-shrink flex-basis` 로 쓰는것이 best practice이다.