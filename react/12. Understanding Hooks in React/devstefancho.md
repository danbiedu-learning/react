## Hooks System
![](./img/hooks_system.png)
![](./img/primitive_hooks.png)
![](./img/custom_hook.png)
### Functional Component의 단점
- helper functions를 organize하는데에 class components보다 좋지 않다.
- 아래 두가지를 비교해보면 helper function이 많아지면, class에서 정리가 더 수월(깔끔)함을 알 수 있음
```js
const Accordion = () => {
    const onTitleClick = () => {
        console.log('clicked');
    }
    
    return ( <div onClick={() => {onTitleClick()}}>Click!</div> )
}
```
```js
class Accordion extends React.Component {
    onTitleClick() {
        console.log('clicked');
    }

    render() {
        return ( <div onClick={() => {onTitleClick()}}>Click!</div> )
    }
}
```
### useState
- useState는 array의 destructuring 형태이다.
- setState 처럼 한번에 여러 state를 set할 수 없다. (state마다 useState를 call 해줘야함)
- useState로 state를 set할때마다 컴포넌트가 re-render된다. 이때 useState의 argument인 초기값은 적용되지 않는다. (최초 랜더링때만 초기값이 적용됨)
![](./img/useState.png)
![](./img/useState_compare.png)

## cdnjs
- [cdnjs](https://cdnjs.com/) 에서 필요한 cdn url검색 (ex. semantic ui 검색)

## Accordion
### state
- App에서 activeIndex props를 내려주는 것이 아니라, Accordion component가 본인의 activeIndex를 아는 것으로 설계
![](./img/accordion.png)