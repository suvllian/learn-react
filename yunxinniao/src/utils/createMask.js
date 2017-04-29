const createMask = (inner) => {
	let removeNode = insertNode(inner);

	// 获取弹出层Node节点
	let maskImage = document.querySelector("#mask-image");
	let mask = document.querySelector("#mask");

	// 获取屏幕信息
	let screenInfo = getScreenScale();

	// 判断是长屏还是宽屏，即电脑屏幕和手机屏幕的区别
	if (screenInfo.scale > 1) {
		// 宽屏
		maskImage.className = "width-mask";
	} else {
		// 长屏
		maskImage.className = "height-mask";
	}

	let addListener = (event) => {
		let e = window.event ? window.event : event;
	    let target = e.srcElement || e.target;

	    if (target.id == "mask-image" || target.id == "left" || target.id == "right") {
	        return;
	    } else {
	        while (target.id != "left" && target.id != "right" && target.id != "mask-image" && target.nodeName.toLowerCase() != "html") {
	            target = target.parentNode;
	        }
	        if (target.nodeName.toLowerCase() == "html") {

	        	// 删除Node节点
	            removeNode();
	        }
	    }
	}

	// 弹出层出现后给弹出层添加监听事件，
	// 点击图片之外区域隐藏
	mask.addEventListener("click", addListener);
}

/*
  创建节点插入文档中
 */
const insertNode = (element) => {
	let body = document.body;
	let div = document.createElement("div");
	div.id = "mask";
	div.innerHTML = element;
	body.appendChild(div);

	/* 
	   使用闭包，保持当前DOM节点的引用
	   返回函数，在需要的时候删除该DOM节点
	 */
	let removeNode = () => body.removeChild(div)
	return removeNode;
}

const getScreenScale = () => {
	let height = document.documentElement.clientHeight;
	let width = document.documentElement.clientWidth;
	let scale = width / height;

	return {
		height: height,
		width: width, 
		scale: scale
	}
} 

export { createMask }