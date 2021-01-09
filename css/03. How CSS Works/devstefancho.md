## Three pillars to write Good HTML and CSS

### Responsive design
- Fluid layouts
- Media queries
- Responsive images
- Correct units
- Desktop-first vs mobile-first

### Maintainable and scalable code
- Clean
- Easy-to-understand
- Growth
- Reusable
- How to organize files
- How to name classes
- How to structure HTML

### Web performance
- Less HTTP requests
- Less code
- compress code
- Use a CSS preprocessor
- Less images
- Compress images

### What Happens to css when we load up a webpage
![what happens](./img/loadcss.png)

### CASCADE
- Process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element.
- Author(developer), User, Browser(user-agent)에 의해서 결정 됨

>왼쪽(우선순위 높음), 오른쪽으로 갈수록 우선순위가 낮다.
![specificity](./img/specificity.png)
 
>숫자는 갯수를 의미한다. \
(0,0,1,0), (0,1,2,2), (0,0,0,1), (0,1,2,1) 중에서 (0,1,2,2)가 우선순위가 제일 높으므로 선택됨
![example](./img/specificity-example.png)
> 
![you need to know](./img/specificity-know.png)

 > 1에서 6으로 계산되는 실제로 최종적으로 계산되는 과정을 나타낸다. 
![](./img/value-process.png)
![](./img/value-process-all.png)

> em을 길이로 사용할 경우 current element 기준임을 주의한다. 즉 여기서 font-size가 24px(150%)이므로 이걸 기준으로 책정됨
![](./img/value-process-unit.png)
 
![](./img/value-process-summary.png)
