# Building Content with JSX

- Link
  - Babel : https://babekjs.io

## What is JSX?

It's not HTML at all

- jsx → [babel] → normal javascript
- jsx can makes more readable, understandable

## Converting HTML to JSX

![DongYun_Hwang_zzid/Screen_Shot_2021-01-06_at_12.21.22_PM.png](DongYun_Hwang_zzid/Screen_Shot_2021-01-06_at_12.21.22_PM.png)

## Inline Styling with JSX

![DongYun_Hwang_zzid/Screen_Shot_2021-01-06_at_12.32.29_PM.png](DongYun_Hwang_zzid/Screen_Shot_2021-01-06_at_12.32.29_PM.png)

![DongYun_Hwang_zzid/Screen_Shot_2021-01-06_at_12.33.37_PM.png](DongYun_Hwang_zzid/Screen_Shot_2021-01-06_at_12.33.37_PM.png)

### in JSX,

- first {} : means, it's indicate JS variable
- second {} : means, JS Object

### Convention

double quotes : in JSX all of string use double quotes.

single quote : non-JSX e.g) <div style={{ backgroundColor : 'red' }}>

## class VS className

`class App extends React.Component` VS `<label className= "label" />`

- JSX 에서는 JS class 와 혼동 되지 않게 하려고 className이라고 쓴다.

## Values JSX Can't Show

- JS Object can't be react child
