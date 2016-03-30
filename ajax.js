if (window.ActiveXObject) {
	xmlHttpReq = new Active XObject('Microsoft.XMHHTTP');
} else if (window.XMLHttpRequest) {
	xmlHttpReq = new XMLHttpRequest;
}

xmlHttpReq.open('GET', 'test.php', true);
xmlHttpReq.onreadystatechange = RequestCallBack;

xmlHttpReq.send(null);

function RequestCallBack () {
	if (xmlHttpReq.readhState == 4) {
		if (xmlHttpReq.status == 200) {
			document.getElementById('resText').innerHTML = xmlHttpReq.responseText;
		}
	}
}