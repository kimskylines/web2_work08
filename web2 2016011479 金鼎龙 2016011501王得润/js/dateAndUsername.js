setInterval(function(){
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	
	var _date = [
		h<10?0:Math.floor(h/10), h%10,
		m<10?0:Math.floor(m/10), m%10,
		s<10?0:Math.floor(s/10), s%10
		]
	console.log(_date);
	
	var img1 = document.getElementById("img1");
	img1.src="image/"+_date[0]+".png";
	
	var img2 = document.getElementById("img2");
	img2.src="image/"+_date[1]+".png";

	var img3 = document.getElementById("img3");
	img3.src="image/"+_date[2]+".png";

	var img4 = document.getElementById("img4");
	img4.src="image/"+_date[3]+".png";

	var img5 = document.getElementById("img5");
	img5.src="image/"+_date[4]+".png";

	var img6 = document.getElementById("img6");
	img6.src="image/"+_date[5]+".png";
}, 1000);

var href = window.location.href ;
console.log(href);
function parseURL(href){
    var href = href.split("?")[1];
    var para = href.split("&");
    var len = para.length;
    var res = {};
    arr = para[0].split("=");
    //console.log(arr[1]);
    alert("用户"+arr[1]+"登录成功");
  	return arr[1];
}
parseURL(href);