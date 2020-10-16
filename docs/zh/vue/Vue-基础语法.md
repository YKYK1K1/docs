# **Vue 基础语法**

## **插值语法**
---

### **Mustache**

- 如何将 data 中的文本数据，插入到 HTML中呢？
    - 我们已经学习过了，可以通过 `Mustache` 语法(也就是双大括号)。
    - `Mustache`: 胡子/胡须.
- 我们可以像下面这样来使用，并且数据是响应式的

<br />

![](/docs/assets/vue/图片1.png)

<br />

### **v-once**

- 但是，在某些情况下，我们可能不希望界面随意的跟随改变
    - 这个时候，我们就可以使用一个 Vue 的指令
- v-once: 
    - 该指令后面不需要跟任何表达式(比如之前的 v-for 后面是由跟表达式的)
    - 该指令表示元素和组件(组件后面才会学习)只渲染一次，不会随着数据的改变而改变。
- 代码如下：

![](/docs/assets/vue/v-once图片2.png)


### **v-html**

- 某些情况下，我们从服务器请求到的数据本身就是一个 HTML 代码
    - 如果我们直接通过{{}}来输出，会将HTML代码也一起输出。
    - 但是我们可能希望的是按照 HTML 格式进行解析，并且显示对应的内容。
- 如果我们希望解析出 HTML 展示
    - 可以使用 `v-html` 指令
        - 该指令后面往往会跟上一个 string 类型
        - 会将 string 的 html 解析出来并且进行渲染

![](/docs/assets/vue/v-html-图片2.png)
       
### **v-text**

- `v-text` 作用和 Mustache 比较相似：都是用于将数据显示在界面中
- `v-text` 通常情况下，接受一个string类型

![](/docs/assets/vue/yky-20200720153209.png)

### **v-pre**

- `v-pre` 用于跳过这个元素和它子元素的编译过程，用于显示原本的 Mustache 语法。
- 比如下面的代码：
    - 第一个 h2 元素中的内容会被编译解析出来对应的内容
    - 第二个 h2 元素中会直接显示{{message}}

![](/docs/assets/vue/yky-20200720153327.png)

### **v-cloak**

- 在某些情况下，我们浏览器可能会直接显然出未编译的Mustache标签。
- cloak: 斗篷

![](/docs/assets/vue/yky-20200720153435.png)

## **绑定属性**
---

### **v-bind 介绍**

- 前面我们学习的指令主要作用是将值插入到我们模板的内容当中。
- 但是，除了内容需要动态来决定外，某些属性我们也希望动态来绑定。
    - 比如动态绑定 a 元素的 href 属性
    - 比如动态绑定 img 元素的 src 属性
- 这个时候，我们可以使用 v-bind 指令：
    - 作用：动态绑定属性
    - 缩写：`:`
    - 预期：any (with argument) | Object (without argument)
    - 参数：attrOrProp (optional)

- 下面，我们就具体来学习v-bind的使用。

### **v-bind 基础**

- `v-bind`用于绑定一个或多个属性值，或者向另一个组件传递 `props` 值(这个学到组件时再介绍)
- 在开发中，有哪些属性需要动态进行绑定呢？
    - 还是有很多的，比如图片的链接 src、网站的链接 href、动态绑定一些类、样式等等
- 比如通过 Vue 实例中的 data 绑定元素的 src 和 href，代码如下：

![](/docs/assets/vue/yky-20200720210438.png)

### **v-bind 语法糖**

- `v-bind` 有一个对应的语法糖，也就是简写方式
    - 在开发中，我们通常会使用语法糖的形式，因为这样更加简洁。
- 简写方式如下：

![](/docs/assets/vue/yky-20200721085938.png)

### **v-bind 绑定 class（一）**

- 很多时候，我们希望动态的来切换 class，比如：
    - 当数据为某个状态时，字体显示红色。
    - 当数据另一个状态时，字体显示黑色。
- 绑定 class 有两种方式：
    - 对象语法
    - 数组语法

![](/docs/assets/vue/yky-20200721092548.png)

### **v-bind 绑定 class（二）**

