// 解决 IE 不支持 document.getElementsByClassName() 的方法
function getByClassName(className,tagName){
	if(document.getElementsByClassName){
		return document.getElementsByClassName(className);
	}else {
		var nodes = document.getElementsByTagName(tagName), ret = [];
		for(var i=0;i<nodes.length;i++){
			if(hasClass(nodes[i],className)){
				ret.push(nodes[i]);
			}
		}
		return ret;
	}
}

//判读是否存在某个类名
function hasClass (tagStr,className) {
	var arr = tagStr.className.split(/\s+/);//class可能有多个，判断是否包含
	for(var i=0;i<arr.length;i++){
		if(arr[i] === className){
			return true;
		}
	}
	return false;
}