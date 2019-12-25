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

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var box1 = document.getElementById('box1');
var NavList = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var isMoving = false;

function next()
{
    index++;
    navChange();
    animate(slider,{left:-400*index},function()
    {
        if(index === 6)
        {
            slider.style.left="-400px";
            index = 1;
        }
    });
}

 function prev()
{
    index--;
    navChange();
    animate(slider,{left:-400*index},function()
    {
        if(index === 0)
        {
            slider.style.left="-2000px";
            index = 5;
        }
    });
}

var timer = setInterval(next,2000);

box1.onmouseover = function()
{
    animate(left,{opacity:50});
    animate(right,{opacity:50});
    clearInterval(timer);
}
box1.onmouseout = function()
{
    animate(left,{opacity:0});
    animate(right,{opacity:0});
    timer = setInterval(next,2000);
}

right.onclick = next;
left.onclick = prev;

for(var i = 0 ; i < NavList.length ; i++)
{
    NavList[i].idx = i;
    NavList[i].onclick = function()
    {
        index = this.idx+1;
        navChange();
        animate(slider,{left:-1000*index});
       
    }
}

function navChange()
{
    for(var i = 0 ; i < NavList.length ; i++)
    {
        NavList[i].className='';
    }
    if(index === 6)
    {
        NavList[0].className = 'active';
    }
    else if(index === 0)
    {
        NavList[4].className = 'active';
    }
    else
    {
        NavList[index-1].className = 'active';
    }
    
}

function Scroll()
{
    var speed=50;
    var MyTest = null;
    var scroll_begin = document.getElementById("scroll_begin");
    var scroll_end = document.getElementById("scroll_end");
    var scroll_div = document.getElementById("scroll_div");
    scroll_end.innerHTML=scroll_begin.innerHTML;

    function Marquee()
    {
        if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0)
            scroll_div.scrollLeft-=scroll_begin.offsetWidth;
        else
            scroll_div.scrollLeft++;
    }
    MyTest=setInterval(Marquee,speed);
    scroll_div.onmouseover = function()
    {
        clearInterval(MyTest);
    }
    scroll_div.onmouseout = function()
    {
        MyTest = setInterval(Marquee,speed);
    }
}
Scroll();


var imgs =["image/zAZfB.jpg","image/ZEhUN.jpg","image/zFC9H.jpg","image/zhWY9.jpg","image/Zin4c.jpg",
					"image/ZITGj.jpg","image/zJ6iV.jpg","image/zjsKP.jpg","image/ZKc9S.jpg","image/zKDXU.jpg"];
var notice1 = document.getElementsByTagName("p")[1];
var notice2 = document.getElementsByTagName("p")[2];
var notice3 = document.getElementsByTagName("p")[3];
var codeimg = document.getElementById("codeImg");

function usernameFun1()
{
	notice1.innerHTML = "请输入4-10位用户名";
}

function usernameFun2()
{
	notice1.innerHTML = "";
}

function passwordFun1()
{
	notice2.innerHTML = "请输入0-12位密码";
}

function passwordFun2()
{
	notice2.innerHTML = "";
}

function codeimgFun()
{
	codeimg.innerHTML = "";
	var num  = Math.floor(Math.random()*10 + 1);
	var img = document.createElement("img");
	img.src = imgs[num-1];
	img.width = 150;
	img.height = 30;

	codeimg.appendChild(img);
}

function login()
{
	var username = document.getElementsByTagName("input")[0].value;
	var password = document.getElementsByTagName("input")[1].value;
	var yanzhengma = document.getElementsByTagName("input")[2].value;

	var code = codeimg.firstChild.getAttribute("src").slice(6,11);

	if(username!=null && username.length<=10 && username.length>=4)
	{
		
	}
	else
	{
		notice1.innerHTML = "用户名位数不对";
	}
	
	if(password!=null && password.length<=10 && username.length>=0)
	{
			
	}
	else
	{
		notice2.innerHTML = "密码位数不对";
	}
	if(yanzhengma == code)
	{
		
	}
	else
	{
		notice3.innerHTML = "验证码不对";
	}
	if(username!=null && username.length<=10 && username.length>=4 &&
	password!=null && password.length<=10 && username.length>=0 &&
	yanzhengma !=null && yanzhengma == code)
	{
		//alert("登录成功");
		window.open("https://htmlpreview.github.io/?https://github.com/kimskylines/web2_work08/master/web2%202016011479%20%E9%87%91%E9%BC%8E%E9%BE%99%202016011501%E7%8E%8B%E5%BE%97%E6%B6%A6/index.html?username="+username);
	}
}