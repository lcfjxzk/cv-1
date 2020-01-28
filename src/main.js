let html = document.querySelector("#html"); //qs的含义，通过CSS选择器找到这个元素demo
let style = document.querySelector("#style");
let string = `/*你好，我叫熊仲轲
*接下来我演示一下我的前端功底
*首先我要准备一个div
*/

#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆
*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/* 八卦是阴阳形成的
* 一黑一白
**/
#div1{  
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*网址：https://cssgradient.io/*/
/*
#div1::before{
  content: '1';
  display: block;
  border: 1px solid red;
}
#div1::after{
  content: '2';
  display: block;
  border: 1px solid red;
}
以上为伪元素:css加上一个元素，相当于HTML里面span元素，所以称为伪元素*/

/*加两个神秘的小球*/
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  /*网址：https://cssgradient.io/-->Radial*/
}
`;

let string2 = "";

//string = string.replace(/\n/g, "<br>");//-->因为会导致有'<',所以放弃，用string2
//replace只会把第一个空格变为回车，所以要用到正则表达式'/\n/g'，把所有空格替换为回车
//console.log(string.length);
let n = 0;
//第4次尝试决定用string2
//尝试3-->demo.innerHTML = string.substring(0, n); //在demo上写字，因为会导致有'<',所以放弃，用string2
//尝试2-->demo.innerHTML = string[n];//依次同一个位置显示文字
let step = () => {
  //console.log("1秒后把n加1并显示");
  setTimeout(() => {
    //尝试6-->解决缩进的问题。在HTML里面，你写的多个空格会变成一个空格，这样缩进就有问题。
    //string2 += string[n] === "\n" ? "<br>" : string[n];

    //尝试5-->把下面的if else语句改为更简洁的问号冒号表达式“表达式 1？表达式 2：表达式 3”
    //string2 += (string[n] === "\n" ? "<br>" : string[n]);
    if (string[n] === "\n") {
      //如果是回车，就不照搬
      string2 += "<br>"; //在HTML里面回车要表示为"<br>"
    } else if (string[n] === " ") {
      //如果不是回车就照搬
      string2 += "&nbsp"; //在HTML里面空格要表示为"&nbsp"
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2; //在html上操作demo
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999); //pc端js控制滚动条位置
    html.scrollTo(0, 99999); //手机端js控制滚动条位置
    //length 55
    //demo.innerHTML = string.substring(0, n); //获取string的第0到第n个
    if (n < string.length - 1) {
      //n=53
      //不是最后一个
      n += 1; //54
      step();
    } else {
      //n 是最后一个
    }
  }, 30);
};

step(); //在写css代码的时候，把这个step注释掉
//用setTimeout模拟setInterval，好处是可以随时停止。

//尝试1-->-------老手不用以下代码------
//setInterval(() => {
//n = n + 1;
//demo.innerHTML = n;
//}, 1000); //3000ms之后再执行'demo.innerHTML = n'
//setTimeout3000ms后响应一次，setInterval每3000ms响应一次。

// setTimeout(() => {
//   style.innerHTML = `
// body{
//   color: red;
// }
// `;
// }, 3000);
