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