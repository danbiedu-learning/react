## Sass

### Main Sass features
- variables: 재사용성 value (colors, font-sizes, spacing 등)
- nesting: selector가 nesting되서 다른 selector에 들어감
- operators: mathematical operations
- partials and imports: css 작성하고 하나의 파일로 import하여 하나의 파일로 만들 수 있음.
- mixins: css code 재사용성
- functions: mixins과 비슷하지만, value 만드는 방법이 다름
- extends: to make different selectors inherit declarations that are common to all of them
- control directives: for writing complex code using conditionals and loops

### clearfix
element내의 모든 element가 float인 경우, height가 0이 된다. 그래서 background-color 같은게 안 먹힘
clearfix class를 만들어준다.
```css
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
```



### variables
- `$name: value`로 선언, `$name` 으로 사용
### mixin
- parameter 사용가능 함
- 코드 재사용성을 위한 것
- `@mixin name(param) {}`으로 선언, `@include name(arg)` 로 사용
### function
- return 값이 있음 `@function name(param){ @return expression}` 으로 선언, `name(arg)` 으로 사용
### extend
- 기존에 extend에 사용할 class가 없는 경우 placeholder로 선언이 가능하며 `%`를 앞에 붙이면 된다.
- mixin 과 비슷하지만, 컴파일되는 형태가 다르다. placeholder로 지정한 쪽으로 (혹은 다른 selector를 사용해도 됨) selector가 생성되어 붙는다.
- `%placeholder {}` 형태 혹은 `.myclass {}` 로 선언, `@extend %placeholder` 혹은 `@extend .myclass` 로 사용
- extend 하는 것들간에 상관관계가 있을 경우 사용하도록 한다.

### Usage: [codepen](https://codepen.io/stefan-cho/pen/QWKzWqx) 예제에서 일부만 가져왔음
```scss
$color-primary: #f9ed69; //yellow color
$color-secondary: #f08a5d; //orange

@mixin style-link-text($color) {
    text-decoration: none;
    text-transform: uppercase;
    color: $color;
}

@function divide($a, $b) {
    @return ($a / $b);
}

nav {
    margin: divide(60, 2) * 1px;
    background-color: $color-primary;
}

a:link {
    @include style-link-text($color-primary);
}

.button {
    float: right;
}

%btn-placeholder {
     padding: 10px;
     display: inline-block;
     text-align: center;
     border-radius: 100px;
     @include style-link-text($color-text-light);
 }

.btn-main {
&:link {
     @extend %btn-placeholder;
     background-color: $color-secondary;
 }
}

.btn-hot {
&:link {
     @extend %btn-placeholder;
     background-color: $color-tertiary;
 }
} 
```
