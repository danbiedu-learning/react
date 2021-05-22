## App Challenges
- Need to be able to naviage around to separate pages in our app
- Need to allow a user to login/logout
- Need to handle forms in Redux
- Need to master CRUD operations in React/Redux
- Need good error handling

## App Description
### User is not logged in
- User can view a list of all streams/channels
- User can view video for a single stream

### User is logged in
- User can create a new stream/channel
- User can edit a stream/channel they have created
- User can delete a stream/channel they have created

## React-Router-Dom
### BrowserRouter
- history는 browser의 address bar를 track하는데, history의 URL changes를 listen함

### 매칭되는 path를 모두 render함
- 아래와 같이 되어 있다면, PageOne이 두번 보인다. (deep nesting은 오히려 어렵게 만들기 때문에, 매칭되는건 다 rendering되게 되어있다)
```javascript
const PageOne = () => {
  return <div>PageOne</div>
}
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/" exact component={PageOne} />
      </div>
    </BrowserRouter>
  )
}
```

### a tag Navigation의 문제점

#### a tag로 Navigation하면 다음 순서로 진행됨

- `<a />` tag를 넣고 href='/pagetwo'로 이동 (클릭)
- browser가 localhost:3000/pagetwo로 request를 날림
- development server가 index.html 파일로 respond함
- **browser가 index.html 파일을 받고, 보이고 있던 기존의 html 파일을 dump함 (React, Redux state 모두 dump)**
- index.html 파일이 js 파일을 script tag에 list함 (다운로드하고 script를 실행함)

### Link tag 사용
- React Router prevents the browser from navigating to the new page and fetching new index.html file
```javascript
<Link to="/pagetwo">Go to PageTwo</Link>
```
- router는 3가지가 있다. (component이름, url, 설명) 도메인은 localhost:3000으로 가정함
  - `<BrowserRouter>`, **/pagetwo**, uses everything after the TLD(.com, .net) or port as the 'path'
  - `<HashRouter>`, **/#/pagetwo**, uses everything after a # as the path
    - 간혹 일반적인 path처리를 못하는 경우가 있다. 그런경우 hash로 route한다.
    - 예시로 github의 경우 hash router 방식을 사용한다.
  - `<MemoryRouter>`, **/**, Doesn't use the URL to track navigation

- domain페이지에 request를 보내고 index.html을 받는다. 그 뒤에 있는 url path는 client에서 처리하는 것임