- 绑定方式：对象语法
    - 对象语法的含义是: class 后面跟的是一个对象。
- 对象语法有下面这些用法：

```html
<!-- 用法一：直接通过{}绑定一个类 -->
<h2 :class="{'active': isActive}">Hello World</h2>

<!-- 用法二：也可以通过判断，传入多个值 -->
<h2 :class="{'active': isActive, 'line': isLine}">Hello World</h2>

<!-- 用法三：和普通的类同时存在，并不冲突 -->
<!--注：如果 isActive 和 isLine 都为 true，那么会有 title/active/line 三个类 -->
<h2 class="title" :class="{'active': isActive, 'line': isLine}">Hello World</h2>

<!-- 用法四：如果过于复杂，可以放在一个 methods 或者 computed 中 -->
<!-- 注：classes是一个计算属性 -->
<h2 class="title" :class="classes">Hello World</h2>
```
### **v-bind 绑定 class（三）**

- 绑定方式：数组语法
    - 数组语法的含义是: class 后面跟的是一个数组。
- 数组语法有下面这些用法：

```html
<!-- 用法一：直接通过 {} 绑定一个类 -->
<h2 :class="['active']">Hello World</h2>

<!-- 用法二：也可以传入多个值 -->
<h2 :class=“[‘active’, 'line']">Hello World</h2>

<!-- 用法三：和普通的类同时存在，并不冲突 -->
<!-- 注：会有 title/active/line 三个类 -->
<h2 class="title" :class=“[‘active’, 'line']">Hello World</h2>

<!-- 用法四：如果过于复杂，可以放在一个 methods 或者 computed 中 -->
<!-- 注：classes 是一个计算属性 -->
<h2 class="title" :class="classes">Hello World</h2>
```

### **v-bind 绑定 style（一）**

- 我们可以利用 `v-bind:style` 来绑定一些 CSS 内联样式。
- 在写 CSS 属性名的时候，比如 `font-size`
    - 我们可以使用驼峰式 (camelCase)  fontSize 
    - 或短横线分隔 (kebab-case，记得用单引号括起来) `'font-size'`
- 绑定 class 有两种方式：
    - 对象语法
    - 数组语法



### **v-bind 绑定 style（二）**

- 绑定方式一：对象语法

```html
:style="{color: currentColor, fontSize: fontSize + 'px'}"
```

- style 后面跟的是一个对象类型
    - 对象的 key 是 CSS 属性名称
    - 对象的 value 是具体赋的值，值可以来自于 data 中的属性

- 绑定方式二：数组语法
```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```
- style 后面跟的是一个数组类型
    - 多个值以，分割即可


## **计算属性**
---

### **什么是计算属性？**

- 我们知道，在模板中可以直接通过插值语法显示一些 `data` 中的数据。
- 但是在某些情况，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示
    - 比如我们有 `firstName` 和 `lastName` 两个变量，我们需要显示完整的名称。
    - 但是如果多个地方都需要显示完整的名称，我们就需要写多个{{firstName}} {{lastName}}
- 我们可以将上面的代码换成计算属性：
    - OK，我们发现计算属性是写在实例的 `computed` 选项中的。

![](/docs/assets/vue/yky-20200721205933.png)

### **计算属性的复杂操作**

- 计算属性中也可以进行一些更加复杂的操作，比如下面的例子：

![](/docs/assets/vue/yky-计算属性的复杂操作.png)

### **计算属性的 `setter` 和 `getter`**

- 每个计算属性都包含一个 `getter` 和一个 `setter`
    - 在上面的例子中，我们只是使用 `getter` 来读取。
    - 在某些情况下，你也可以提供一个 `setter` 方法（不常用）。
    - 在需要写 `setter` 的时候，代码如下：

![](/docs/assets/vue/yky-计算属性的setting和getting.png)

### **计算属性的缓存**

- 我们可能会考虑这样的一个问题：
    - `methods` 和 `computed` 看起来都可以实现我们的功能，
    - 那么为什么还要多一个计算属性这个东西呢？
    - 原因：**计算属性会进行缓存，如果多次使用时，计算属性只会调用一次。**
