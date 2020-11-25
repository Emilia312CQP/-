#### 在原生js中，利用insertAdjacentHTML()可以直接把字符串格式元素添加到父元素中。

语法： element.insertAdjacentHTML(position,text);

参数说明：

position可选参数：

beforebegin:元素自身的前面。

afterbegin:插入元素内部的第一个子节点之前。

beforeend:插入元素内部的最后一个子节点之后。

afterend:元素自身的后面。



text:是要写入element元素内的元素+字符串

#### 阻止双击文字，默认选中文字：

window.gerSelection?window.getSelection().removeAllRanges():document.selection.empty();

#### js控制失去焦点事件：el.blur();

js控制input框内的文字被选中：input.select();