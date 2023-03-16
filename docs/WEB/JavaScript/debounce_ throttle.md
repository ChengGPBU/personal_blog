---
title: 防抖与节流
lang: zh
meta:
  - name: description
    content: debounce、throttle
  - name: keywords
    content: debounce、throttle
---

# js的防抖与节流

> 防抖和节流都是常见的函数优化技术，用于减少函数的调用次数，提高性能

********************************************

##### 防抖
> 防抖是指在一定时间内，如果有多次调用函数，只执行最后一次函数调用。具体实现方式是在函数内部使用**setTimeout**函数来延迟函数执行，如果在延迟时间内有新的函数调用，则取消前一个延迟执行，重新设定一个新的延迟
> 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。
> 应用场景：搜索框搜索


```js
function debounce(func,delay) {
    let timeoutId
    return function(...args) {
        if(timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() =>{
            func.apply(this, args)
        }, delay)
    }
}
```

###### 使用防抖函数的实例
```js
function handleInput() {
    console.log("input event fired")
}

const debounceHandleInput = debounce(handleInput, 1000)

document.getElementById('my-input').addEventListener('input', debounceHandleInput)
```

> 在这个实例中，我们使用**debounce()**函数来创建一个新的函数，用于处理输入框的input事件。我们将延迟时间设置为1000毫秒，这意味着如果在1000毫秒内有多次输入，则只执行最后一次输入的处理函数。

********************************************

##### 节流
> 节流是指在一定时间内，只能触发一次函数调用。具体时间方式是在函数内部使用一个变量来记录上一次函数的调用时间， 如果当前时间与上一次调用的时间间隔小于指定的时间间隔，则不执行函数，否则执行函数，并更新上一次调用的时间
> 指定时间间隔内只会执行一次任务。


```js
// 实现方式一：
function throttle(func,delay) {
    let lastTime = 0
    return function(...args) {
        const now = new Date().getTime()
        if(now - lastTime > delay) {
            func.apply(this, args)
            lastTime = now
        } 
    }
}

// 实现方式二：
// 该方式会立即执行一次
function throttle(func,delay) {
    let isThrottled = false
    return function(...args) {
        if(!isThrottled) {
         func.apply(this, args)
         isThrottled = true
         // delay毫秒后重置
         setTimeout(()=>{
            isThrottled = false
         }, delay)
        }
    }
}

// 实现方式三：
function throttle(func,delay) {
    let timer = 0
    return function(...args) {
       if(timer) {
        return
       }
       timer = setTimeout(() =>{
          func.apply(this, args);
          timer = 0  
       },delay)
    }
}

```

###### 使用节流函数的实例

```js
function handleScroll() {
  console.log('scroll event fired');
}

const throttledHandleScroll = throttle(handleScroll, 1000);

window.addEventListener('scroll', throttledHandleScroll)
```
