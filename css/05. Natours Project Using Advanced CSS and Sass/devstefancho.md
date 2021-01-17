## NPM Package

### node-sass
- `npm install node-sass`
- sass 파일을 자동으로 css로 변환해줌, -w 옵션(watch)을 붙이면 자동으로 변환됨
- `node-sass sass/main.scss css/style.css` 명령어로 output의 css는 overwrite 된다.
### live-server
- `npm install live-server -g`
- automatic 하게 page가 reload 된다.

## LAYOUT Types
1. Float layouts
2. Flexbox
3. Css Grid

## Float layout 구성하기
### calc
- calc 내에서 여러가지 단위 조합으로 사용가능하다. (%, px, variable, etc... 을 섞어서 사용가능)
- variable은 `#{$variable-name}`와 같은 형태로 써준다.

### clearfix
- div와 같은 element 내부의 모든 element가 float를 갖게 되면, 모두 float인 상태이기 때문에, collapse가 되어 height가 0이 된다. 그렇게 되면
  background-color, margin 등의 property가 안 먹히게 된다. 아래와 같이 clearfix를 @mixin으로 만들어 @include 시켜주자.
```scss
@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
  ```
### last-child 제외하고 적용하기
아래와 같은 selector를 만들면 last-child가 아닌 것들을 선택하게 됨.
```scss
&:not(:last-child) {
  
}
```

### attribute selector 활용
- `^=` 시작문자 attribute 선택
- `$=` 마지막문자 attribute 선택
- `*=` 포함하는 attribute 선택
```html
<div class="row">
  <div class="col-1-of-2">Col 1 of 2</div>
  <div class="col-1-of-2">Col 1 of 2</div>
</div>
```
```scss
.row{
  [class^="col-"] {
    background-color: orangered;
    float: left;

    &:not(:last-child) {
      margin-right: $gutter-horizontal;
    }
  }
```