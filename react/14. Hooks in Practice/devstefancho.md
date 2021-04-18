## Class Component를 Hooks로 바꾸기

- 바꿀때 특별한 우선순위없이 코드 위에서 아래로 순차적으로 바꿈
- Hooks로 바꾸면서 Hooks로 이득을 볼 수 있는 부분들을 바꿔준다.

### callback function의 간결화

- 아래 두 코드는 같은 코드이다. parameter가 하나인데, 그걸 그대로 받아서 실행하는 경우, 코드길이를 줄일 수 있다.
  ```javascript
  <VideoList
    videos={videos}
    onVideoSelect={(video) => setSelectedVideos(video)}
  />
  ```
  ```javascript
  <VideoList videos={videos} onVideoSelect={setSelectedVideos} />
  ```
