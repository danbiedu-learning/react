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

### custom hooks

- custom hooks는 jsx를 포함하지 않고, 최소 1개 이상의 primitive hooks만 있도록 만든다. (jsx가 있어야한다면, component로 만들어야 함)
- 재 사용성을 위해 한가지 목적만 갖고 있어야한다.
  ![](./img/custom_hooks.png)
  ![](./img/custom_hooks_process.png)
- custom hook으로 분리할 때, 한가지 목적만 갖도록 분리한다. 또한 input과 ouput을 구분해야한다. input은 user로 부터 입력받는 값이거나 초기값이라고 생각하면 된다.
  ![](./img/seperate_custom_hooks.png)
  ![](./img/input_custom_hooks.png)
  ![](./img/output_custom_hooks.png)

## Deployment (chapter 15 내용)

### vercel

- [versel](https://vercel.com/)에 sign up하고 아래 커맨드로 진행 (최초 vercel에는 email에서 인증을 해줘야함)
  - 참고 : 설정값은 기본값으로 사용하려면 enter를 계속 치면 된다.

```bash
> npm install -g vercel
# go to your project directory
> vercel
# If you modify your project
> vercel --prod
```

### Netlify

- netlify는 push할때마다 자동으로 re-build 한다.
- 아래 순서로 진행
  1. github에 repo 생성
  2. project를 새로운 repo와 연결
  - `> git remote add origin {github repo link}`
  3. github에 push
  4. netlify(https://www.netlify.com/)에 sign up
  5. github 계정을 연결하고, deploy할 repo를 선택