- 我们来看下面的代码：

![](/docs/assets/vue/yky-20200721210623.png)

## **补充：ES6 补充**
---
### **`let`/`var`**

- 事实上 `var` 的设计可以看成 `JavaScript` 语言设计上的错误. 但是这种错误多半不能修复和移除, 以为需要向后兼容.
    - 大概十年前, Brendan Eich 就决定修复这个问题, 于是他添加了一个新的关键字: `let`
    - 我们可以将`let` 看成更完美的 `var`
- 块级作用域
    - JS 中使用 `var` 来声明一个变量时, 变量的作用域主要是和函数的定义有关.
    - 针对于其他块定义来说是没有作用域的，比如 `if/for` 等，这在我们开发中往往会引起一些问题。

![](/docs/assets/vue/yky-20200722093619.png)

### **`const`的使用**

- `const` 关键字
    - 在很多语言中已经存在, 比如 C/C++ 中, 主要的作用是将某个变量修饰为常量.
    - 在 JavaScript 中也是如此, 使用 const 修饰的标识符为常量, 不可以再次赋值.
- 什么时候使用 const 呢?
    - 当我们修饰的标识符不会被再次赋值时, 就可以使用 `const` 来保证数据的安全性.
- **建议: 在 ES6 开发中,优先使用 `const` , 只有需要改变某一个标识符的时候才使用 `let`**
- **const的注意**
    - `const`注意一:

    ![](/docs/assets/vue/yky-const-1.png)
    
    <br />

    - `const`注意二:

    ![](/docs/assets/vue/yky-const-2.png)

### **对象增强写法**
- ES6 中，对对象字面量进行了很多增强。
- 属性初始化简写和方法的简写：

![](/docs/assets/vue/yky-20200722095019.png)


## **事件监听**
---

- 在前端开发中，我们需要经常和用于交互。
    - 这个时候，我们就必须监听用户发生的时间，比如点击、拖拽、键盘事件等等 
    - 在 Vue 中如何监听事件呢？使用 `v-on` 指令
- `v-on`介绍
    - 作用：绑定事件监听器
    - 缩写：`@`
    - 预期：Function | Inline Statement | Object
    - 参数：event

下面，我们就具体来学习 `v-on` 的使用。

### **`v-on` 基础**

<br />

![](/docs/assets/vue/yky-v-on-基础.png)


### **`v-on` 参数**

- 当通过 `methods` 中定义方法，以供 `@click` 调用时，需要注意参数问题：
- 情况一：如果该方法不需要额外参数，那么方法后的()可以不添加。
    - 但是注意：如果方法本身中有一个参数，那么会默认将原生事件 `event` 参数传递进去
- 情况二：如果需要同时传入某个参数，同时需要 `event` 时，可以通过 `$event` 传入事件。

![](/docs/assets/vue/yky-v-on-20200722135148.png)

### **`v-on` 修饰符**

<br />

![](/docs/assets/vue/yky-20200722135403.png)


## **条件判断**
---

### **`v-if`、`v-else-if`、`v-else`**

- `v-if`、`v-else-if`、`v-else`
    - 这三个指令与 JavaScript 的条件语句 `if`、`else`、`else if`类似。
    - Vue 的条件指令可以根据表达式的值在 DOM 中渲染或销毁元素或组件
- 简单的案例演示：

![](/docs/assets/vue/yky-20200722135710.png)

- `v-if`的原理：
    - `v-if` 后面的条件为 false 时，对应的元素以及其子元素不会渲染。
    - 也就是根本没有不会有对应的标签出现在 DOM 中。

### **条件渲染案例**

- 我们来做一个简单的小案例：
    - 用户再登录时，可以切换使用用户账号登录还是邮箱地址登录。
    - 类似如下情景：

![](/docs/assets/vue/yky-20200723093124.png)

### **案例小问题**

<br />

![](/docs/assets/vue/yky-案例小问题-.png)

### **`v-show`**

<br />

![](/docs/assets/vue/yky-v-show.png)


## **循环遍历**
---

