### 打鼹鼠游戏

[效果预览](https://wenwenhua.github.io/javascript30/30%20-%20Whack%20A%20Mole/) ：点击图中的 start 按钮，鼹鼠出洞，在鼹鼠出洞时鼠标点击鼹鼠则加分。

**代码中的知识点**

1.获取某个范围内的随机数

```javascript
function getRandomNum(min, max){
	return Math.round(Math.random() * (max - min) + min) 
}
```
2.获取随机“洞口”
```javascript
function randomHole(holes){
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  /* 如果两次 获取的洞口是同一个，则重新获取*/
  if (hole === lastHole) {
    randomHole(holes);
  }
  lastHole = hole;
  return hole;
}
```

3.整体的思路

点击按钮之后触发 startGame() 函数，在 startGame() 函数里执行 peep() 函数并对游戏数据进行初始化。在 peep() 函数中调用 randomHole 函数和 getRandomNum 函数来获取随机洞口和洞口出现的时间。对所有的鼹鼠绑定 bonk 方法来确定鼹鼠是否被打中并显示计分。


