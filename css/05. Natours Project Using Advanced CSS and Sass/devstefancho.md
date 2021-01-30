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

### Task
- Thinking about components
- How and Why to use utility classes
- How to use the `background-clip` property
- How to `transform` multiple properties simultaneously
- How to use the `outline-offset` property together with `outline`
- How to style elements that are NOT hovered while others are
- How to include and use an icon font
- Another way of creating the "skewed section" design
- How and When to use the direct child selector
- How to Build an amazing, rotating card
- How to use `perspective` in CSS
- How to use the `backface-visibility` property
- Using background blend modes
- How and when to use `box-decoration-break`
- How to make text flow around shapes with `shape-outside` and `float`
- How to apply a `filter` to images
- How to create a background video covering an entire section
- How to use the `<video>` HTML element
- How and when to use the `object-fit` property
- How to implement "solid-color gradients"
- How the general and adjacent sibling selectors work and why we need them
- How to use the `::input-placeholder` pseudo-element
- How and when to use the `:focus`, `:invalid`, `placeholder-shown` and `:checked` pseudo-classes
- Techniques to build custom radio buttons

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

### rgba
- rgba에 variable을 함께 쓸 수 있다. `rgba($color-black, .2)`

### text 효과 주기
- `tranform`에 `skew`, `scale`을 이용한다. (`transition` 설정도 해준다.)
- [angle](https://developer.mozilla.org/en-US/docs/Web/CSS/angle) 은 4가지를 사용할 수 있고, `deg`로 썼다.
- `text-shadow` 사용
- `background-image`로 `linear-gradient`를 주고, `color`는 `transparent`, `-webkit-background-clip` 사용으로 text에 gradient 효과가 나타나도록 한다.
- h2와 같이 header text는 `text-transform`으로 `uppercase` 해줌
- `letter-spacing`도 약간 적용해주도록 한다.

### button 만들기
- `&:link, &:visited, &:hover, &:active`에 대해서 만든다.
- 기본 구성은 예는 아래와 같다. (버튼에 hover하면 버튼이 색이 바뀌면서 올라가고 클릭하면 버튼을 누르는 효과)
```scss
.btn-text {
  &:link, &:visited {
    display: inline-block;
    text-decoration: none;
    color: $color-primary;
    font-size: $default-font-size;
    padding: 3px;
    border-bottom: 1px solid $color-primary;
    text-shadow: 0 1rem 2rem rgba($color-black, .15);
    transition: all .2s;
  }

  &:hover {
    transform: translateY(-3px);
    background-color: $color-primary;
    color: $color-white;
    text-shadow: 0 0.5rem 1rem rgba($color-black, .15);
  }

  &:active {
    transform: translateY(0px);
  }
}
```

### Image Composition 만들기 (겹친 이미지)
- 아래와 같이 3개의 이미지가 있을 때, 이미지를 겹치게 하고, hover시 해당 이미지 사이즈가 커지고, 나머지가 줄어드는 효과를 줄 수 있다.
- composition container로 relative를 잡고, 각 이미지를 absolute로 배치한다.
- 이미지가 hover시 올라오는 효과를 주기 위해, z-index를 추가하였다.
- hover된 이미지 이외에 이미지는 0.9 scale로 사이즈를 줄여, 선택된 이미지가 더 부각되게 만들었다.
```html
<div class="composition">
  <img src="img1.jpg" class="composition__photo composition__photo--1">
  <img src="img2.jpg" class="composition__photo composition__photo--2">
  <img src="img3.jpg" class="composition__photo composition__photo--3">
</div>
```
```scss
.composition {
  position: relative;

  &__photo {
    width: 55%;
    position: absolute;
    box-shadow: 0 1rem 2rem rgba($color-black, .4);
    transition: all .2s, z-index 0s;
    z-index: 10;
    outline-offset: 1rem;

    &--1 {
      left: 5%;
      top: -2rem;
    }

    &--2 {
      top: 2rem;
      right: 0;
    }

    &--3 {
      top: 10rem;
      right: 20%;
    }

    &:hover {
      transform: scale(1.1) translateY(-5px);
      box-shadow: 0 2rem 3rem rgba($color-black, .5);
      z-index: 20;
      outline: solid $color-primary 2rem;
    }
  }

  &:hover &__photo:not(:hover) {
    transform: scale(.9);
  }
}
```

### feature-box 만들기
- background image에 기울임(`skew`)를 준 다음, 내부에 direct child를 select해서 반대로 기울여준다. 그러면 배경만 기울인 효과가 된다.
```scss
.section-features {
  background-image: linear-gradient( to right bottom, rgba($color-primary-light, 0.8), rgba($color-primary-dark, 0.8)), url(../img/nat-4.jpg);
  background-size: cover;
  transform: skewY(-7deg);

  & > * {
    transform: skewY(7deg);
  }
}
```
- icon 을 쓸 때 `<i> </i>` 태그를 쓰는 이유는, 과거에는 italic을 위한 태그였는데 용도가 사라지면서 많은 곳에서 icon 용으로 사용하게 된 것이다.
```html
<i class="feature-box__icon icon-basic-heart"></i>
```

### Rotating card 만들기
- parent element의 모든 child element들이 absolute position을 가질 경우, parent가 collapse되서 height가 0이 된다.
  (모든 child가 float일때와 같은 현상) float는 clearfix를 만들어서 붙여주면 되지만, absolute에서는 그 방법이 되지 않으므로 인위적으로 parent element에
  필요한 height를 넣어준다.
```html
<div class="card">
  <div class="card__side card__side--front">front</div>
  <div class="card__side card__side--back">back</div>
</div>
```
```scss
.card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 50rem; 
  // .card안에 모든 element가 absolute여서 collapse되서 height가 0이 됨
  // 따라서 인위적으로 height값을 추가해줌

  &__side {
    color: #fff;
    font-size: 2rem;

    transition: all 1.2s ease;
    position: absolute; // front와 back 카드가 겹치도록
    top: 0;
    left: 0;
    width: 100%; // absolute로 하면 크기가 글씨만큼만 차지하므로 parent 사이즈만큼 키워줌
    height: 100%;
    backface-visibility: hidden; // 각 카드의 뒷면을 숨기기
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .15);

    &--front {
      background-color: $color-white;
    }

    &--back {
      background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark);
      transform: rotateY(180deg); // back 카드는 미리 돌려놓는다.
    }

  }

  &:hover &__side--front {
    transform: rotateY(-180deg); 
    // back과 반대방향으로 돌아가게 하기 위해서 - 방향으로 돌림 (360도 회전처럼 보이게)
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }
}
```
### Rotating Card 앞면 스타일링 (image part)
- overflow : 이미지가 튀어나가지 않도록 막아줌, 예를 들면 아래에서 border-radius를 줬는데, image를 그 위에 올리면 image 모서리가 그 위롤 덮게 된다.
  이미지가 border-radius 밖으로 튀어나가지 않도록 가려준다.
```scss
{
  overflow: hidden;
}
```
- box-decoration-break : text의 경우 width에 의해 줄이 여러개가 생겨도, 하나의 줄로 보기 때문에 padding이 글자 처음과 끝에만 적용된다. box-decoration-break를 쓰면
  여러 줄이 생길때 각 줄이 각각의 div를 갖고 있는 것처럼 만들어줘서 각 줄마다 padding이 좌우에 똑같이 적용된다.
```scss
  //FRONT SIDE STYLING
  &__picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen; // background-image에 있는 gradient와 이미지를 blending 해줌
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); // image clip 하기 (같은 값이라도 그려지는 포인트의 순서에 따라 모양이 달라짐)

    &--1 {
      background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark), url(../img/nat-5.jpg);
    }
  }

  &__heading { // 이미지 안에 곁들일 글자
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    color: $color-white;
    text-align: right;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
  }

  &__heading-span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone; // line break 효과
    box-decoration-break: clone;

    &--1 {
      background-image: linear-gradient(to right bottom,
              rgba($color-secondary-light, .85),
              rgba($color-secondary-dark, .85));
    }
  }

  &__details {
    padding: 2rem;

    ul {
      list-style: none; // ul 형태일때 거의 항상 쓴다.
      width: 80%;
      margin: 0 auto; // div내의 div를 중간으로 맞출때 보통 마진 0 auto를 쓴다.

      li {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;
        &:not(:last-child) {
          border-bottom: 1px solid $color-grey-light-2;
        }
      }
    }
  }
```
### transform 적용시 주의해야 할 점
- 예를 들어 아래와 같이 transform을 적용하였다. 목적은 story 카드를 기울이는 것이다. 이때 `&__shape` 부분에 `transform`에 `skew`를 추가한 것을 볼 수있다.
`& > *` 로 `skew`를 다시 반대로 줬음에도 불구하고, 저렇게 다시 주는 이유는 transform이 덮어지기 때문이다. 즉 주석처럼 쓰면 `transform: translateX(-3rem)` 만 적용된다.
```scss
.story {
  transform: skewX(-12deg);

  & > * {
    transform: skewX(12deg);
  }

  &__shape {
    transform: translateX(-3rem) skewX(12deg);
    // transform: translateX(-3rem) 이렇게 쓰면 skewX(12deg)는 적용안됨, transform 이 덮어지므로

    &__img {
      height: 100%;
    }
  }

}
```

### shape-outside
- image를 trim하는 것이 아니라, 이미지의 모양을 정하는 것이다. (clip-path는 이미지를 trim 하는 것)
- [참고: Difference between the clip-path and shape-outside properties](https://stackoverflow.com/questions/55090634/difference-between-the-clip-path-and-shape-outside-properties)

### backface-visibility
적용 방법
- `rotate`를 하고 뒷면을 `hidden` 할 때 (카드 뒤집기 애니메이션에서 사용)
- `transform`의 `transition`에서 이상현상이 있을 때 (transition마지막에 글자나 이미지가 흔들리는 경우)

### background video 만들기
- video 태그안에 있는 source 들이 실행됨, mp4가 안되면 webm이 그리고 webm이 안되면 Your browser is not supported! 가 뜬다.
- `object-fit: cover`는 비율을 유지하면서 최대크기에 맞춘다. `background-size: cover`과 비슷하다고 할 수 있다.
- 크기를 맞췄음에도 튀어나가는 부분이 있으면 `overflow: hidden`을 시도해본다.
- `opacity`로 투명도를 준다.
```html
<div class="bg-video">
  <video class="bg-video__content" autoplay muted loop>
    <source src="img/video.mp4" type="video/mp4">
    <source src="img/video.webm" type="video/webm">
    Your browser is not supported!
  </video>
</div>
```
```scss
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: .15;
  overflow: hidden;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
```

### Form에  스타일 주기
- form placeholder 스타일을 준다. (`::placeholder` 사용)
- form invalid 스타일을 준다.
- form에 입력이 될때 placeholder가 아래로 내려가는 것 처럼 보이는 효과를 준다.
```html
<form action="#" class="form">
    <div class="u-margin-bottom-md">
        <h2 class="heading-secondary">Start Booking Now</h2>
    </div>
    <div class="form__group">
        <input type="text" class="form__input" placeholder="Full Name" id="name" required />
        <label for="name" class="form__label">Full Name</label>
    </div>
    <div class="form__group">
        <input type="email" class="form__input" placeholder="Email Address" id="email" required />
        <label for="email" class="form__label">Email Address</label>
    </div>
</form>
```
```scss
.form {
  &__group:not(:last-child) {
    margin-bottom: 2rem;
  }

  &__input {
    font-size: 1.5rem;
    font-family: inherit;
    padding: 1.5rem 2rem;
    background-color: rgba($color-white, .5);
    border-radius: 2px;
    border: none;
    border-bottom: 3px solid transparent; // focus일때 border 3px을 맞추기 위해서 transparent를 미리 적용
    width: 90%;
    display: block;
    transition: all .3s;

    &:focus {
      outline: none;
      border-bottom: 3px solid $color-primary;
      box-shadow: 0 1rem 2rem rgba($color-black, .1);
    }

    &:focus:invalid {
      border-bottom: 3px solid $color-secondary-dark; // invalid일 경우
    }

    &::placeholder {
      color: $color-grey-dark-2; // placeholder에 스타일 주기
    }

  }

  &__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: .7rem;
    display: block;
    transition: all .3s;
  }

  &__input:placeholder-shown + &__label { //placeholder 가 보일 때, +는 sibiling 선택
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem); // 아래로 내려가는 효과를 주기위해서 미리 올려둠
  }
}
```

### solid linear-gradient 만들기 (clip-path 와 유사한 효과)
- 아래 예제를 보면 50%에서는 white여야한다. 따라서 0~50%까지는 일정한 색이다. 50%부분에는 투명또한 있다, 50%~100%는 투명이다.
- 50%부분을 중복으로 색으로 줘서 줄이 그어진듯이 나뉘는 효과가 된다. 105 각도로 사선으로 나뉜 효과를 줄 수 있다.
```scss
.book {
  background-image: linear-gradient(105deg,
          rgba($color-white, .9) 0%, 
          rgba($color-white, .9) 50%, // 50% white
          transparent 50%, // 50% transparent
  ), url(../img/nat-10.jpg);
  background-size: 100%;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba($color-black, .2);

  height: 50rem;

  &__form {
    padding: 6rem;
    width: 50%;
  }
}
```

### custom radio button 만들기
- input의 radio는 custom css를 적용할 수 없기 때문에, none 으로 만들고, `:checked`를 활용하여 버튼을 만든다.
- check가 됬을 경우에, 해당 `label`의 child인 `<span>`의 `::after`로 버튼 클릭을 표현해준다.
```html
<div class="form__group">
  <div class="form__radio-group">
    <input type="radio" class="form__radio-input" id="small" name="trip">
    <label for="small" class="form__radio-label">
      <span class="form__radio-button"></span>
      Small tour group
    </label>
  </div>
  <div class="form__radio-group">
    <input type="radio" class="form__radio-input" id="large" name="trip">
    <label for="large" class="form__radio-label">
      <span class="form__radio-button"></span>
      Large tour group
    </label>
  </div>
</div>
```
```scss
&__radio {
  &-group {
    width: 49%;
    display: inline-block;
  }

  &-input {
    display: none;
  }

  &-label {
    font-size: $default-font-size;
    cursor: pointer;
    position: relative;
    padding-left: 4.5rem; // span element 와의 거리를 주기위함 (이거 없으면 겹침)
  }

  &-button {
    height: 3rem;
    width: 3rem;
    border: 5px solid $color-primary;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: -.2rem;

    &::after {
      content: "";
      display: block;
      height: 1.5rem;
      width: 1.5rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      position: absolute;
      background-color: $color-primary;
      opacity: 0;
      transition: opacity .2s;
    }
  }
}

&__radio-input:checked ~ &__radio-label &__radio-button::after {
  opacity: 1;
}

```

### inline 스타일
- 중앙정렬: `text-align: center` 로 할 수 있다. inline은 text와 같은 방식으로 처리되기 때문이다.
- `display: inline-block` 으로 컨텐츠가 있는 범위까지만 border가 생기도록 할 수 있다.

## Scss Directory
### utility directory
- text-center, margin-size 등의 여러군데에서 적용할 수 있는 css값들을 모아둔다.
- `margin-bottom-sm`, `margin-bottom-lg` 와 같이 숫자보다 small, large와 같은 이름을 활용하여 추후에 변경이 더 쉽게 된다. (margin-bottom-8 이런식은 사이즈와 class 이름을 동시에 업데이트 해줘야 하므로)

### pages directory
- 해당페이지에만 들어가는 selector 를 모아둔다.

### abstract directory
- variable에서 `$default-font-size`를 지정해준다. (자주 사용하므로)



















































