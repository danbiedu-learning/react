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
  
### useEffect
- callback function에 async를 직접 사용하지 못한다.
- 사용방법은 아래 3가지가 있다.
  - 권장 되는 방식 (helper function)
  ```js
  useEffect(() => {
      const search = async () => {
          await axios.get('url');
      }
      search();
  }, [])
  ```
  - helper function IIFE
  ```js
  useEffect(() => {
    (async () => {
      await axios.get('url');
    })();
  }, [])
  ```
  - axios의 promise를 이용하는 방식
  ```js
  useEffect(() => {
      axios.get('url')
              .then(() => {
                  console.log('promise')
              })
  }, [])
  ```
- something like life methods라고 설명되어 있다. 즉 life cycle methods는 아니고 유사한 방식이라는 것이다.
![](./img/useEffect.png)
![](./img/useEffect_render.png)

## cdnjs
- [cdnjs](https://cdnjs.com/) 에서 필요한 cdn url검색 (ex. semantic ui 검색)

## Accordion Widget
### state
- App에서 activeIndex props를 내려주는 것이 아니라, Accordion component가 본인의 activeIndex를 아는 것으로 설계
![](./img/accordion.png)
  
## Search Widget
### Wikipedia API
`en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCHTERM`
![](./img/search_widget.png)
### Search할 수 있는 방법 
- 왼쪽은 타이핑하면서 바로 검색, 오른쪽은 state로 저장한 후에 검색하는 것으로 오른쪽이 더 좋은 방식이다.
  ![](./img/search_options.png)
  ![](./img/search_options_difference.png)