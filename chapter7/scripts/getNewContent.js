function getNewContent(){
	var requrest = getHTTPObject();
	if(request){
		request.open('GET', 'ajax.txt', true);
		request.onreadystatechange = function(){
			if(request.readyState == 4){
				//表示完成
				var para = document.createElement('p');
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	}else{
		alert('Sorry, your browser dosn\‘t support XMLHttpRequest');
	}
}
addLoadEvent(getNewContent);