### **`v-for` 遍历数组**

<br />

![](/docs/assets/vue/yky-20200723133447.png)

### **`v-for` 遍历对象**

<br />

![](/docs/assets/vue/yky-20200727150005.png)

### **组件的 key 属性**

<br />

![](/docs/assets/vue/yky-20200727102011.png)

### **检测数组更新**

<br />

![](/docs/assets/vue/yky-20200727145503.png)

## **阶段案例**
---

### **图书购物车**

<br />

![](/docs/assets/vue/yky-20200727165219.png)

### **代码实现：HTML、CSS**

<br />

![](/docs/assets/vue/yky-20200727165516.png)

### **代码实现：JS代码**

<br />

![](/docs/assets/vue/yky-20200727203503.png)

### **附：拓展**

1. `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="app">
  <div v-if="books.length">
    <table>
      <thead>
      <tr>
        <th></th>
        <th>书籍名称</th>
        <th>出版日期</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in books">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.date}}</td>
        <td>{{item.price | showPrice}}</td>
        <td>
          <button @click="decrement(index)" :disabled="item.count<2">-</button>
          {{item.count}}
          <button @click="increment(index)">+</button>
        </td>
        <td>
          <button @click="removeHandler(index)">移除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <h2>总价格：{{totalPrice | showPrice}}</h2>
  </div>
  <h2 v-else>购物车为空</h2>
</div>

<script src="../js/vue.js"></script>
<script src="main.js"></script>
</body>
</html>
```

2. `style.css`

```css
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}

th, td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}
```

3. `main.js`

```js
const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.50,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2007-2',
        price: 59.52,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.68,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2011-3',
        price: 128.73,
        count: 1
      }
    ],
  },
  methods: {
    // getFinalPrice(price) {
    //   return '￥' + price.toFixed(2);
    // }
    decrement(index) {
      this.books[index].count--
    },
    increment(index) {
      this.books[index].count++
    },
    removeHandler(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      /* 1.普通的 for 循环 */
      
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }

      /* 2.for (let i in this.books) */
      
      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }

      /* 3.for(let i of this.books) */
      
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }

      //reduce

      return this.books.reduce((preValue, book) => preValue + book.price * book.count,0)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})

```

4. `高阶函数.js`

```js
// 编程范式：命令编程/声明式编程
// 编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
// filter/map/reduce
// filter 中的回调函数有一个要求：必须返回一个 boolean 值
// true：当返回 true 时，函数内部会自动将这次回调的 n 加入到新的数组中
// false： 当返回 false 时，函数内部会过滤掉这次的 n

const nums = [10, 20, 111, 222, 333, 30, 40]

/*   ============== 箭头函数 ============== */
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n, 0)

console.log(total);


/*   ===================== 升级的写法 =====================
let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (preValue, n) {
  return preValue + n
}, 0)

console.log(total);

===========================================================*/


/*   ===================== 最基础的写法 =====================
1. filter 函数使用
let newNums = nums.filter(function (n) {
  return n < 100
});
console.log(newNums);

2. map函数的使用
let newNums2 = newNums.map(function (n) {
return n * 2
})
console.log(newNums2);

3. reduce函数的使用
reduce 作用对数组中所有的内容进行汇总
let newNums3 = newNums2.reduce(function (preValue, n) {
  return preValue + n
}, 0)

console.log(newNums3);

===========================================================*/
```

## **v-model**
---

### **表单绑定 `v-model`**

<br />

![](/docs/assets/vue/yky-20200727203658.png)

### **`v-model` 原理**

<br />

![](/docs/assets/vue/yky-20200727203805.png)

### **v-model：radio**

<br />

![](/docs/assets/vue/yky-20200728090306.png)

### **v-model：checkbox**

<br />

![](/docs/assets/vue/yky-20200728090431.png)

### **v-model：select**

<br />

![](/docs/assets/vue/yky-20200730084153.png)

### **值绑定**

<br />

![](/docs/assets/vue/yky-20200730084240.png)

### **修饰符**

<br />

![](/docs/assets/vue/yky-20200730084324.png)

### ****